import { Spell } from "./Spell";

type SpellMetaData = {
  uses: number;
  numUsed: number;
  entry: ISpell | undefined;
  id: string;
  level: number;
  innate?: boolean;
  frequency?: string;
};

export function SpellList(p: {
  spellList: SpellMetaData[];
  isPrepping: boolean;
}) {
  return (
    <>
      {p.spellList.map((y) => (
        <Spell key={y.id} spell={y} isPrepping={p.isPrepping} />
      ))}
    </>
  );
}
