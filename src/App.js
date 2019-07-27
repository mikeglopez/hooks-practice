import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({list: [...this.state.list, document.getElementById('listItem').value]});
  }

  componentDidMount() {
    document.title = `Shopping List: ${this.state.list.length}`;
  }

  render () {
    return (
      <div className="App">
        <h1>My Shopping List: {this.state.list.length} Items</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="listItem" /> <input type="submit" value="Add" id="submit" />
        </form>
        {this.state.list.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    );
  }
}

export default App;




