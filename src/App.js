import React from 'react';
import './App.css';

import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb  } from 'antd';
import { Button } from 'antd';

const { Header, Footer, Content } = Layout;

function move(direction) {
  alert('You moved ' + direction);
}

const Data = (
  <div className="dataTable">
    <div className="singleData">
      <div className="dataName" id="dataNameTop">
        <div className="textInDataName">Temperature</div>
      </div>
      <div className="data">
        <div className="textInData">50*C</div>
      </div>
    </div>

    <div className="singleData">
      <div className="dataName" id="odd">
        <div className="textInDataName">Angle</div>
      </div>
      <div className="data">
        <div className="textInData" id="oddText">Deep</div>
      </div>
    </div>

    <div className="singleData">
      <div className="dataName" id="dataNameBottom">
        <div className="textInDataName">XD</div>
      </div>
      <div className="data">
        <div className="textInData">:D</div>
      </div>
    </div>
  </div>
);

const Control = (
  <div className="controlPanel">
    <div className="controlPanelRow">
      <div className="buttonWrap">
        <Button type="primary" id="buttonLeft" onClick={(e) => move('Left')}>Left</Button>
      </div>
    </div>

    <div className="controlPanelRow">
      <div className="buttonWrap">
        <Button type="primary" id="buttonUp" onClick={(e) => move('Up')}>Up</Button>
      </div>
      <div className="buttonWrap">
        <Button type="primary" id="buttonDown" onClick={(e) => move('Down')}>Down</Button>
      </div>
    </div>

    <div className="controlPanelRow">
      <div className="buttonWrap">
        <Button type="primary" id="buttonRight" onClick={(e) => move('Right')}>Right</Button>
      </div>
    </div>
  </div>
);

const OtherControl = (
  <div>hell no</div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageIndex) {
    this.setState(prevState => ({
      page: pageIndex
    }));
  }

  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="Data" onClick={this.changePage.bind(this, 0)}>Data</Menu.Item>
              <Menu.Item key="Control" onClick={this.changePage.bind(this, 1)}>Control</Menu.Item>
              <Menu.Item key="OtherData" onClick={this.changePage.bind(this, 2)}>OtherData</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}> */}
            <div className="content">
              {this.state.page == 0 ? Data : this.state.page == 1 ? Control : OtherControl}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Shield Design ©2018 Created by Shield
          </Footer>
        </Layout>,
      </div>
    );
  }
}

export default App;
