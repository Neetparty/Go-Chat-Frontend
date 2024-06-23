import { StarIcon, HalfStarIcon, EmptyStarIcon } from "@/app/icons/GlobalIcons"

export const AverageStars = (rate: number | string) => {

    const rating = Number(rate)

    return Array.from({ length: 5 }, (_, index) => {

        const fullStars = Math.floor(rating)
        const halfStar = rating % 1

        if (index + 1 <= rating) {
            return <StarIcon key={index} color="starYellow" />
        } else if ((halfStar >= 0.5) && (index == fullStars)) {
            return <HalfStarIcon key={index} color="starYellow" />
        } else {
            return <EmptyStarIcon key={index} color='blackAlpha.300' />
        }
    })
}