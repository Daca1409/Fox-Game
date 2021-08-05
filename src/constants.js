export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.2; //rain will be 20% of time
export const SCENES = ['day' , 'rain'];
export const DAY_LENGTH = 60;
export const NIGHT_LEGTH = 4;

export const getNextHungerTime = clock => Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = clock => Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = clock => Math.floor(Math.random() * 3) + 4 + clock;

