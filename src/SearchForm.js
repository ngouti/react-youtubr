import React from 'react'
import { Form } from 'semantic-ui-react'
// import './css/SearchForm.css'

class SearchForm extends React.Component {
    

    render(){
        return(
            <form onSubmit={(e) => this.props.handleSubmit(e)} className="searchbar" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Submit<i className="search"></i></button>
          </form>
        )
    }
}

export default SearchForm