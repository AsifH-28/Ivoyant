import "./App.css";
import BreadCrum from "./components/BreadCrum/BreadCrum";


const items ={
  item:[{
    path:"/home",
    label:"home",
    nested:{
      path:"/home/profile",
      label:"profile",
    }
  },{
    path:"/about",
    label:"About",
    nested:{
      path:"/About/Members",
      label:"Members",
    }
  },{
    path:"/Account",
    label:"Account",
    nested:{
      path:"/Account/Documents",
      label:"Documents",
    }
  },{
    path:"/TermsAndConditions",
    label:"Terms And Conditions",
    nested:{
      path:"/TermsAndConditions/Rules",
      label:"Rules",
    }
  }]
}

function App() {
  return <>
  <BreadCrum  items={items.item}/>
  </>;
}

export default App;
