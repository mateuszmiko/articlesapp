import './flatButton.scss';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

type FlatButtonPropsType = {
  children: ReactNode;
  className?: string;
  primary?: boolean;
  reverse?: boolean;
  height?: string;
  width?: string;
  onClick?(): void;
  [key: string]: unknown;
};

const FlatButton = ({ children, className, primary = true, reverse = false, width, height, onClick, ...props }: FlatButtonPropsType) => (
  <button
    className={classNames('flat-button', className, {
      'flat-button--primary': primary,
      'flat-button--primary-reverse': reverse,
    })}
    style={{ width, height }}
    {...props}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default FlatButton;
