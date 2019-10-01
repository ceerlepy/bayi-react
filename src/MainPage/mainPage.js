import React from 'react';
import {Route, Switch, NavLink} from "react-router-dom";
import Lookups from './lookups';
import SearchLookUps from './searchLookups';
import Rules from './rules';
import SearchRules from './SearchRules';
import Reports from './reports';
import ChartReports from './chartReports';
import 'antd/dist/antd.css';
import {
  Layout, Menu, Breadcrumb, Icon
} from 'antd';
import { Input } from 'antd';

const Search = Input.Search;
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default class MainPage extends React.Component {
  
  render(){
    return (
      <div>
        <Layout>  
          <Header className="header" style={{background:'#fff'}}>
            <img src='/images/icons/vodafone.png' style={{ width: '80px', height:'80px'}}/>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 400, margin:'0 0 0 70px' }}
            /> 
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '60px', float:"right"}}
            >
              <Menu.Item key="1">Anasayfa</Menu.Item>
              <Menu.Item key="2">Profil</Menu.Item>
              <Menu.Item key="3">Çıkış</Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Layout style={{ height: '600px', borderRight: 0 }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />Lookups</span>}>
                <Menu.Item key="1">
                  <NavLink to="/mainPage/search/lookups">Search Lookups</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/mainPage/add/lookups">Add Lookups</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />Rules</span>}>
                <Menu.Item key="3">
                  <NavLink to="/mainPage/search/rules">Search Rules</NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink to="/mainPage/add/rules">Add Rules</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />Reports</span>}>
                <Menu.Item key="5">
                  <NavLink to="/mainPage/reports">Search Reports</NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink to="/mainPage/reports">Add Reports</NavLink>
                </Menu.Item>
                <Menu.Item key="7">
                  <NavLink to="/mainPage/chartReports">Show Chart Reports</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 4px 4px' }}>
            {/*<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>*/}
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
              <Switch>
                <Route path={`${this.props.match.url}/search/lookups`} exact component={SearchLookUps} />
                <Route path={`${this.props.match.url}/add/lookups`} exact component={Lookups} />
                <Route path={`${this.props.match.url}/search/rules`} exact component={SearchRules} />
                <Route path={`${this.props.match.url}/add/rules`} exact component={Rules} />
                <Route path={`${this.props.match.url}/reports`} exact component={Reports} />
                <Route path={`${this.props.match.url}/chartReports`} exact component={ChartReports} />
                <Route path="*" component={()=> <div>Not found</div>} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer>Vodafone Bayi uygulamasına aittir. Tüm hakları saklıdır @2019</Footer>
        </Layout>
      </div>
    );
  }

}