import PropTypes from 'prop-types'
import React, { Component }from 'react'///this is used for class based
// import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {///this line is for class based
  // static defaultProps = {
  //   country: 'us',
  //   pageSize: 6,
  //   category: 'general'
  // }

  ///in class based, you have to use propType at the start of the class
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }

  ///this useState use for function based instead of state in class based
  // const News =(props)=>{
  //   const [articles,setArticles]=useState([])
  //   const [loading,setLoading]=useState(true)
  //   const [page, setPage] = useState(1)
  //   const [totalResults, settotalResults] = useState(0)
      //   document.title="NewsMonkey - "+ this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1);

      ///this constructor use in class based
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title="NewsMonkey - "+ this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1);
  }

  async updateNews(){///this is use for class based
  // const updateNews= async ()=>{///this is use for function based
    this.props.setProgress(10);///this is use for class based
    // props.setProgress(10);///this is use for function based
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;///this is use for class based
    // const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;///this is use for function based
    this.setState({loading: true});///this is used for class based
    // setLoading(true);///this is used for function based

    let data = await fetch(url);
    this.props.setProgress(30);///this is use for function based

    // props.setProgress(30);///this is used for function based

    let parseData = await data.json();
    this.props.setProgress(60);///this is used for class based
    // props.setProgress(70);///this is used for function based

    console.log(parseData);

    // totRes=parseData.totalResults;

    // setArticles(parseData.articles);///this is used for function based
    // settotalResults(parseData.totalResults);///this is used for function based
    // setLoading(false);///this is used for function based
    this.setState({articles: parseData.articles, ///this is used for class based
      totalResults: parseData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);///this is used for class based
    // props.setProgress(100);///this is used for function based

  }

  //componentDidMount() use in class based 
  async componentDidMount(){///this is a live cycle method, this run after complete the render 
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a17964134f9044e1ab90c901c6a347af&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});

    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({articles: parseData.articles, 
    //   totalResults: parseData.totalResults,
    //   loading: false

    // })
    this.updateNews();

  }

  ///useEffect use in function based instead of componentDidMount() in class based
  // useEffect(() => {
  //   updateNews();
  // }, [])
  
  

  //  handlePrevClick= async ()=>{
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a17964134f9044e1ab90c901c6a347af&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();

  //   // this.setState({
  //   //   page: this.state.page-1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })
  //   await this.setState({page:this.state.page-1})   
  //    this.updateNews();
    
  // }

  //  handleNextClick= async ()=>{
  //   // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a17964134f9044e1ab90c901c6a347af&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page+1,
  //   //     articles: parseData.articles,
  //   //     loading: false
  //   //   })
  //   // }
  //   await this.setState({page: this.state.page+1});
  //   this.updateNews();


    
  // }
//use const for function based, if use class based then do not need const
  fetchMoreData = async () => {//use for class based
  // const fetchMoreData = async () => {//use for function based
    // setPage(page+1)///use in function based
   this.setState({page: this.state.page+1})///use in class based
   const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;///use in class based
  //  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;//use in function based
  //  this.setState({loading: true});

   let data = await fetch(url);
   let parseData = await data.json();
  //  console.log(parseData);

   // totRes=parseData.totalResults;
  //  setArticles(parseData.articles.concat(parseData.articles));///this is used for function based
  //  settotalResults(parseData.totalResults);///this is used for function based
   //setLoading(false);///this is used for function based
   this.setState({articles: this.state.articles.concat(parseData.articles), ///this is used in class based
     totalResults: parseData.totalResults,
    //  loading: false,
   })
  };

  render() {///this line is for class based
    return (
      <>
        {/* use in class based    */}
        <h1 className="text-center" style={{ margin: '55px 0px' }}>NewsMonkey - Top Headlines - {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} Category</h1>
        {/* use in function based    */}
        {/* <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top Headlines - {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Category</h1> */}
        {this.state.loading && <Spinner/>}     
         {/* ///use in class based */}
        
        {/* use in function based */}
        {/* {loading && <Spinner/>}   */}

        {/* use in class based    */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

        {/* use in function based */}
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        > */}
        {/* {console.log(articles.length)} */}

          <div className="container">
            {/* use for class based */}
            <div className="row">
              {this.state.articles.map((element,index)=>{
                return <div className="col-md-4" key={index}>
                          <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
              })}

            
            </div>

              {/* use for function based */}
            {/* <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                          <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
              })}

            
            </div> */}
          </div>

        </InfiniteScroll>

         {/* <div className="row">
          { !this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
          })}

          
        </div> */}

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>&rarr; Next</button>
        </div> */}
        </>
    )
  // }///this line is for class based
}///this line is for class based
}
// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string

//   }

export default News