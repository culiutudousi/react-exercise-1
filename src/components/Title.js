import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ 'text-align': 'center', 'text-transform': 'Uppercase' }}>
          {this.props.title}
        </h1>
        <h2 style={{ 'text-align': 'center', 'text-transform': 'Uppercase' }}>
          {this.props.subtitle}
        </h2>
      </div>
    );
  }
}

export default Title;
