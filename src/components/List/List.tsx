import { useEffect, useState } from "react";
import { IListElement } from "../../services/types/ui";
import { OneListElement } from "../OneListElement/OneListElement";

export const List = () => {

  const [list, setList] = useState<Array<IListElement>>([])

  const updateList = (maxLength: number) => {
    const temp = []
    for (let index = 0; index < maxLength; index++) {
      const element = "Элемент" + (index !== 0 ? ` ${index}` : "");
      temp.push({ name: element });
    }
    setList(temp)
  };

  useEffect(() => {
    updateList(5)
  }, [])

  return (
    <ul>
      {
        list.map((el, index) => {
          return <li key={index}> <OneListElement name={el.name} index={index + 1} /></li>
        })
      }
    </ul>
  );
};
