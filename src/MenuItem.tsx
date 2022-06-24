import * as React from "react";
import { MenuItemData } from "./types";

interface MenuItemProps {
  item: MenuItemData;
  next: (item: MenuItemData) => () => void;
}
export function MenuItem({ item, next }: MenuItemProps): JSX.Element {
  return (
    <div
      key={item.label}
      className="p-2 flex justify-between cursor-pointer hover:bg-slate-50 rounded-md"
      onClick={next(item)}
    >
      <span>{item.label}</span>
      {item.children.length > 0 && <span>→</span>}
    </div>
  );
}
