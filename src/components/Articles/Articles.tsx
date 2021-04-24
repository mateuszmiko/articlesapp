import './articles.scss';
import { ArticlePropsType, ArticlesResponseType } from '../../types/types';
import { listOfArticlesSelector } from '../../selectors/articles';
import { useSelector } from 'react-redux';
import ArticlesList from '../SharedComponents/ArticlesList/ArticlesList';
import Filters from '../SharedComponents/Filters/Filters';
import FlatButton from '../Utils/FlatButton/FlatButton';
import Header from '../Utils/Header/Header';
import React, { useEffect, useState } from 'react';

const Articles = () => {
  const articleLimit = 6;
  const [isVisibleShowMoreButton, setIsVisibleShowMoreButton] = useState(true);
  const listOfArticles = useSelector(listOfArticlesSelector);
  const [list, setList] = useState<ArticlePropsType[]>();
  const [lastIndex, setLastIndex] = useState(articleLimit);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  useEffect(() => {
    if (typeof listOfArticles === 'undefined') return;
    const { articles } = listOfArticles as ArticlesResponseType;
    prevPage === page ? setList(articles) : setList([...list, ...articles]);
    setIsVisibleShowMoreButton(true);
  }, [listOfArticles]);

  const showMore = () => {
    const { totalResults } = listOfArticles;
    const newIndex = lastIndex + articleLimit;
    const canShowMoreArticles = newIndex < totalResults;
    setLastIndex(newIndex);
    setIsVisibleShowMoreButton(canShowMoreArticles);
    setPrevPage(page);
    setPage(page + 1);
  };

  const resetPage = () => {
    setPrevPage(1);
    setPage(1);
  };

  return (
    <div className="articles">
      <div className="articles__content content">
        <Header text="Articles" />
        <Filters page={page} resetPage={resetPage} />
        <ArticlesList articles={!!list?.length ? list : []} />
        {isVisibleShowMoreButton && (
          <FlatButton className="content__show-more-button show-more-button" height="48px" name="show-more" onClick={showMore} reverse width="330px">
            Show More
          </FlatButton>
        )}
      </div>
    </div>
  );
};

export default Articles;
