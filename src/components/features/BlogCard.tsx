'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { BlogPost } from '@/data/blog'

interface BlogCardProps extends BlogPost {
  variant?: 'featured' | 'compact'
}

export default function BlogCard({
  date,
  slug,
  title,
  autor,
  beschreibung,
  bild,
  themen,
  variant = 'compact',
}: BlogCardProps) {
  const href = `/wissen/blog/${slug}`
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  if (variant === 'featured') {
    return (
      <article className="group rounded-lg border border-border bg-white overflow-hidden shadow-sm transition-all hover:shadow-md">
        <Link href={href} className="block">
          <div className="aspect-[16/9] bg-background-alt relative overflow-hidden">
            {bild && !imageError ? (
              <>
                <Image
                  src={bild}
                  alt={title}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onError={() => {
                    setImageError(true)
                    setImageLoading(false)
                  }}
                  onLoad={() => setImageLoading(false)}
                  unoptimized
                />
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-dark/20">
                    ✍️
                  </div>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-6xl text-dark/20">
                ✍️
              </div>
            )}
          </div>
        </Link>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2 text-sm text-dark/60">
            <span>{date}</span>
            {autor && (
              <>
                <span>·</span>
                <span>{autor}</span>
              </>
            )}
          </div>
          <Link href={href}>
            <h3 className="mb-3 font-display text-2xl font-normal text-dark group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          {beschreibung && (
            <p className="mb-4 text-dark/80 line-clamp-3">{beschreibung}</p>
          )}
          {themen && themen.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {themen.map((thema, idx) => (
                <Tag key={idx} variant="outline">
                  {thema}
                </Tag>
              ))}
            </div>
          )}
          <Button href={href} variant="secondary" className="w-full md:w-auto">
            Weiterlesen →
          </Button>
        </div>
      </article>
    )
  }

  // Compact variant
  return (
    <article className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <Link href={href} className="block">
          <div className="aspect-[4/3] bg-background-alt rounded-lg overflow-hidden relative">
            {bild && !imageError ? (
              <>
                <Image
                  src={bild}
                  alt={title}
                  fill
                  className={`object-cover rounded-lg transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onError={() => {
                    setImageError(true)
                    setImageLoading(false)
                  }}
                  onLoad={() => setImageLoading(false)}
                  unoptimized
                />
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-dark/20">
                    ✍️
                  </div>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-dark/20">
                ✍️
              </div>
            )}
          </div>
        </Link>
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-dark/60">
            <span>{date}</span>
            {autor && (
              <>
                <span>·</span>
                <span>{autor}</span>
              </>
            )}
          </div>
          <Link href={href}>
            <h3 className="mb-2 font-display text-xl font-normal text-dark group-hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          {beschreibung && (
            <p className="mb-4 text-dark/80 line-clamp-2">{beschreibung}</p>
          )}
          <div className="flex items-center justify-between">
            {themen && themen.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {themen.map((thema, idx) => (
                  <Tag key={idx} variant="outline">
                    {thema}
                  </Tag>
                ))}
              </div>
            )}
            <Button href={href} variant="secondary" className="ml-auto">
              Weiterlesen →
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
