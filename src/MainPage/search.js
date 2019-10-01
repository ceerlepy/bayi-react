import React from 'react';
import { Button } from 'antd';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchItem = this.searchItem.bind(this);
  }
    
  render() {
    return (
      <div>
          <input placeholder="Search" type="search" 
                 value={this.props.value} />
          <Button type="primary" shape="circle" icon="search" />
      </div>
    );
  }

  searchItem = (event)=> {
    this.props.onChange(event.target.value);
  }
}