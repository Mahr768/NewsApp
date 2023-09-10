import React from "react";
const Newsitem=(props)=>{

    let { title, description, imageUrl, newsUrl, auther, time, source } =props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div style={{
           display: 'flex',
           justifyContent: 'center',
           position:'absolute',
           right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger" >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
  src={imageUrl || "https://example.com/new-alternative-image.jpg"}
  className="card-img-top"
  alt="..."
  width="300" // Set an appropriate width
  height="200" // Set an appropriate height
/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {auther ? auther : "Unknown"} on 
                {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}
export default Newsitem