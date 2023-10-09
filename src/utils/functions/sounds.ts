import whackSound from '../../assets/sounds/whack.mp3';

export const playSound = (filePath: string) => {
  const audio = new Audio(filePath);
  audio.play();
};

export const playWhackSound = () => {
  playSound(whackSound);
};
