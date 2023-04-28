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
