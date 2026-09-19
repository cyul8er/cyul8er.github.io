// An image slot: shows the image, or a hatched placeholder when there is none.
export default function Art({ src, alt, className = "" }) {
  return (
    <div className={`art ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <span className="art-empty" aria-hidden="true" />
      )}
    </div>
  );
}