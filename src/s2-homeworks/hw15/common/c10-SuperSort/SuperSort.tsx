import React from "react";
import down from "../icons/down.png";
import up from "../icons/up.png";
import none from "../icons/none.png";

// добавить в проект иконки и импортировать
const downIcon = down;
const upIcon = up;
const noneIcon = none;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  if (!sort) return down;

  if (sort[0] === down[0]) {
    return sort === down ? up : down;
  }

  if (sort[0] === up[0]) {
    return sort === up ? "" : up;
  }

  return "";

  /*
  return sort === "" ? down : sort === down ? up : "";
  */
  // return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img id={id + "-icon-" + sort} src={icon} alt="icon" />
      {/* {icon}*/} {/*а это убрать*/}
    </span>
  );
};

export default SuperSort;
