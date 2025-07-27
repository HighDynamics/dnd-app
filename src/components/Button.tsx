import { combine as c } from "../lib";

export function Button(p: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      disabled={p.disabled}
      onClick={p.onClick}
      className={c(
        "rounded-sm bg-fuchsia-950 bg-opacity-50 px-2 py-1 outline outline-1 outline-stone-800 transition-all duration-100 active:bg-fuchsia-800 active:outline-stone-300",
        p.disabled && "cursor-not-allowed opacity-30 !outline-none",
        p.className,
      )}
    >
      {p.children}
    </button>
  );
}
