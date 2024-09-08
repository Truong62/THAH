export const formatCurrency = (price) => {
    return price.toLocaleString('vi-VN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }) + 'VND';
};

