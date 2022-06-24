import * as React from "react";
import { MenuItemData } from "./types";

export function useMenu(items: MenuItemData[]) {
  const [currentItems, setCurrentItems] = React.useState<MenuItemData[]>([]);
  const [parents, setParents] = React.useState<MenuItemData[][]>([]);

  React.useEffect(() => {
    setCurrentItems(items);
  }, []);

  const next = (item: MenuItemData) => () => {
    if (item.children.length > 0) {
      setParents((oldParents) => [...oldParents, currentItems]);
      setCurrentItems(item.children);
    }
  };

  const previous = () => {
    const parent = parents.pop();
    if (parent) setCurrentItems(parent);

    setParents(parents);
  };

  return { items: currentItems, parents, next, previous };
}
