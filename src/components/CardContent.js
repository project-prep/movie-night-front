import React from "react";

class CardContent extends React.Component {
  render() {
    return (
      <div
        className={`flip-card-content ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default CardContent;