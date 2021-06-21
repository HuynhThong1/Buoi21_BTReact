import logo from './logo.svg';
import './App.css';
import DemoComponent from './components/DemoComponent';
import DemoFComponent from './components/DemoFComponent';
import BaiTapComponent from './components/BaiTapComponent/BaiTapComponent';
import BaiTapLayoutBootstrap from './components/BaiTapLayoutBootstrap/BaiTapLayoutBootstrap';
import DataBinding from './DataBinding/DataBinding';
import DataBindingF from './DataBinding/DataBindingF';

function App() { //component gốc của ứng dụng
  return (
    <div className="App">

      {/* <BaiTapComponent></BaiTapComponent> */}
      <BaiTapLayoutBootstrap />
      {/* <DataBinding /> */}

      {/* <DataBindingF/> */}
    </div>
  );
}

export default App;
