import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useEffect } from "react";
import { Navigate, Outlet } from "react-router";

import { queries } from "../store/api";
import { useCharacter, useCharacterId } from "../store/character";
import { ActionToast } from "./ActionToast";
import { CharacterSelector } from "./CharacterSelector";
import { FadedSeparator } from "./FadedSeparator";
import { Nav } from "./Nav";
import { PageMessage } from "./PageMessage";
import { RollContainer } from "./RollContainer";

const App = () => {
  const character = useCharacter();

  useEffect(
    function setDocTitle() {
      document.title = character.name;
    },
    [character.name],
  );

  return (
    <>
      <ActionToast />
      <div className="fixed top-0 -z-50 h-screen w-screen bg-indigo-950/30" />
      <div className="text-stone-200 flex flex-col h-screen max-w-lg mx-auto">
        <div className="grow overflow-auto">
          <div className="z-20">
            <CharacterSelector />
          </div>
          <div className="sticky top-0 z-10">
            <RollContainer />
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <div>
          <FadedSeparator />
          <Nav />
        </div>
      </div>
    </>
  );
};

const Loading = () => <div className="text-white">Loading...</div>;

function LoadCharacter() {
  // Fetch everything the sheet needs in parallel, before any of it renders.
  useSuspenseQueries({
    queries: [
      queries.character(useCharacterId()),
      queries.characters,
      queries.skills,
      queries.skillSynergies,
      queries.abilities,
      queries.items,
      queries.spells,
    ],
  });
  return <App />;
}

/** Layout for /characters/:characterId and its tabs. */
export function CharacterLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <LoadCharacter />
    </Suspense>
  );
}

function RedirectToFirstCharacter() {
  const first = useSuspenseQuery(queries.characters).data.at(0);
  if (!first) {
    return (
      <PageMessage title="No characters yet">
        Characters you create will show up here.
      </PageMessage>
    );
  }
  return <Navigate to={`/characters/${first.id}`} replace />;
}

/** The root path sends you to your first character. */
export function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <RedirectToFirstCharacter />
    </Suspense>
  );
}
