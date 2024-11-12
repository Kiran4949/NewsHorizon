import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import breakingNews from "../../assets/breakingNews.jpg";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackImage = breakingNews;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={false} loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title || ""}
                    description={element.description || ""}
                    imageUrl={element.urlToImage}
                    fallbackImage={fallbackImage} 
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
