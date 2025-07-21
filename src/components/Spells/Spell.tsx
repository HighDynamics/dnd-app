import { useRecoilState } from "recoil";

import { SpellInfo } from "../SpellInfo/SpellInfo";
import { Button } from "../Button";
import { EntityDisclosure } from "../EntityDisclosure";
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
    <EntityDisclosure
      containerClassName={c(p.spell.numUsed >= p.spell.uses && "opacity-50")}
      buttonChildren={
        <div className="flex items-center justify-between">
          <span className="text-lg">{spellInfo.name}</span>
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
        </div>
      }
    >
      <SpellInfo spell={spellInfo} />
    </EntityDisclosure>
  );
}
