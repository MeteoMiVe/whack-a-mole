export const playSound = (filePath: string) => {
  const audio = new Audio(filePath);
  audio.play();
};
