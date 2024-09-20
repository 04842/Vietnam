// src/components/OptimizedImage.tsx

import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

interface OptimizedImageProps {
  imageData: IGatsbyImageData
  alt: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ imageData, alt }) => {
  const image = getImage(imageData)
  return image ? <GatsbyImage image={image} alt={alt} /> : null
}

export default OptimizedImage