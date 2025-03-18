import { FC } from "react";
import { IListElement } from "../../services/types/ui";

interface IOneListElement extends IListElement {
  index: number;
}

export const OneListElement: FC<IOneListElement> = ({ name, index }) => {
  return (
    <>
      <p>{index}</p>
      <p>{name}</p>
    </>
  );
};
