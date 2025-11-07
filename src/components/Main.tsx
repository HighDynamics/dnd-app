import { AbilityScores } from "./AbilityScores";
import { DefenseInfo } from "./DefenseInfo";
import { HitPointInfo } from "./HitPointInfo";
import { MiscInfo } from "./MiscInfo";

export function Main() {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <AbilityScores />
      <HitPointInfo />
      <DefenseInfo />
      <MiscInfo />
    </div>
  );
}
