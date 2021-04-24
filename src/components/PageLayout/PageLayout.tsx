import './pageLayout.scss';
import React from 'react';

type PageLayoutPropsType = { children: JSX.Element };

const PageLayout = ({ children }: PageLayoutPropsType) => (
  <div className="pagelayout">
    <div className="pagelayout__content content">{children}</div>
  </div>
);

export default PageLayout;
