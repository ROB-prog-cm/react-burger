import React, {Component} from "react";


export class EditBurgerForm extends Component {
  render() {
    return (
      <div>
        <div className='burger-edit'>
          <input
            name='name'
            type='text'
          />
          <input
            name='price'
            type='text'
          />
          <select
            name='status'
            className='status'
          >
            <option value='available'>Доступно!</option>
            <option value='unavailable'>Не доступно!</option>
          </select>
          <textarea
            name='desc'
          />
          <input
            name='image'
            type='text'
          />
          <button>
            Удалить из меню
          </button>
        </div>
      </div>
    );
  }
}