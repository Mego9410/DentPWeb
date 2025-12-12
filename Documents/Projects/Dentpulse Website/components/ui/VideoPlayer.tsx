'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
  src?: string
  youtubeId?: string
  vimeoId?: string
  title?: string
  className?: string
  autoplay?: boolean
  controls?: boolean
}

export default function VideoPlayer({
  src,
  youtubeId,
  vimeoId,
  title = 'Video player',
  className,
  autoplay = false,
  controls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement !== containerRef.current) return

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handlePlayPause()
      }
    }

    containerRef.current?.addEventListener('keydown', handleKeyDown)
    return () => {
      containerRef.current?.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  // YouTube embed
  if (youtubeId) {
    return (
      <div className={cn('relative w-full aspect-video', className)}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?${autoplay ? 'autoplay=1&' : ''}rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    )
  }

  // Vimeo embed
  if (vimeoId) {
    return (
      <div className={cn('relative w-full aspect-video', className)}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?${autoplay ? 'autoplay=1&' : ''}title=0&byline=0&portrait=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    )
  }

  // Hosted video
  if (src) {
    return (
      <div
        ref={containerRef}
        className={cn('relative w-full aspect-video bg-black rounded-lg overflow-hidden', className)}
        tabIndex={0}
        role="button"
        aria-label={`${title} video player. Press space or enter to play/pause.`}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white">Loading video...</div>
          </div>
        )}
        <video
          ref={videoRef}
          src={src}
          controls={controls}
          className="w-full h-full"
          onLoadedData={handleLoadedData}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-label={title}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div className={cn('w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center', className)}>
      <p className="text-gray-500">No video source provided</p>
    </div>
  )
}

