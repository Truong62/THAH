/**\
 *
 * @param amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  const formattedAmount = new Intl.NumberFormat('vi-VN').format(amount);
  return `${formattedAmount} VND`;
}
