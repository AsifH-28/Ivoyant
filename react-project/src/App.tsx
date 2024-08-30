import "./App.css";
import BreadCrum from "./components/BreadCrum/BreadCrum";


const items ={
  item:[{
    path:"/home",
    label:"home"
  },{
    path:"/about",
    label:"About"
  },{
    path:"/Account",
    label:"Account"
  },{
    path:"/Account",
    label:"Account"
  }]
}

function App() {
  return <>
  <BreadCrum  items={items.item}/>
  </>;
}

export default App;
