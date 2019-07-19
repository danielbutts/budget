import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React, { Component } from 'react';
// import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      isLoading: true,
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      // fetch initial page
      // const { data } = await axios.get('');
      const data = {};
      this.setState({ data, isLoading: false });
    } catch (error) {
      console.error('getData', error.message);
    }
  }

  render() {
    const { isLoading  } = this.state;
    if (!isLoading) {
      return (
        <div>
          <header>
            Loaded!
          </header>
        </div>
      );
    }
    return (
      <div>
        <header>
          Loading!
        </header>
      </div>
    );
  }
}

export default App;
