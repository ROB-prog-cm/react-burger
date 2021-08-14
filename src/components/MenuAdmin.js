import React from "react";
import {AddForm} from "./AddForm";


export class MenuAdmin extends React.Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2>Управление меню</h2>
        <AddForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}> Загрузить бургеры</button>
      </div>
    )
  }
}
