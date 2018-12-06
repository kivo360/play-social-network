import { Col, Icon, Layout, Menu, Row, Table, Avatar } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ColSizing } from '../misc/data/generalProps';
import logo from '../misc/images/Bolt.png';
import { bindActionCreators } from 'redux';
import view from '../redux/slices/views';

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Column, ColumnGroup } = Table;

const LogoSizing = ColSizing.header.logo;
const MenuSizing = ColSizing.header.menu;
const UserSizing = ColSizing.header.user;

class Head extends PureComponent {
    // Constructor
        // the current menu and key in state
    constructor(props){
        super(props);
        this.state = {
            currentMenu: '',
            currentKey: ''
        }

        // console.log(props);
    }
    

    // Components will recieve props
        // update the current key inside both of the menus
    componentWillUpdate(nextProps, nextState){
        console.log(nextProps);
        this.setState({ currentKey: nextProps.view.currentView });
        // console.log(nextState);
    }

    render(){
        return (
            <Header>
                <Row className="header-row">
                    <Col {...LogoSizing}>
                        <Link to="/">
                        <img className="center-image" src={logo} />
                    </Link>
                    </Col>
                    <Col {...MenuSizing}>
                        <Menu
                            inlineIndent={0}
                            theme="dark"
                            mode="horizontal"
                            selectedKeys={[this.state.currentKey]}
                            // defaultSelectedKeys={['2']} // In future should be whatever the route history says
                            className="main-nav"
                        >
                            <Menu.Item key="publish" className="get-quote"><Link to="/publish"><Icon type="plus-circle" theme="outlined" />Publish a Post</Link></Menu.Item>
                            {/* TODO: Set a general post here. Based on the general tag to quickly put this together. */}
                            {/* <Menu.Item key="1"><Link to="/view"><Icon type="bars" theme="outlined" />Posts</Link></Menu.Item> */}
                            {/* <Menu.Item key="2"><Link to="/billing"><Icon type="file" theme="outlined" />Billing</Link></Menu.Item> */}
                            {/* <Menu.Item key="3"><Link to="/account"><Icon type="user" theme="outlined" />Account</Link></Menu.Item> */}
                            <Menu.Item key="help"><Link to="/help"><Icon type="question-circle" theme="outlined" />Help</Link></Menu.Item>
                            </Menu>
                    </Col>
                    <Col className="user-nav" {...UserSizing} >

                        

                    <Menu
                        inlineIndent={0} 
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[this.state.currentKey]}
                        >
                        <Menu.Item key="account"><Link to="/account"> <Icon type="user" theme="outlined" />Account</Link></Menu.Item>
                        <Menu.Item key="login"><Link to="/login"> <Icon type="user" theme="outlined" />Login/Sign-Up</Link></Menu.Item>
                    </Menu>
                    
                    </Col>
            </Row>
          </Header>
        )
    }
}

const mapStateToProps = state => ({
    ...state
   })
  
  
  
const mapDispatchToProps = dispatch => ({
    views: bindActionCreators(view.actions, dispatch) 
})
   
  
  
  
  //  const mapDispatchToProps = dispatch => ({
  //   getUser: () => dispatch(getUser())
  //  })
   
const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(Head)
const RouteApp = withRouter(ConnectApp)

export default RouteApp;