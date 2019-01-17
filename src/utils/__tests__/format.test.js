import { formatAbbreviateNumber } from '../format'

describe('Format utils', () => {
  it('format abbreviate number', () => {
    const result = formatAbbreviateNumber(1000)
    expect(result).toBe('1.0k')
  })

  it('format big abbreviate number', () => {
    const result = formatAbbreviateNumber(33890)
    expect(result).toBe('33.9k')
  })

  it('not formating under 1000 number', () => {
    const result = formatAbbreviateNumber(999)
    expect(result).toBe('999')
  })
})
