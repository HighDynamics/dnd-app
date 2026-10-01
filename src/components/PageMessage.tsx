import { Heading } from "./Heading";

/** A full-page message shown outside the character sheet's layout. */
export function PageMessage(p: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="text-stone-200 max-w-lg mx-auto p-4 mt-12">
      <Heading>{p.title}</Heading>
      <div className="text-lg">{p.children}</div>
    </div>
  );
}
