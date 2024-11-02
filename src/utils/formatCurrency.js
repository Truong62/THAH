/**
 *
 * @param amount
 * @param currency
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'VND') {
  const formattedAmount = new Intl.NumberFormat('vi-VN').format(amount);
  return `${formattedAmount} ${currency}`;
}
