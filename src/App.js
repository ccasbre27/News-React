import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';

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
          <ListNews
            news={this.state.news} />
        </div>
      </Fragment>

    );
  }
}

export default App;

