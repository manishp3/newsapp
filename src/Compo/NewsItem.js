import React from 'react'

const NewsItem=(props)=>{




        let { title, description, imageUrl, newsUrl, date, author, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: "0" }}>
                        <span className=" badge rounded-pill bg-danger">{source}3+
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://i.ytimg.com/vi/lqUBdWn6fRk/maxresdefault.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : "unknown"}  on {date}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem