export const dateTimeFormatter = (date, time, param) => {
    const formattedDate = new Date(date.seconds * 1000);
    const options = { year: "numeric", month: param, day: "numeric" };

    if (time) {
        return formattedDate.toLocaleDateString("bg-BG", options) + " " + formattedDate.toLocaleTimeString("bg-BG");
    }
    return formattedDate.toLocaleDateString("bg-BG", options);
};
