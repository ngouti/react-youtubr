import React from 'react'
import VideoCard from './VideoCard'

class VideoList extends React.Component {

    
    render(){
        return(
            <div className="list">
               
                {/* {console.log(this.props.videos)} */}
                {this.props.videos.map(vid => (
                    <VideoCard key={vid.index} {...vid} handleClick={this.props.handleClick}/>
                ))}
            </div>
        )
    }
}

export default VideoList