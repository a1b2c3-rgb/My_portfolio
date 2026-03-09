import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
 import  CRendering from './CRendering.jsx'
 import Renderlists from './Renderlists.jsx'
 import Logo from './Profile.jsx'
 import ReactHook from './ReactHook.jsx'
 import Counter from './Counter.jsx'
 import Onchange from './Onchange.jsx'
 import Colorpicker from './Colorpicker.jsx'
 import Updater from './Updater.jsx'
 import ObjectUpdate from './ObjectUpdate.jsx'
 import ArrayUpdate from './ArrayUpdate.jsx'
 import ArrayObjUpdate from './ArrayObjUpdate.jsx'
 import ToDoList from './ToDoList.jsx'
 import UseEffect from './UseEffect.jsx'
 import WindowListener from './WindowListener.jsx'
 import WorldClock from './WorldClock.jsx'
 import UseRef from './UseRef.jsx'
 import Stopwatch from './Stopwatch.jsx'
function App() {
  return(
    <>
    < CRendering isLoggedIn = {false} userName="Violet"/>
    <Header/>
    <Stopwatch/>
    <UseRef/>
    <UseEffect/>
    <WindowListener/>
    <WorldClock/>
    <Updater/>
    <ObjectUpdate/>
    <ArrayUpdate/>
    <ArrayObjUpdate/>
    <Colorpicker/>
    <ToDoList/>
    <Counter/>
    <Card/>
    <Onchange/>
    <Student name ="angela" age={20} isStudent={true}/>
    <Student name ="Alice" age={30} isStudent={false}/>
    <Student/>
    <ReactHook/>
    <Renderlists/>
    <Button/>
    <Logo/>
    <Footer/>
    </>
  );
}

export default App
