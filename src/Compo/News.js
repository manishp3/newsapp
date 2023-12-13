import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
   
    constructor(props) {
        super();
        console.log("Hello ok")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        // document.title = `${this.props.category} - NewsMonkey`;
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0271a1586f4dc79bf89a2d31161189&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(40);
        let parseData = await data.json()
        console.log(data)
        this.props.setProgress(70);
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false })
        this.props.setProgress(100);
    }
     fetchMoreData =async () => {
      this.setState({page:this.state.page+1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0271a1586f4dc79bf89a2d31161189&page=1&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(data)
      this.setState({ 
        articles: this.state.articles.concat(parseData.articles),
         totalArticles: parseData.totalResults
           })

    }
    render() {
        return (
            <div className='container my-8'>
                <h1 className="text-center" style={{ margin: "60px" }}>NewsMonkey -Top Headlines on {this.props.category}</h1>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                        {this.state.articles.map((element) => {
                            return <div key={element.url} className="col-md-3 mx-4">
                                <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 0) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.HandlePreClick}>&larr;Pre </button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News