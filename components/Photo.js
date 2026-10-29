export default function Photo({ src, alt, className = "", children }) {
  return (
    <div
      className={`photo ${className}`}
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url("${src}")` }}
    >
      {children}
    </div>
  );
}