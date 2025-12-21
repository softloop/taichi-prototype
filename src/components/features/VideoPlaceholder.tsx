interface VideoPlaceholderProps {
  title?: string
  caption?: string
}

export default function VideoPlaceholder({ title, caption }: VideoPlaceholderProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-4 font-display text-2xl font-normal text-dark">{title}</h3>
      )}
      <div className="aspect-video w-full rounded-lg bg-background-alt flex items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-primary/50 mb-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          <p className="text-sm text-dark/40">Video-Platzhalter</p>
        </div>
      </div>
      {caption && (
        <p className="mt-4 text-sm italic text-dark/60">{caption}</p>
      )}
    </div>
  )
}






