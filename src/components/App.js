import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "./Header";
import {Order} from "./Order";
import {MenuAdmin} from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from '../base'
import SignIn from "./Auth/SignIn";
import firebase from 'firebase/app'


export class App extends React.Component {

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {}
  }

  componentDidMount() {
    const {params} = this.props.match
    const localStorageRef = localStorage.getItem(params.restaurantId)
    if (localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    }
    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {params} = this.props.match
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
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
  addToOrder = (key) => {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({order})
  }
  deleteFromOrder = key => {
    const order = {...this.state.order};
    // 2. Удаляем burger
    delete order[key];
    // 3. Записать новый объект order в state
    this.setState({order});
  };

  updateBurger = (key, updatedBurger) => {
    const burgers = {...this.state.burgers};
    // 2. Обновляем нужный burger
    burgers[key] = updatedBurger;
    // 3. Записать новый объект burgers в state
    this.setState({burgers});
  };
  deleteBurger = key => {
    const burgers = {...this.state.burgers};
    // 2. Удаляем burger
    burgers[key] = null;
    // 3. Записать наш новый объект burgers в state
    this.setState({burgers});
  };

  handleLogout = async () => {
    await firebase.auth().signOut()
    window.location.reload()
  }

  render() {
    return (
      <SignIn>
        <div className='burger-paradise'>
          <div className='menu'>
            <Header title='Hot Burgers'/>
            <ul className='burgers'>
              {Object.keys(this.state.burgers).map((key) => {
                return <Burger
                  addToOrder={this.addToOrder}
                  details={this.state.burgers[key]}
                  key={key}
                  index={key}/>
              })}
            </ul>
          </div>
          <Order
            deleteFromOrder={this.deleteFromOrder}
            order={this.state.order}
            burgers={this.state.burgers}/>
          <MenuAdmin
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger}
            handleLogout={this.handleLogout}
            burgers={this.state.burgers}
            loadSampleBurgers={this.loadSampleBurgers}
            addBurger={this.addBurger}/>
        </div>
      </SignIn>
    );
  }
}
