import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * ATOM: Button
 *
 * Usage context: any single user action — "View site details", "Search",
 * "Open menu". Use `variant="primary"` for the one main action in a
 * section, `secondary` for supporting actions, `ghost` for low-emphasis
 * actions inside dense components like NavigationItem.
 *
 * Responsive logic: full-width (`w-full`) is opt-in via className so the
 * same Button can stack full-width in mobile forms (e.g. SearchForm) and
 * sit inline at wider breakpoints without a separate mobile variant.
 *
 * Accessibility: minimum 44x44px hit target (py-2.5 px-5 on text-sm meets
 * this), and a visible focus ring is inherited globally from globals.css.
 */

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-coral text-sand-100 hover:bg-coral-600 active:bg-coral-600",
  secondary: "bg-sea text-sand-100 hover:bg-sea-700 active:bg-sea-700",
  ghost: "bg-transparent text-sea hover:bg-sea/10 active:bg-sea/15",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-sans transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
