import React from "react";
// import { debounce } from "lodash";
// import moment from "moment";
import { NewsList } from "./NewsList";
import { NewsSelected } from "./NewsSelected";

let startTime = "";
let counter = 0;
export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: props.newsList
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newsList !== this.props.newsList) {
      this.setState({ newsList: nextProps.newsList });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    let { newsList } = this.props;

    if (value !== "") {
      newsList = newsList.filter(list => list.title.indexOf(value) > -1);
    } else {
      newsList = this.props.newsList;
    }
    // const debounceCall = debounce(() => {
    //   this.props.handleChange(value);
    // }, 500);

    this.setState({ newsList });
    // debounceCall();
  }

  renderNewsList() {
    let leftPanelWidth = 500;
    let newsItem = this.state.newsList.map((newsItem, index) => {
      counter = counter;
      const border =
        newsItem.id === this.props.newsSelecteddata.id
          ? "1px solid orange"
          : "1px solid black";
      return (
        <NewsList
          key={index}
          styleDetails={{ width: leftPanelWidth, border }}
          newsItem={newsItem}
        />
      );
    });
    return newsItem;
  }

  render() {
    return (
      <main role="main" className="container">
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-black rounded box-shadow">
          <input
            onChange={this.handleChange}
            className="form-control form-control-lg"
            type="text"
            placeholder="Search News"
          />
        </div>
        <div className="news-items-wrapper">
          {this.renderNewsList() != "" ? (
            <div>
              <div className="heading">
                <hr /> Most Popular Viewed News <hr />
              </div>
              <div className="news-container">
                <div className="left-side-panel">{this.renderNewsList()}</div>
                {this.props.newsSelecteddata.length !== 0 ? (
                  <NewsSelected
                    newsItem={this.props.newsSelecteddata}
                    styleDetails={{ border: "1px solid black" }}
                  />
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </main>
    );
  }
}
