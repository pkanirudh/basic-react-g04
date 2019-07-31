import React from 'react';

import './SearchResultsCopy.css';
import Iterator from '../Iterator/Iterator.react';

class SearchResultsCopy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
            empty: true
        }
    }
    componentDidMount(){
        let url = "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
        fetch(url).then(resp=>resp.json()).then(list=>this.setState({list,empty:false}));
    }
    componentDidUpdate(){
        if(!(this.props.tag==="")){
            let url = "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged="+this.props.tag+"&site=stackoverflow"
            fetch(url).then(resp=>resp.json()).then(list=>this.setState({list,empty:false}));
        }
        
    }
    render() {
        if(this.state.empty){
            
            return(
                <div></div>
            )
        }
        else{
            return (
            <div className='searchresultscopy_wrapper'>
                {this.props.tag}
                <button></button>
                <Iterator list = {this.state.list.items}/>
            </div>
        );
        }
        
    }
}

export default SearchResultsCopy;