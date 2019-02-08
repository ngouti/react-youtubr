import React from 'react'
// import './css/VideoCard.css'

class VideoCard extends React.Component {

    
    render(){
        // console.log(this.props)
        return(
            <div className="row">
                <div onClick={() => this.props.handleClick(this.props)} className="column">
                <p>{this.props.snippet.title}</p>
                <p>{this.props.snippet.description}</p>
                <img src={this.props.snippet.thumbnails.default.url}></img>
                </div>               
            </div>
        )
    }
}

export default VideoCard