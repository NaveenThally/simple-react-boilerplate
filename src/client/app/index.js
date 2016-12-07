import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
          <div>
            <h1>Simple-react-boilerplate by navigate</h1>
            <p>You can write components within the App folder and import and add it here</p>
          </div>
      );
  }

}


render(<App />,document.getElementById('app'));
