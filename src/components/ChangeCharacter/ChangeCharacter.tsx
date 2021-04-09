import { useRecoilState, useSetRecoilState } from "recoil";
import { characterState, updatedCharacterState } from "../../recoilState";
import useSWR from "swr";

const ChangeCharacter = () => {
  const [character, setCharacter] = useRecoilState(characterState);
  const setUpdatedCharacter = useSetRecoilState(updatedCharacterState);
  const { data: charactersResponse } = useSWR<IServer.GetCharacters.Response>(
    "/api/characters"
  );
  function setCharacterById(id: string): ICharacter {
    let selectedCharacter: ICharacter = character;
    for (const char of charactersResponse?.characters) {
      if (char.id === id) {
        selectedCharacter = char;
      }
    }
    setCharacter(selectedCharacter);
    setUpdatedCharacter(selectedCharacter);
  }
  const availableCharacters = charactersResponse?.characters.map((char) => (
    <button
      key={char.id}
      className="moreButton"
      onClick={() => setCharacterById(char.id)}
    >
      {char.name}
    </button>
  ));
  return (
    <>
      <div className="buttonList">{availableCharacters}</div>
    </>
  );
};

export default ChangeCharacter;
