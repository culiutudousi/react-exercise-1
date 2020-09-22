import React from 'react';

class Detail extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.time}</td>
        <td>
          <p>
            <strong>{this.props.title}</strong>
          </p>
          <p>{this.props.description}</p>
        </td>
      </tr>
    );
  }
}

export default Detail;
