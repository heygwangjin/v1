import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const [year, month, day] = date.split('-');
  return `${year}. ${month}. ${day}.`;
}
