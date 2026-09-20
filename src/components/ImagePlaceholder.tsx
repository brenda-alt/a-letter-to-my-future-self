import { useState } from 'react'

type ImagePlaceholderProps = {
  /** Path from `src/content/images.ts` — files live in `public/images/` */
  src?: string
  alt: string
  caption?: string
  aspect?: string
  className?: string
}

export function ImagePlaceholder({
  src,
  alt,
  caption,
  aspect = '4 / 5',
  className = '',
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <figure className={`image-reveal ${className}`}>
      <div
        className="glow-soft relative overflow-hidden rounded-2xl border border-line bg-ink"
        style={{ aspectRatio: aspect }}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgb(30_58_90/0.45),transparent_55%),linear-gradient(160deg,#07111d,#0a1a30)]">
            <div className="h-px w-16 bg-ice/40" />
            <p className="text-[11px] font-medium tracking-[0.28em] text-ice/80 uppercase">
              Image placeholder
            </p>
            <p className="max-w-[14rem] px-4 text-center text-sm text-mist/70">
              {caption ?? 'Add your photo in public/images'}
            </p>
            <div className="h-px w-16 bg-ice/40" />
          </div>
        )}
      </div>
    </figure>
  )
}
