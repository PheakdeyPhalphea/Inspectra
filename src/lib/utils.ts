import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToDayMonthYear(timestamp: string) {
  // Parse the timestamp into a Date object
  const date = new Date(timestamp);

  // Extract the day, month, and year
  const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();

  // Format as day-month-year
  return `${day}-${month}-${year}`;
}



