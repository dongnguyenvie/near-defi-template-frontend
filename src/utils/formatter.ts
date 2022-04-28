export const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 3,
})

export const balanceWithDecimalFormatter = (balance: number | string, decimal: number): any => {
  const result: number = (balance as unknown as number) / 10 ** decimal
  if (!result || (result.toFixed(2) as unknown as number) <= 0) {
    return '0.00'
  }
  return result.toFixed(2)
}

export const cashFormatter = (input: number | string) => {
  const n = input as number
  if (n < 1e3) return n
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K'
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M'
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B'
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T'
}
