import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";

import { combine as c } from "../lib";

export function EntityDisclosure(
  p: {
    containerClassName?: string;
    buttonChildren?: React.ReactNode;
  } & React.PropsWithChildren,
) {
  const [animate] = useAutoAnimate({ duration: 500 });

  return (
    <Disclosure>
      {({ close }) => (
        <div
          ref={animate}
          className={c(
            "select-none rounded border border-stone-100/70 bg-black/50 py-1 pl-2 pr-1 transition-all duration-500",
            p.containerClassName,
          )}
        >
          <Disclosure.Button as="div">{p.buttonChildren}</Disclosure.Button>
          <Disclosure.Panel
            onClick={(e) => {
              const parentTop =
                e.currentTarget.parentElement?.getBoundingClientRect().top || 0;
              if (0 > parentTop) {
                window.scrollBy({ top: parentTop - 8, behavior: "smooth" });
              }

              setTimeout(() => {
                close();
              }, 250);
            }}
          >
            {p.children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
