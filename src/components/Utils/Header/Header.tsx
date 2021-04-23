import './header.scss';
import React from 'react';
import classNames from 'classnames';

type HeaderPropsType = {
  text: string;
  className?: string;
};

const Header = ({ text, className }: HeaderPropsType) => <p className={classNames('header', className)}>{text}</p>;

export default Header;
