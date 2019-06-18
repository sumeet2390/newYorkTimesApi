import Dispatcher from "../Redux/actions/Dispatcher";
import {
  GET_NEWS_DETAILS,
  GET_NEWS_DETAILS_SUCCESS,
  GET_NEWS_DETAILS_ERROR,
  GET_NEWS_SELECTED_SUCCESS,
  GET_NEWS_SELECTED_ERROR
} from "../Redux/actions/types";
import NetworkManager from "../NetworkManager/NetworkManager";
import configuration from "../Utils/Config";

class NewsService {
  popularMostViewed = name => {
    NetworkManager.getAPI(
      `${configuration.baseUrl}${configuration.mostPopluar}${
        configuration.newsSearch
      }`
    )
      .then(response => {
        let news = response.data.results;
        Dispatcher.dispatchEvents(GET_NEWS_DETAILS_SUCCESS, {
          payload: news,
          title: "Welcome",
          message: "success"
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatchEvents(GET_NEWS_DETAILS_ERROR, {
          payload: "",
          title: "API Fails",
          message: "Api failure"
        });
      });
  };

  selectedNews = news => {
    Dispatcher.dispatchEvents(GET_NEWS_SELECTED_SUCCESS, {
      payload: news,
      title: "Welcome",
      message: "success"
    });
  };
}

const NewsServiceInst = new NewsService();
export default NewsServiceInst;
