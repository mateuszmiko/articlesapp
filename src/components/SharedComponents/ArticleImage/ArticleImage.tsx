import './articleImage.scss';
import React from 'react';
import classNames from 'classnames';

type ArticleImagePropsType = {
  alt: string;
  src: string;
  className?: string;
};

const ArticleImage = ({ alt, src, className }: ArticleImagePropsType) => (
  <img alt={alt} className={classNames('article-image', className)} src={src} />
);

export default ArticleImage;
