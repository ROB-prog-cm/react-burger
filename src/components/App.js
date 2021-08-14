import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "./Header";
import {Order} from "./Order";
import {MenuAdmin} from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";


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

  loadSampleBurgers = () => {
    this.setState({
      burgers: sampleBurgers
    })
  }

  render() {
    return (
      /* <SignIn>*/
      <div className='burger-paradise'>
        <div className='menu'>
          <Header title='Hot Burgers'/>
          <ul className='burgers'>
            {Object.keys(this.state.burgers).map((key) => {
              return <Burger
                details={this.state.burgers[key]}
                key={key}
                index={key}/>
            })}
          </ul>
        </div>
        <Order/>
        <MenuAdmin
          loadSampleBurgers={this.loadSampleBurgers}
          addBurger={this.addBurger}/>
      </div>
      /*    </SignIn>*/
    );
  }
}
