import './articleDescription.scss';
import React from 'react';
import classNames from 'classnames';

type ArticleDescriptionPropsType = {
  description: string;
  className?: string;
};

const ArticleDescription = ({ description, className }: ArticleDescriptionPropsType) => (
  <p className={classNames('article-description', className)}>{description}</p>
);

export default ArticleDescription;
