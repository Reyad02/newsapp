// import PropTypes from 'prop-types'
import React, { Component } from 'react'

// export class NewsItem extends Component {///this line is for class based
  // static propTypes = {}
 
  const NewsItem =(props)=>{///this line is for function based


  // render() {///this line is for class based
    let {title,description,imageUrl,newsUrl,author,date}=props;
    return (
      <div className='my-3'>
        <div className={`card bg-${props.mode} text-${props.write}`} >
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title.length>=45? title+"...":title} </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>{author?"By "+author:""} {new Date(date).toUTCString()}</small></p>
            {/* <p className='card-text'><small className='text-muted'>Date: {new Date(date).toTimeString()}</small></p> */}
            <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${props.write}`}>Read more...</a>
          </div>
        </div>     
      </div>
    )
  }

  // }///this line is for class based
// }///this line is for class based

export default NewsItem