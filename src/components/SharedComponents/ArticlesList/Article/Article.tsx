import './article.scss';
import ArticleDescription from '../../ArticleDescription/ArticleDescription';
import ArticleImage from '../../ArticleImage/ArticleImage';
import ArticleInformations from '../../ArticleInformations/ArticleInformations';
import ArticleTitle from '../../ArticleTitle/ArticleTitle';
import FlatButton from '../../../Utils/FlatButton/FlatButton';
import React from 'react';

type ArticlePropsType = {
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  url: string;
  name: string;
};

const Article = ({ urlToImage, title, description, publishedAt, author, url, name }: ArticlePropsType): JSX.Element => (
  <div className="article">
    <ArticleImage alt={title} className="article__image image" src={urlToImage} />
    <ArticleInformations author={author} name={name} publishedAt={publishedAt} url={url} />
    <ArticleTitle title={title} />
    <ArticleDescription description={description} />
    <FlatButton className="articles-list__read-more-button read-more-button" height="49px" name={`read-more-${name.trim()}`} width="370px">
      Read More
    </FlatButton>
  </div>
);

export default Article;
