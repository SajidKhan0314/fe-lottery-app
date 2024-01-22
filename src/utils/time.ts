export const getTimeRemaining = (e: string) => {
  const total = Date.parse(e) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  return {
    hours,
    minutes,
    seconds,
  };
};

export const getDeadTime = (totalTime: number) => {
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + totalTime);
  return deadline;
};
