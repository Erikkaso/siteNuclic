import { FiCamera as CameraIcon } from "react-icons/fi";

interface ImagePlaceholderProps {
  className?: string;
  height?: number | string;
  label: string;
  width?: number | string;
}

export function ImagePlaceholder({
  className = "",
  height = "100%",
  label,
  width = "100%",
}: ImagePlaceholderProps) {
  return (
    // TODO: substituir por imagem real
    <div
      style={{ width, height }}
      className={`relative flex items-center justify-center overflow-hidden rounded-md border border-dashed border-white/80 bg-gradient-to-br from-[#67d9ef]/70 to-[#0a9abc]/70 ${className}`}
      role="img"
      aria-label={`Placeholder de imagem: ${label}`}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center text-white">
        <CameraIcon size={28} aria-hidden="true" />
        <span className="font-mono text-xs">[IMAGEM: {label}]</span>
      </div>
    </div>
  );
}
