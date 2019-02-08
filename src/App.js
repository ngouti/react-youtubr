import React, { Component } from "react";
import SearchForm from './SearchForm'
import VideoList from './VideoList'
import VideoShowcase from './VideoShowcase'
import keys from "./keys";
// import data from './data'
import './css/App.css'



class App extends Component {

  state = {
    searchValue: '',
    selectedVideo: null,
    videos: null
  }
 
  componentDidMount(){

    console.log(keys.API_KEY)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.searchValue}&type=video`)
    .then(res => res.json())
    .then(res => this.setState({
      videos: res
    })
    )
    
  }

  getSearchValue = (val) => {
    val.preventDefault()
    // debugger
    this.setState({
      searchValue: val.target.search.value
    })
  }

  handleClick = (video) => {
    
    console.log('selectedvid',video)
    this.setState({
      selectedVideo: video
    })

  }

  render() {
    console.log(this.state.videos)
    return (
      null
      // <div className="main">
      //     <div className="search">
      //     <SearchForm handleSubmit={this.getSearchValue}/>
      //     </div>
      //     <div className="list">
      //     <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
      //     </div>
      //     <div className="video">
      //     <VideoShowcase selectedVideo={this.state.selectedVideo}/>
      //     </div>
      // </div>
    )
  }
}

export default App;
