import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header name='toni' />
        <Body>ABC</Body>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
