import { useRecoilState } from "recoil";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";

import { SpellInfo } from "../SpellInfo/SpellInfo";
import { Button } from "../Button";
import { useToast } from "../ActionToast/useToast";

import * as store from "../../recoilState";
import { combine as c } from "../../lib";

export function Spell(p: {
  spell: {
    id: string;
    level: number;
    uses: number;
    numUsed: number;
    entry?: ISpell;
    innate?: boolean;
    frequency?: string;
  };
  isPrepping?: boolean;
}) {
  const [animate] = useAutoAnimate({ duration: 500 });
  const [allKnownSpells, setAllKnownSpells] = useRecoilState(
    store.allKnownSpells,
  );
  const toast = useToast();
  const remainingUses = p.spell.uses - p.spell.numUsed;

  const spellInfo = p.spell.entry;

  if (!spellInfo) return null;

  function incrementUse() {
    const spellOrSlaAccessor = p.spell.frequency
      ? "spellLikeAbilities"
      : "spells";

    const spellIndex = allKnownSpells[spellOrSlaAccessor].findIndex(
      (x) => x.id === p.spell.id && x.uses === p.spell.uses,
    );

    setAllKnownSpells({
      ...allKnownSpells,
      [spellOrSlaAccessor]: allKnownSpells[spellOrSlaAccessor].map((x, i) => {
        if (i === spellIndex) {
          return {
            ...p.spell,
            numUsed: p.isPrepping ? p.spell.numUsed : p.spell.numUsed + 1,
            uses: p.isPrepping ? p.spell.uses + 1 : p.spell.uses,
          };
        }
        return x;
      }),
    });

    toast(
      `The spell ${p.spell.entry?.name} has been ${
        p.isPrepping ? "prepped" : "cast"
      }.`,
    );
  }

  return (
    <Disclosure>
      {({ close }) => (
        <div
          ref={animate}
          className={c(
            "rounded border border-stone-100/70 bg-black/50 py-1 pl-2 pr-1 transition-all duration-500",
            p.spell.numUsed >= p.spell.uses && "opacity-50",
          )}
        >
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between"
          >
            <span>{spellInfo.name}</span>
            <div className="flex items-center justify-end gap-2">
              <span>
                {remainingUses < Number.POSITIVE_INFINITY
                  ? `x ${remainingUses}`
                  : "\u221e"}
              </span>
              <Button
                disabled={!p.isPrepping && remainingUses === 0}
                className="h-8"
                onClick={(e) => {
                  e.stopPropagation();
                  incrementUse();
                }}
              >
                {p.isPrepping ? "Prep" : "Cast"}
              </Button>
            </div>
          </Disclosure.Button>
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
            <SpellInfo spell={spellInfo} />
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
