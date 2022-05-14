import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
