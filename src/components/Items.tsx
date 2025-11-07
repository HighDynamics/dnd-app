import { useCharacterItems } from "../store/recoilState";
import { EntityDisclosure } from "./EntityDisclosure";

export function Items() {
  const items = useCharacterItems();

  return (
    <div className="mt-12 flex flex-col px-4">
      <h2 className="mb-4 text-5xl font-bold opacity-90">Items</h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <EntityDisclosure
            key={item.name}
            buttonChildren={<div className="text-lg">{item.name}</div>}
          >
            <div className="text-sm">{item.description}</div>
          </EntityDisclosure>
        ))}
      </div>
    </div>
  );
}
