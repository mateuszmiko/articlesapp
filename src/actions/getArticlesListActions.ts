import { ArticlesResponseType, ArticlesThunkAction, FiltersType } from '../types/types';
import axios, { AxiosResponse } from 'axios';

const REQUEST_GET_ARTICLES_LIST = 'REQUEST_GET_ARTICLES_LIST';
const RECEIVE_GET_ARTICLES_LIST_SUCCESS = 'RECEIVE_GET_ARTICLES_LIST_SUCCESS';
const RECEIVE_GET_ARTICLES_LIST_FAILURE = 'RECEIVE_GET_ARTICLES_LIST_FAILURE';

type RequestGetArticlesListActionType = {
  type: typeof REQUEST_GET_ARTICLES_LIST;
};

type ReceiveGetArticlesListActionType = {
  payload: ArticlesResponseType;
  type: typeof RECEIVE_GET_ARTICLES_LIST_SUCCESS;
};

type ReceiveGetArticlesListFailureActionType = {
  type: typeof RECEIVE_GET_ARTICLES_LIST_FAILURE;
};

export type GetArticlesListActionsType =
  | RequestGetArticlesListActionType
  | ReceiveGetArticlesListActionType
  | ReceiveGetArticlesListFailureActionType;

const BASE_PATH = 'https://newsapi.org/v2/everything';
const API_KEY = process.env.API_KEY;

export function getArticlesListRequestAction({
  fromDate,
  toDate,
  topic,
  sortBy,
  pageSize,
  page,
}: FiltersType): ArticlesThunkAction<Promise<void>, GetArticlesListActionsType> {
  return async (dispatch) => {
    dispatch(requestGetArticlesList());
    try {
      const response: AxiosResponse<ArticlesResponseType> = await axios.get(
        `${BASE_PATH}?qInTitle=${topic}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`,
      );
      dispatch(receiveGetArticlesListSuccess(response.data));
    } catch (error) {
      dispatch(receiveGetArticlesListFailure());
      throw error;
    }
  };
}

function requestGetArticlesList(): RequestGetArticlesListActionType {
  return {
    type: REQUEST_GET_ARTICLES_LIST,
  };
}

export function receiveGetArticlesListSuccess(response: ArticlesResponseType): ReceiveGetArticlesListActionType {
  return {
    type: RECEIVE_GET_ARTICLES_LIST_SUCCESS,
    payload: response,
  };
}

function receiveGetArticlesListFailure(): ReceiveGetArticlesListFailureActionType {
  return {
    type: RECEIVE_GET_ARTICLES_LIST_FAILURE,
  };
}
