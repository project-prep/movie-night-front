import React from "react";

class CardTitle extends React.Component {
  render() {
    return (
      <div
        className={`flip-card-title ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default CardTitle;