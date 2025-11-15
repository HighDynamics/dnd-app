import { combine as c } from "../../lib";

export function Input(p: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...p}
      data-1p-ignore
      data-lpignore
      data-protonpass-ignore
      autoComplete="off"
      className={c(
        "rounded-xs bg-black bg-opacity-50 px-2 py-1 outline-solid outline-1 outline-stone-800 transition-all duration-100 focus:bg-fuchsia-950 focus:outline-stone-300",
        p.className,
      )}
    />
  );
}
