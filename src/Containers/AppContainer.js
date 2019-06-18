import React from "react";
import { Nav } from "../Components/Nav";
import SearchComponent from "../Components/SearchComponent";
import NewsServiceInst from "../Services/NewsService";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(searchTerm) {
    // NewsServiceInst.popularMostViewed();
  }

  componentDidMount() {
    debugger;
    console.log("in comp did mount");
    NewsServiceInst.popularMostViewed();
  }

  render() {
    return (
      <div className="app-container">
        {/* <Nav logo={"New York Times"} handleClick={this.handleClick} /> */}
        <Nav logo={"New York Times"} />
        {this.props.error && this.props.pdata.length <= 0
          ? toastr.error(this.props.error.title, this.props.error.message)
          : null}
        {this.props.success && this.props.pdata.length <= 0
          ? toastr.success(this.props.success.title, this.props.success.message)
          : null}
        <SearchComponent
          handleChange={this.handleChange}
          newsList={this.props.pdata}
          newsSelecteddata={this.props.newsSelecteddata}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { pdata } = state.NewsReducer;
  const { newsSelecteddata } = state.NewsSelectedReducer;
  return {
    pdata,
    newsSelecteddata
  };
}

export default connect(
  mapStateToProps,
  {}
)(AppContainer);
