import React from 'react';

type PageLayoutPropsType = { children: JSX.Element };

const PageLayout = ({ children }: PageLayoutPropsType) => (
  <div className="pagelayout">
    <div className="pagelayout__content">{children}</div>
  </div>
);

export default PageLayout;
