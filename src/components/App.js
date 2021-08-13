import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {

  render() {
    return (
      <SignIn>
        <div className='burger-paradise'>
          <div className='menu'>
            <Header title='Hot Burgers'/>
            <ul className='burgers'>
              <Burger/>
            </ul>
          </div>
          <Order/>
          <MenuAdmin/>
        </div>
      </SignIn>
    );
  }
}

export default App;