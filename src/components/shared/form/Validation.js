export const REQUIRED = value => (value || typeof value === 'number' ? (typeof value === 'string' && value.trim() === "" ? 'Spaces are not allowed as value!' : undefined) : 'This field is required!');