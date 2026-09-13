type ImageFrameProps = {
  src?: string;
  label: string;
  className?: string;
};

export function ImageFrame({
  src,
  label,
  className = '',
}: ImageFrameProps) {
  return (
    <div
      className={`image-frame ${className}`}
      role="img"
      aria-label={`${label} image`}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          className="image-frame-photo"
        />
      ) : (
        <>
          <span className="frame-mark">D</span>

          <span className="frame-label">
            {label}
            <br />
            Image placeholder
          </span>
        </>
      )}
    </div>
  );
}