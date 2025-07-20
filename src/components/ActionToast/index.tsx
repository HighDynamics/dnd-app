import { useRecoilValue } from "recoil";
import { confirmationMsg } from "../../recoilState";

export function ActionToast() {
  const msg = useRecoilValue(confirmationMsg);
  if (!msg) return null;

  return (
    <div className="fixed left-1/2 top-1/4 z-50 h-10 w-4/5 -translate-x-1/2 bg-stone-100 outline outline-4 outline-fuchsia-300">
      <p className="text-center text-amber-900">{msg}</p>
    </div>
  );
}
