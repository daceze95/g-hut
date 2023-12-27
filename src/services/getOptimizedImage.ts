export const getOptimizedImage = (backgroundImageUrl: string) => {
    const mediaString = 'media/';
    const mediaIndex = backgroundImageUrl.indexOf(mediaString) + mediaString.length;
    return `${backgroundImageUrl.slice(0, mediaIndex)}crop/600/400/${backgroundImageUrl.slice(mediaIndex)}`;
}


