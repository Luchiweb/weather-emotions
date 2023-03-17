export const filterForecast = (data) => {
  const nextDayId = data.list.findIndex(
    (item) => item.dt_txt.split(" ")[1] === "00:00:00"
  );

  if (nextDayId === -1) throw new Error();

  data.list.splice(0, nextDayId);

  return data.list.filter((item) => {
    const currentRes = item.dt_txt.split(" ")[1];

    return (
      currentRes === "09:00:00" ||
      currentRes === "15:00:00" ||
      currentRes === "21:00:00"
    );
  });
};

export const calculateAverangeTemperatures = (arr) => {
  let startBound = 0;
  let endBound = 3;
  const temperatures = [];

  while (true) {
    let totalTempreture = 0;

    for (let i = startBound; i < endBound; i++) {
      totalTempreture += arr[i].main.temp;
    }

    temperatures.push(Math.round(totalTempreture / (endBound - startBound)));

    totalTempreture = 0;

    if (endBound === arr.length) break;

    startBound = endBound;
    endBound += 3;

    if (endBound > arr.length) endBound = arr.length;
  }

  return temperatures;
};

export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
