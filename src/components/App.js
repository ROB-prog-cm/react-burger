import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "./Header";
import {Order} from "./Order";
import {MenuAdmin} from "./MenuAdmin";


export class App extends React.Component {
  state = {
    burgers: {},
    order: {}
  }
  addBurger = burger => {
    console.log(burger)
    const burgers = {...this.state.burgers}
    burgers[`burger${Date.now()}`] = burger
    this.setState({burgers})
  }

  render() {
    return (
      /* <SignIn>*/
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title='Hot Burgers'/>
          <ul className='burgers'>
            {/*   <Burger/>*/}
          </ul>
        </div>
        <Order/>
        <MenuAdmin addBurger={this.addBurger}/>
      </div>
      /*    </SignIn>*/
    );
  }
}
