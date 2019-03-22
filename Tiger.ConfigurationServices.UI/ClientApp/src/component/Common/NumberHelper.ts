const undefinedIfNaN = (x: number) => (isNaN(x) ? undefined : x);

export const parseNumber = (value: string) => undefinedIfNaN(parseFloat((value || '').replace(/[^\d\.]/g, '')));