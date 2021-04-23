import './dropdownList.scss';
import React, { ForwardRefRenderFunction, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export type DropdownListHandle = {
  resetValue: () => void;
};

type DropdownListPropsType = {
  defaultValue: string;
  list: string[];
  [key: string]: unknown;
};

const DropdownList: ForwardRefRenderFunction<DropdownListHandle, DropdownListPropsType> = ({ defaultValue, list, ...props }, ref) => {
  const [value, setValue] = useState(defaultValue);
  const [isVisibleList, setVisibleList] = useState(false);
  const dropdownListRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>
      dropdownListRef.current && !dropdownListRef.current.contains(event.target as HTMLElement) && closeList();
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownListRef]);

  useImperativeHandle(ref, () => ({
    resetValue: () => resetValue(),
  }));

  const selectedValue = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    const index = list.findIndex((value) => value.toLowerCase() === (event.target as HTMLElement).innerText.toLowerCase());
    setValue(list[index]);
    closeList();
  };

  const resetValue = () => setValue(defaultValue);

  const closeList = () => setVisibleList(false);

  const changeVisibleList = () => setVisibleList((isVisibleList) => !isVisibleList);

  return (
    <div className="dropdown-list" ref={dropdownListRef} {...props}>
      <input className="dropdown-list__content content" onClick={changeVisibleList} type="button" value={value} />
      {isVisibleList && (
        <ul className="dropdown-list_list list">
          {list.map((item, index) => (
            <li key={index} className="list__item item" onClick={selectedValue}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default forwardRef(DropdownList);
