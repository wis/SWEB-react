import React from "react";
interface ComponentxProps {
  children?: React.ReactNode;
}
export function Componentx({
  children
}: React.PropsWithChildren<ComponentxProps>) {
  return (
    <>
      <div>hello {children}</div>
    </>
  );
}
