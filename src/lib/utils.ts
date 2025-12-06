import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const duplicateValidation = (arr: any[], key: string) => {
  return arr.some((item) => item.key === key)
}
