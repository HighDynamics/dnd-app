import { combine as c } from "../../lib";
import { useToast } from "../ActionToast/useToast";
import { Button } from "../Button";
import { EntityDisclosure } from "../EntityDisclosure";
import { SpellInfo } from "./SpellInfo";

export function Spell(p: {
  remainingUses: number;
  spellEntry: ISpell;
  isPrepping?: boolean;
  incrementMagic: () => void;
}) {
  const toast = useToast();

  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    p.incrementMagic();

    toast(
      `The spell ${p.spellEntry.name} has been ${
        p.isPrepping ? "prepped" : "cast"
      }.`,
    );
  }

  return (
    <EntityDisclosure
      containerClassName={c(p.remainingUses <= 0 && "opacity-50")}
      buttonChildren={
        <div className="flex items-center justify-between">
          <span className="text-lg">{p.spellEntry.name}</span>
          <div className="flex items-center justify-end gap-2">
            <span>
              {p.remainingUses < Number.POSITIVE_INFINITY
                ? `x ${p.remainingUses}`
                : "\u221e"}
            </span>
            <Button
              disabled={!p.isPrepping && p.remainingUses === 0}
              className="h-8"
              onClick={onClick}
            >
              {p.isPrepping ? "Prep" : "Cast"}
            </Button>
          </div>
        </div>
      }
    >
      <SpellInfo spell={p.spellEntry} />
    </EntityDisclosure>
  );
}
