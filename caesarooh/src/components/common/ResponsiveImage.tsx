'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fallback?: React.ReactNode;
}

/**
 * A client component for handling responsive images with error fallback
 */
export default function ResponsiveImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className = '',
  sizes,
  fallback
}: ResponsiveImageProps) {
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
} 