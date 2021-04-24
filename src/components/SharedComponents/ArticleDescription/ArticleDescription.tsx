import './articleDescription.scss';
import React from 'react';
import classNames from 'classnames';

type ArticleDescriptionPropsType = {
  content: string;
  className?: string;
};

const ArticleDescription = ({ content, className }: ArticleDescriptionPropsType) => (
  <p className={classNames('article-description', className)}>{content}</p>
);

export default ArticleDescription;
