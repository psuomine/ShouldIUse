export const formatAbbreviateNumber = value => (value > 999 ? `${(value / 999).toFixed(1)}k` : `${value}`)
