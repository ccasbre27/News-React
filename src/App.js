import React, { Component, Fragment } from 'react';
import Header from './components/Header';

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=YOUR_API_KEY`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({
      news: news.articles
    });

  }
  
  render() {
    return (
      <Fragment>
        <Header
          title="News from Germany" />

        <div className="container white contenedor-noticias">

        </div>
      </Fragment>

    );
  }
}

export default App;

