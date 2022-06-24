import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export function Menu({ children }: Props) {
  return (
    <div className="w-64 shadow-md h-fit bg-white rounded-md mx-auto mt-8">
      {children}
    </div>
  );
}
