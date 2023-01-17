import './App.css';
import Button from './components/Button';

const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Button icon="7"/>
          <Button icon="8" />
          <Button icon="9" />
          <Button icon="/" />
        </div>
        <div className="row">
          <Button icon="4" />
          <Button icon="5" />
          <Button icon="6" />
          <Button icon="*" />
        </div>
        <div className="row">
          <Button icon="1" />
          <Button icon="2" />
          <Button icon="3" />
          <Button icon="+" />
        </div>
        <div className="row">
          <Button icon="0" />
          <Button icon="." />
          <Button icon="=" />
          <Button icon="-" />
        </div>
      </div>
    </div>
  );
}

export default App;
