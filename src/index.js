import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Header from './pages/main';

ReactDOM.render(
  <React.StrictMode>
    <Hello name="Дима" age="24" />
    <Hello name="Дарина" />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);