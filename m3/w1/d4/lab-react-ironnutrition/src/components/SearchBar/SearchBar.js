import React from 'react';

class SearchBar extends React.Component {
    state = {
      search: ""
    }

    handleInput = (event) => {
        // const value = event.target.value;
        const { value, name } = event.target;

        this.setState( { [name]: value } )

        // Call the filterFoods with the search string
        this.props.filterFoods(value);
    }


    render() {
        return (
        <div>
            <input
                type="text"
                className="input search-bar"
                name="search"
                placeholder="Search"
                value={this.state.search}
                onChange={this.handleInput}
            />
        </div>
        )
        }
    }
export default SearchBar;