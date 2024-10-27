export function formatCurrency(amount) {
  const validAmount = isNaN(amount) ? 0 : amount; // Kiểm tra NaN và thay thế bằng 0
  const formattedAmount = new Intl.NumberFormat('vi-VN').format(validAmount);
  return `${formattedAmount} VND`;
}
