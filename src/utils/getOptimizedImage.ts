import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

export const getOptimizedImage = (backgroundImageUrl: string) => {
    if (!backgroundImageUrl) return noImage;
    const mediaString = 'media/';
    const mediaIndex = backgroundImageUrl.indexOf(mediaString) + mediaString.length;
    return `${backgroundImageUrl.slice(0, mediaIndex)}crop/600/400/${backgroundImageUrl.slice(mediaIndex)}`;
}


