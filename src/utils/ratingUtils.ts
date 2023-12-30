import { IconType } from 'react-icons';
import { BsStarFill, BsStar } from 'react-icons/bs';

const generateFilledStar = (rating?: number) =>
    [...new Array(rating)].map((_) => BsStarFill);
const generateUnFilledStar = (rating?: number) =>
    [...new Array(rating)].map((_) => BsStar);

export const generateRatingStar = (rating: number = 1) => {
    const idealRatingStar = 5 as const;
    const remainingStar = idealRatingStar - rating;
    let generatedUnfilledStar: IconType[] = [];

    if (remainingStar > 0) {
        generatedUnfilledStar = generateUnFilledStar(remainingStar);
    }
    return [...generateFilledStar(rating), ...generatedUnfilledStar];
};