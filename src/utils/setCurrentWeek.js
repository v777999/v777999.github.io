import { setCurrentDate, sameDay } from "./setCurrentDate";

export function setCurrentWeek() {
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const currentDate = setCurrentDate();
	
  const currentWeek = dayNames.map((item, index) => {
    const d = setCurrentDate();
    d.setDate(d.getDate() - d.getDay() + (d.getDay() === 0 ? -6 : 1) + index);
    const dayOfWeek = {
      dayName: item,
      date: d.getDate(),
      currentDate: sameDay(d, currentDate),
    };
    return dayOfWeek;
  });

  return currentWeek;
}
