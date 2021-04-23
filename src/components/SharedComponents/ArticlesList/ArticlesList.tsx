import './articlesList.scss';
import { ArticlePropsType } from '../../../types/types';
import Article from './Article/Article';
import React from 'react';

const ArticlesList = ({ articles }: { articles: ArticlePropsType[] }): JSX.Element => (
  <div className="articles-list">
    {articles.map(({ urlToImage, title, description, publishedAt, author, url, source }, index) => (
      <Article
        key={index}
        author={author}
        description={description}
        name={source.name}
        publishedAt={publishedAt}
        title={title}
        url={url}
        urlToImage={urlToImage}
      />
    ))}
  </div>
);

export default ArticlesList;
