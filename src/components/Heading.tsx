import { combine as c } from "../lib";

export function Heading(
  p: React.PropsWithChildren<{
    className?: string;
  }>,
) {
  return (
    <h2 className={c("text-5xl font-bold opacity-90 mb-4", p.className)}>
      {p.children}
    </h2>
  );
}
