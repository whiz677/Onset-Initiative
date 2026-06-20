import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "disabled" | "archive" | "warning" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white border-teal hover:bg-[#276f4c]",
  secondary: "bg-white text-navy border-navy/25 hover:border-navy hover:bg-mist",
  disabled: "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed",
  archive: "bg-mist text-navy border-[#d2deea] hover:bg-[#dbe7f1]",
  warning: "bg-[#fff7ed] text-amber border-[#f1cf9d]",
  ghost: "bg-transparent text-navy border-transparent hover:bg-mist"
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

type ButtonProps =
  | (CommonProps & {
      href: string;
      onClick?: never;
      type?: never;
    })
  | (CommonProps & {
      href?: never;
      onClick?: () => void;
      type?: "button" | "submit";
    });

export function Button({
  children,
  variant = "primary",
  className,
  disabled,
  ariaLabel,
  ...props
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition",
    variants[disabled ? "disabled" : variant],
    className
  );

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:");
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      );
    }
    return (
      <Link
        href={props.href}
        className={classes}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

