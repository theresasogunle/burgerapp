import React, { Component } from 'react';
import Layout from '../src/components/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
