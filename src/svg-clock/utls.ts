import { Pos } from './types';

export function rad(deg: number): number {
  return deg * Math.PI / 180;
}

export function pos(x: number, y: number, r: number, deg: number): Pos {
  return {
    x: (x - r * Math.sin(rad(deg))).toString(),
    y: (y - r * Math.cos(rad(deg))).toString()
  };
}

export function stringPos(obj: Pos) {
  return obj.x + "," + obj.y;
}

export function strPad(num: number): string {
  const str = num.toString();
  return str.length > 1 ? str : "0" + str;
}

export function getWeek(d: number): string {
  return [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ][d];
}

export function getMonth(m: number): string {
  return [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ][m];
}