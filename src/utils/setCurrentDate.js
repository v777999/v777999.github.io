export function setCurrentDate() {
  const setYear = 2019;
  const setDate = 29;
  const setMonth = 2; // March
  const currentDate = new Date(setYear, setMonth, setDate);
  return currentDate;
}

export function sameDay(a, b) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}
