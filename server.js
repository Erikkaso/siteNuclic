// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Função simples para evitar HTML injection no corpo do e-mail
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Endpoint que o front chama: POST /api/send-email
app.post('/api/send-email', async (req, res) => {
  const { nome, empresa, email, mensagem } = req.body || {};

  if (!nome || !empresa || !email) {
    return res.status(400).json({ error: 'Campos obrigatórios não informados.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const plainText = [
      'Interesse em Patrocinar - ExpoIoT 2025',
      '',
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `E-mail: ${email}`,
      '',
      'Mensagem:',
      mensagem || '(sem mensagem adicional)'
    ].join('\n');

    const htmlText = `
      <h2>Interesse em Patrocinar - ExpoIoT 2025</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(mensagem || '(sem mensagem adicional)')}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'nuclic@sobral.ufc.br',
      subject: 'Interesse em Patrocinar',
      text: plainText,
      html: htmlText
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return res.status(500).json({ error: 'Erro interno ao enviar e-mail.' });
  }
});

// Fallback para SPA (se alguém acessar rota direta)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
