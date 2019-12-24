export function convertEpochToDate(date: string){
  return new Date(Number(date) * 1000);
}