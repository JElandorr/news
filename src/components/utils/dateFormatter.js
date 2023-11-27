export const dateTimeFormatterFromSeconds = (date, time, param) => {
    const formattedDate = new Date(date.seconds * 1000);
    const options = { year: "numeric", month: param, day: "numeric" };

    if (time) {
        return formattedDate.toLocaleDateString("bg-BG", options) + " " + formattedDate.toLocaleTimeString("bg-BG");
    }
    return formattedDate.toLocaleDateString("bg-BG", options);
};

export const dateTimeFormatterFromISO8601 = (date, param) => {
    const formattedDate = new Date(date);
    const options = { year: "numeric", month: param, day: "numeric" };

    return formattedDate.toLocaleDateString("bg-BG", options);
};
