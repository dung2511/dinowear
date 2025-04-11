import dayjs from "dayjs";

export const formatDate = (date) => {
    const formatDate = new Date(date).toLocaleString("vi-VN", {
        day: '2-digit',
        month: "long",
        year: "numeric"
    })
    return formatDate;
}
export const formatDateOrder = (date) => {
    return new Date(date).toLocaleDateString("vi-VN");
}
export const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "decimal",
        decimal: "VND",
    }).format(price) + " VNĐ"
}
export const formatPriceOrder = (price) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "decimal",
        decimal: "VND",
    }).format(price)
}