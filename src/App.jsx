import './App.css'
// import Kitchen from './Components/Kitchen/Kitchen'
// import RoomDemo from './Components/Room/RoomDemo'
// import ThreeShoes from './Components/ThreeShoes'
// import LivingRoom from './Components/living-room/LivingRoom'
// import MrdernKitchen from './Components/mordenKitchen/MrdernKitchen'
// import Bathroom from './Components/bathroom/Bathroom'
import { BrowserRouter } from "react-router-dom";
import Routing from './routing/Routing';


function App() {

  return (
    <>
      {/* <div className='overflow-hidden max-w-[100vw] max-h-[100vh]'> */}
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
        {/* <ThreeShoes /> */}
        {/* <Kitchen /> */}
        {/* <RoomDemo /> */}
        {/* <LivingRoom/> */}
        {/* <MrdernKitchen /> */}
        {/* <Bathroom /> */}
      {/* </div> */}
    </>
  )
}

export default App
