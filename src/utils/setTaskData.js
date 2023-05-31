export function setTaskData(currentWeek) {
  const startTime = 9;
  const endTime = 21;
  const timeSlots = endTime - startTime + 1;

  // [time, date]
  let tasks = [
    [9, 30],
    [13, 25],
    [13, 26],
    [13, 27],
    [13, 28],
    [13, 29],
    [13, 30],
    [13, 31],
    [16, 28],
    [18, 29],
    [21, 26],
  ];

  const taskData = [];
  for (let i = 0; i < timeSlots; i++) {
    const hourData = [
      {
        timeStamp: true,
        task: false,
        selected: false,
        time: startTime + i,
        date: null,
      },
    ];
    for (let d = 0; d < 7; d++) {
      hourData.push({
        timeStamp: false,
        task: false,
        selected: false,
        time: startTime + i,
        date: currentWeek[d].date,
      });
    }
    taskData.push(hourData);
  }

  for (let x = 0; x < tasks.length; x++) {
    let taskTimeIndex = -1;
    let taskDateIndex = -1;
    for (let i = 0; i < taskData.length; i++) {
      let timeSlot = taskData[i].findIndex((item) => item.time === tasks[x][0]);
      taskDateIndex = taskData[i].findIndex(
        (item) => item.date === tasks[x][1]
      );
      if (timeSlot > -1) {
        taskTimeIndex = i;
      }
    }
    taskData[taskTimeIndex][taskDateIndex].task = true;
  }
  return taskData;
}
