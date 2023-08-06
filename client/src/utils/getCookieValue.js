export function getCookieValue(cookieName) {
    // Tách các cookies thành các cặp tên và giá trị
    const cookies = document.cookie.split('; ');

    // Duyệt qua từng cookie để tìm tên và giá trị
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        const name = cookie[0];
        const value = cookie[1];

        // Nếu tìm thấy cookie có tên trùng khớp, trả về giá trị của nó
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    // Trả về null nếu không tìm thấy cookie
    return null;
}
