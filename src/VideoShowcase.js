import React from 'react'
// import './css/VideoShowcase.css'

class VideoShowcase extends React.Component {

    
    render(){
        // console.log(this.props)
        // let embedUrl = `https://www.youtube.com/embed/${this.props.id.videoId}`;
        let embedUrl = `https://www.youtube.com/embed/KMZ7oOCXfP8`;
        return(
            <div className="main">
            
            <iframe title={"iframe"} src={embedUrl} />

            </div>
        )
    }
}

export default VideoShowcase