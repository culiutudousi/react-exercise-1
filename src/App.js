import React, { Component } from 'react';
import './App.scss';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Text from './components/Text';
import Details from './components/Details';

const title = 'hello,';
const description = 'my name is kamil 24yo and this is my resume/cv';
const subTitle1 = 'about me';
const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';
const subTitle2 = 'education';
const datas = [
  {
    time: '1990',
    title: 'I was born in Katowice',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
  },
  {
    time: '2005',
    title: 'Secondary school specializing in artistic',
    description:
      'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
  },
  {
    time: '2009',
    title: 'First level graduation in Graphic Design',
    description:
      'Aspernatur,mollitia,quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto,quibusdam asperiores unde.',
  },
  {
    time: '2012',
    title: 'Second level graduation in Graphic Design',
    description: 'Ducimus,aliquam tempore autem itaque et accusantium!',
  },
];

class App extends Component {
  render() {
    return (
      <main className="app">
        <Title title={title} subtitle={description} />
        <hr />
        <Subtitle title={subTitle1} />
        <Text text={text} />
        <Subtitle title={subTitle2} />
        <Details datas={datas} />
      </main>
    );
  }
}

export default App;
