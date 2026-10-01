import { useToastMessage } from "./useToast";

export function ActionToast() {
  const msg = useToastMessage();
  if (!msg) return null;

  return (
    <div className="fixed left-1/2 top-1/4 z-50 h-10 w-4/5 -translate-x-1/2 bg-stone-100 outline-solid outline-4 outline-fuchsia-300">
      <p className="text-center text-amber-900">{msg}</p>
    </div>
  );
}
