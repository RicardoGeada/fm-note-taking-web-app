export function isEmail(value: string) {
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
}

export function isNotEmpty(value:string) {
    return value.trim() !== '';
}

export function hasMinLength(value:string, minLength:number) {
    return value.length >= minLength;
}

export function isEqualToOtherValue(value: unknown, otherValue: unknown) {
    return value === otherValue;
}