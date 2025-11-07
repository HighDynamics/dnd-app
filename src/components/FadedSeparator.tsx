import { combine as c } from "../lib";

export function FadedSeparator(p: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={c(
        "h-px border-none bg-linear-to-r from-transparent via-white",
        p.className,
      )}
    />
  );
}
