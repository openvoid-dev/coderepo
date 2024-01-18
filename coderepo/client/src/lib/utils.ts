import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

import {
    parseISO,
    formatDistanceToNow,
    differenceInMonths,
    differenceInYears,
} from "date-fns";
import { enUS } from "date-fns/locale";

export const calculateTimeDifference = (dateString: string): string => {
    const targetDate = parseISO(dateString);
    const now = new Date();

    const daysDifference = Math.floor(
        (now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = differenceInMonths(now, targetDate);
    const yearsDifference = differenceInYears(now, targetDate);

    if (daysDifference < 7) {
        return formatDistanceToNow(targetDate, {
            addSuffix: true,
            locale: enUS,
        });
    } else if (weeksDifference < 5) {
        return `${weeksDifference} ${
            weeksDifference === 1 ? "week" : "weeks"
        } ago`;
    } else if (monthsDifference < 12) {
        return `${monthsDifference} ${
            monthsDifference === 1 ? "month" : "months"
        } ago`;
    } else {
        return `${yearsDifference} ${
            yearsDifference === 1 ? "year" : "years"
        } ago`;
    }
};
