import { combine as c } from "../lib";

export function FadedSeparator(p: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={c(
        "h-[1px] border-none bg-gradient-to-r from-transparent via-white",
        p.className,
      )}
    />
  );
}
