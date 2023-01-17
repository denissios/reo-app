const MONTH_NAMES = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

export const getDate = (d: Date) => {
    const date = new Date(d);
    return date.getDate() + ' ' + MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear() + ' года';
}
