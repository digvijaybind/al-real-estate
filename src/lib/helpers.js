import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// A utiltity function to merge Tailwind classes and giving priority to classes added after.
export const cn = (...inputs) => twMerge(clsx(inputs));