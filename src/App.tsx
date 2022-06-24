import * as React from "react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { MenuItemData } from "./types";
import { useMenu } from "./useMenu";

const mockItems: MenuItemData[] = [
  {
    id: 0,
    label: "artists",
    children: [
      {
        id: 1,
        label: "american football",
        children: [
          {
            id: 2,
            label: "american football #1",
            children: [{ id: 3, label: "never meant", children: [] }],
          },
        ],
      },
      {
        id: 4,
        label: "the promise ring",
        children: [
          {
            id: 5,
            label: "nothing feels good",
            children: [{ id: 6, label: "is this thing on?", children: [] }],
          },
        ],
      },
    ],
  },
];

export function App() {
  const { items, parents, next, previous } = useMenu(mockItems);

  return (
    <Menu>
      {parents.length > 0 && (
        <div className="p-2 cursor-pointer" onClick={previous}>
          ←
        </div>
      )}

      {items.map((item) => {
        return <MenuItem key={item.id} item={item} next={next} />;
      })}
    </Menu>
  );
}
