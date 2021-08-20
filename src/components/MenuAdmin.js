import React from "react";
import {AddForm} from "./AddForm";
import {EditBurgerForm} from "./EditBurgerForm";
import PropTypes from 'prop-types'

export class MenuAdmin extends React.Component {
  static propTypes = {
    burgers: PropTypes.object,
    deleteBurger: PropTypes.func,
    updateBurger: PropTypes.func,
    addBurger: PropTypes.func,
    loadSampleBurgers: PropTypes.func
  };

  render() {
    return (
      <div className='menu-admin'>
        <h2>Управление меню</h2>
        {Object.keys(this.props.burgers).map(key => {
          return <EditBurgerForm
            key={key}
            index={key}
            deleteBurger={this.props.deleteBurger}
            updateBurger={this.props.updateBurger}
            burger={this.props.burgers[key]}/>
        })}
        <AddForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}> Загрузить бургеры</button>
      </div>
    )
  }
}
