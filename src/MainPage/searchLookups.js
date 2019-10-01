import React from 'react';
import {
  Input, Col, Row, Select, Button, DatePicker, AutoComplete, Cascader, Form,
} from 'antd';
import MUIDataTable from "mui-datatables";
import AdvancedSearchForm from './AdvancedSearchForm';

const InputGroup = Input.Group;
const Option = Select.Option;

const columns = ["Name", "Company", "City", "State"];
 
//const data = [];
 
const options = {
  filterType: 'checkbox',
};

export default class SearchLookUps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {load:false};
    this.searchLookups = this.searchLookups.bind(this);
  }
    
  componentDidMount() {
     //mounted
  }
    
  render() {
    const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);
    return (
      
      <div>
        {/*<InputGroup size="large">
        <Row gutter={8}>
          <Col span={5}>
            <Select defaultValue="Zhejiang" style={{width :'200px'}}>
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Col>
          <Col span={10}>
            <DatePicker style={{ width: '90%' }} />
          </Col>
          <Col span={2}>
            <Button onClick={this.searchLookups} style={{ height :'40px' }} icon="search">Search</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <MUIDataTable
            title={"Employee List"}
            data={this.data}
            columns={columns}
            options={options}
          />  
        </Row> 
      </InputGroup>*/}
        <WrappedAdvancedSearchForm />
        <br />
        <MUIDataTable
          title={"Employee List"}
          data={this.data}
          columns={columns}
          options={options}
        />
      </div>
    )
  }

  searchLookups = (event)=> {
    //this.props.onChange(event.target.value);
   this.data = [
      ["Joe James", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
     ];
    this.setState({load:true});
  }
}