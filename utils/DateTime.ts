export function getDateValue(value: string | number | Date) {
    console.log( new Date(value).toISOString().substring(0,16))
    return new Date(value).toISOString().substring(0,16);
  }
  export function setDateValueAsString(event: string) {
    return new Date(event).getTime().toString();
  }

  export function setDateValue(event: string) {
    return new Date(event);
  }

  export function setDateValueAsNumber(event: string) {
    return new Date(event).getTime();
  }


export const formatTime = (date: number | Date) => {
    const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });
    const [{ value: day }, , { value: month }, , { value: year }, , { value: hour },,{value:minutes}] = dateTimeFormat.formatToParts(date)

    return `${day}/${month}/${year} ${hour}:${minutes}`;
}
