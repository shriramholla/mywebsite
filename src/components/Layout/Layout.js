import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar/Navbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Aux from '../../hoc/Aux'

class Layout extends Component {
    state = {
        showSideDrawer: true
      }
    
      sideDrawerHandler = () => {
        this.setState({showSidedrawer: false})
      }
    
      sideDrawerToggler = () => {
          this.setState((prevState) => {
              this.setState({showSidedrawer: !prevState.showSidedrawer})
          })
      }

      render() {
        return (
            <Aux>
                <Navbar toggleDrawer={this.sideDrawerToggler}/>
                <SideDrawer 
                    open={this.state.showSidedrawer} 
                    closed={this.sideDrawerHandler}/>
                
            </Aux>
        );
      }
}

export default Layout;