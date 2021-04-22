import './articleInformations.scss';
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

type ArticleInformationsPropsType = {
  name: string;
  author: string;
  url: string;
  publishedAt: string;
  className?: string;
};

const ArticleInformations = ({ publishedAt, author, url, name, className }: ArticleInformationsPropsType): JSX.Element => (
  <div className={classNames('article-informations informations', className)}>
    <span className="informations__published-at published-at">{moment(publishedAt).format('MMM DD, YYYY')}</span>
    <span className="informations__author author">{author}</span>
    <a className="informations__link link" href={url} rel="noreferrer" target="_blank">
      {name}
    </a>
  </div>
);

export default ArticleInformations;
