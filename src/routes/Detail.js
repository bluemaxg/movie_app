import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <span>
          {location.state.title} <br />
          <br /> {location.state.year} <br />
          <br /> {location.state.genres} <br />
          <br /> {location.state.summary} <br />
        </span>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
