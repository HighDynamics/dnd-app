import { Heading } from "../Heading";

/** Page layout for the signed-out screens and the account page. */
export function AuthPage(p: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="text-stone-200 max-w-sm mx-auto p-4 mt-12">
      <Heading>{p.title}</Heading>
      {p.children}
    </div>
  );
}

// Unlike the sheet's inputs, these let browsers and password managers fill in
// credentials.
export function Field({
  label,
  ...input
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-label text-sm">{label}</span>
      <input
        {...input}
        className="rounded-xs bg-black/50 px-2 py-2 text-lg outline-solid outline-1 outline-stone-800 transition-all duration-100 focus:bg-fuchsia-950 focus:outline-stone-300"
      />
    </label>
  );
}

export function FormError(p: { error: Error | null }) {
  if (!p.error) return null;
  return (
    <p role="alert" className="text-red-400">
      {p.error.message}
    </p>
  );
}

export function SubmitButton(p: { pending: boolean; children: string }) {
  return (
    <button
      type="submit"
      disabled={p.pending}
      className="cursor-pointer rounded-xs bg-fuchsia-900 px-3 py-2 text-lg outline-solid outline-1 outline-stone-800 transition-all duration-100 active:bg-fuchsia-800 disabled:cursor-wait disabled:opacity-50"
    >
      {p.children}
    </button>
  );
}

/** Reads a form's fields as strings, keyed by input name. */
export const formValues = (form: HTMLFormElement) =>
  Object.fromEntries(
    [...new FormData(form)].map(([key, value]) => [key, String(value)]),
  );

/** Only follow same-site paths after signing in, never another origin. */
export function safeNext(next: string | null) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : "/";
}
