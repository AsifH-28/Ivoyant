import React from "react";

interface GetProps {
  GeneralFunction: () => void;
}
export const ChildComponent: React.FC<GetProps> = React.memo(({ GeneralFunction }) => {
  {
    console.log(GeneralFunction);
  }
  return (
    <div>
      <button onClick={GeneralFunction}>Click me</button>
    </div>
  );
});
