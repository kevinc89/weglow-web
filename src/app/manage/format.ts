export function formatAmount(amount: number): string {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export function formatPrice(amount: number, interval: string): string {
  return `$${formatAmount(amount)} / ${interval}`;
}
