import React from 'react';

class Subtitle extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ 'text-transform': 'Uppercase' }}>{this.props.title}</h3>
      </div>
    );
  }
}

export default Subtitle;
