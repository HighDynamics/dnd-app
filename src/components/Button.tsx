import { combine as c } from "../lib";

export function Button(p: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      onClick={p.onClick}
      className={c(
        "rounded-sm bg-fuchsia-950 px-2 py-1 outline outline-1 outline-stone-100",
        p.className,
      )}
    >
      {p.children}
    </button>
  );
}
