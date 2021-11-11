export const wait = (delay: number = 0) =>
  new Promise<void>((res) => {
    setTimeout(res, delay);
  });
