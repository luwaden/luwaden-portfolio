export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));