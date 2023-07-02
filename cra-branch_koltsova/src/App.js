import React, { Component } from 'react';
import './App.css';
import PureC from './PureC';
import RegularC from './RegularC';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      disabled: false,
      showComponent: true,
    };
    this.inputRef = React.createRef();
    this.handlerFocus = this.handlerFocus.bind(this);
  }

  componentDidMount() {
    this.renderTimer = setInterval(() => {
      this.setState({
        value: 1
      })
    }, 2000)
  }

  componentDidUpdate() {
    console.log(`disabled сейчас ${this.state.disabled}`);
  }

  handlerChange = event => {
    if (event.target.value === 'реакт') {
      this.setState({
        disabled: true
      })
    } else {
      this.setState({
        disabled: false
      })
    }
  }

  handlerFocus() {
    this.inputRef.current.focus()
  }

  toggleComponent() {
    this.setState(
      { showComponent: this.state.componentIsVisible }
    )
  };

  render() {
    console.log('render');
    const { showComponent } = this.state;
    return (
      <div className='components'>
        <form className='companents__form'>
          <h3>Проверка на React</h3>
          <input type='text' style={{ width: 250, height: 25, padding: 5 }} placeholder='реакт' onChange={this.handlerChange} ref={this.inputRef} />
          <button style={{ width: 100, height: 25 }} disabled={this.state.disabled}>Отправить</button>
          <input type='button' value='Фокус' style={{ width: 100, height: 25 }} onClick={this.handlerFocus} />
        </form>
        <div className='components__additional'>
          <PureC />
          <button
            style={{ width: 150, height: 25, backgroundColor: 'black', border: 'none', color: 'white' }}
            onClick={() => this.toggleComponent()}>Удалить компонент</button>
          {showComponent ? <RegularC /> : <p>см. консоль</p>}
        </div >
      </div>
    )
  }
}

export default App;
