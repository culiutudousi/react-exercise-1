import React from 'react';
import Detail from './Detail';

class Details extends React.Component {
  render() {
    return (
      <table>
        {this.props.datas.map((data) => 
          <Detail 
            time={data.time}
            title={data.title}
            description={data.description}
            key={data.time}
          />
        )}
      </table>
    );
  }
}

export default Details;
