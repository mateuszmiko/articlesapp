import './articleView.scss';
import { articleByIdSelector } from '../../selectors/articles';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArticleDescription from '../SharedComponents/ArticleDescription/ArticleDescription';
import ArticleImage from '../SharedComponents/ArticleImage/ArticleImage';
import ArticleInformations from '../SharedComponents/ArticleInformations/ArticleInformations';
import ArticleTitle from '../SharedComponents/ArticleTitle/ArticleTitle';
import FlatButton from '../Utils/FlatButton/FlatButton';
import Header from '../Utils/Header/Header';
import React from 'react';

const ArticleView = () => {
  const { id }: { id: string } = useParams();
  const article = useSelector(articleByIdSelector(parseInt(id)));
  const { title, source, urlToImage, author, publishedAt, url, content } = article;
  const history = useHistory();

  const goToArticles = (): void => history.push('/');

  return (
    <div className="article-view">
      <div className="article-view__content content">
        <Header text={title} />
        <a className="content__link-go-to-back link-go-to-back" href="#" onClick={goToArticles}>
          Return to articles list
        </a>
        <ArticleImage alt={title} src={urlToImage} />
        <div className="content__article-info article-info">
          <ArticleInformations author={author} name={source.name} publishedAt={publishedAt} url={url} />
          <ArticleTitle title={title} />
          <ArticleDescription content={content} />
          <FlatButton
            className="content__go-to-source-button go-to-source-button"
            height="64px"
            name="go-to-source"
            onClick={() => window.open(url, '_blank')}
            width="300px"
          >
            Go To Source
          </FlatButton>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
