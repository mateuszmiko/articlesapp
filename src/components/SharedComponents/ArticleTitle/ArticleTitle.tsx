import './articleTitle.scss';
import React from 'react';
import classNames from 'classnames';

type ArticleTitlePropsType = {
  title: string;
  className?: string;
};

const ArticleTitle = ({ title, className }: ArticleTitlePropsType) => <p className={classNames('article-title', className)}>{title}</p>;

export default ArticleTitle;
