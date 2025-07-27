import { useRecoilValue } from "recoil";

import { characterState } from "../../store/recoilState";
import { EntityDisclosure } from "../EntityDisclosure";
import "./ActiveAndPassiveAbilities.css";

function formatType(type: string) {
  switch (type) {
    case "supernatural":
      return "(Su)";
    case "extraordinary":
      return "(Ex)";
    default:
      return null;
  }
}

const ActiveAndPassiveAbilities = () => {
  const character = useRecoilValue(characterState);
  return (
    <div className="mt-12 flex flex-col gap-12 px-4">
      <div>
        <h2 className="mb-4 text-5xl font-bold opacity-90">
          Passive Abilities
        </h2>
        <div className="flex flex-col gap-4">
          {character.characterAbilities.passive.map((ability) => (
            <EntityDisclosure
              key={ability.name}
              buttonChildren={
                <div className="text-lg">
                  {ability.name} {formatType(ability.type)}
                </div>
              }
              // TODO: replace with actual description from data source
            >
              A description of this ability goes here
            </EntityDisclosure>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-5xl font-bold opacity-90">Active Abilities</h2>
        <div className="flex flex-col gap-4">
          {character.characterAbilities.active.map((ability) => (
            <EntityDisclosure
              key={ability.name}
              buttonChildren={
                <div className="text-lg">
                  {ability.name} {formatType(ability.type)}
                </div>
              }
              // TODO: replace with actual description from data source
            >
              A description of this ability goes here
            </EntityDisclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveAndPassiveAbilities;
