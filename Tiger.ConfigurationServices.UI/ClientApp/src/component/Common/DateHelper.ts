import { addDays, format, parse } from 'date-fns';
import { parseNumber } from './NumberHelper';

export { format as formatDate, addDays } from 'date-fns';

export const SHORT_DATE_FORMAT = (window as { SHORT_DATE_FORMAT?: string }).SHORT_DATE_FORMAT || 'M/D/YYYY';

const CURRENT_YEAR = new Date().getFullYear();
const MAX_YEAR = CURRENT_YEAR + 100;
const MIN_YEAR = CURRENT_YEAR - 100;

export const parseDate = (value: string | number | Date | undefined): Date | undefined => {
    let result: Date | undefined;
    if (value) {
        result = parse(value as string | number | Date);
    }
    if (!result || !result.getDate()) {
        return undefined;
    }
    return result;
};

export const parseDateExact = (value: string, dateFormat: string): Date | undefined => {
    if (!value) {
        return undefined;
    }

    let day = 0,
        month = 0,
        year = 0;
    const values = (value.match(/\d+/g) || []).map(parseNumber);
    (dateFormat.match(/\w+/g) || []).forEach((field, index) => {
        switch (field) {
            case 'D':
            case 'DD':
                day = values[index] || 0;
                break;
            case 'M':
            case 'MM':
                month = values[index] || 0;
                break;
            case 'YY':
                year = (values[index] || 0) + 2000;
                break;
            case 'YYYY':
                year = values[index] || 0;
                break;
            default:
                break;
        }
    });
    const result = new Date(year, month - 1, day);
    return result.getDate()
        && result.getFullYear() <= MAX_YEAR
        && result.getFullYear() >= MIN_YEAR ? result : undefined;
};

export const getWeekOfMonth = (datestr: string | Date): string => {
    const date = parseDate(datestr);
    const day = date && date.getDate();
    if (!day) {
        return '';
    }
    const num = Math.ceil(day / 7);
    return num > 4 ? 'Last' : num.toString();
};

export const formatShortDate = (value: string | Date | undefined): string | undefined =>
    (value && format(value, SHORT_DATE_FORMAT)) || undefined;

export const looksLikeShortDate = RegExp.prototype.test.bind(/^\d{2,4}[\-\/]\d{1,2}[\-\/]\d{2,4}$/) as (
    value: {} | undefined
) => boolean;

export const addDaysUntilFuture = (date: Date | string | undefined, days: number): Date | undefined => {
    const now = new Date();
    let result = parseDate(date);
    while (result && result < now) {
        result = addDays(result, days);
    }
    return result;
};