import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({searchText: term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
