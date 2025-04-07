import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
// export function Button({ className, variant = "primary", ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-700 text-white hover:bg-gray-600",
        className
      )}
      {...props}
    />
  );
}
