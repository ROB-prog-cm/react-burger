import React from "react";
import {AddForm} from "./AddForm";
import {EditBurgerForm} from "./EditBurgerForm";


export class MenuAdmin extends React.Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2>Управление меню</h2>
        {Object.keys(this.props.burgers).map(key => {
          return <EditBurgerForm burger={this.props.burgers}/>
        })}
        <AddForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}> Загрузить бургеры</button>
      </div>
    )
  }
}
