import './App.css'
// import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Newcalender from './rc-calender/Newcalender'
// import Calender from './calender/Calender'
// import Sarang from './sarang/Sarang'
import Kitchen from './Components/Kitchen/Kitchen'
import RoomDemo from './Components/Room/RoomDemo'
import ThreeShoes from './Components/ThreeShoes'
import LivingRoom from './Components/living-room/LivingRoom'
import MrdernKitchen from './Components/mordenKitchen/MrdernKitchen'
import Bathroom from './Components/bathroom/Bathroom'
// import AnimationTexture from './Components/animation/AnimationTexture';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from './routing/Routing';
// import OnlineMOdel from './Components/onlineModel/OnlineMOdel';
import FlowbiteComp from './componentss/FlowbiteComp';
import { useEffect } from 'react';
// import SidebarComp from './componentss/SidebarComp';


function App() {

  // useEffect(() => {
  //   const driverObj = driver({
  //     showProgress: true,
  //     steps: [
  //       // {
  //       //   element: ".first-step",
  //       //   popover: {
  //       //     className: "first-step-popover-class",
  //       //     title: "Title on Popover",
  //       //     description: "Body of the popover",
  //       //     position: "left",
  //       //   },
  //       // },
  //       {
  //         element: ".second-step",
  //         popover: {
  //           className: "first-step-popover-class",
  //           title: "Title on Popover",
  //           description: "Body of the popover",
  //           position: "left",
  //         },
  //       },
  //       {
  //         element: ".third-step",
  //         popover: {
  //           className: "first-step-popover-class",
  //           title: "Title on Popover",
  //           description: "Body of the popover",
  //           position: "left",
  //         },
  //       },
  //       {
  //         element: ".fourth-step",
  //         popover: {
  //           className: "first-step-popover-class",
  //           title: "Title on Popover",
  //           description: "Body of the popover",
  //           position: "left",
  //         },
  //       },
  //     ]
  //   });

  //   driverObj.drive();
  // }, [])


  // useEffect(() => {
  //   const driverOptions = {
  //     animate: true,
  //     opacity: 0.75,
  //     padding: 10,
  //     allowClose: true,
  //     overlayClickNext: true,
  //     doneBtnText: "Saya Mengerti",
  //     closeBtnText: "close",
  //     stageBackground: "#ffffff",
  //     nextBtnText: "next",
  //     prevBtnText: "prev",
  //     keyboardControl: true,
  //   };

  //   const aniket = new driver(driverOptions);

  //   aniket.defineSteps([
  //     // {
  //     //   element: ".first-step",
  //     //   popover: {
  //     //     className: "first-step-popover-class",
  //     //     title: "Title on Popover",
  //     //     description: "Body of the popover",
  //     //     position: "left",
  //     //   },
  //     // },
  //     {
  //       element: ".second-step",
  //       popover: {
  //         className: "first-step-popover-class",
  //         title: "Title on Popover",
  //         description: "Body of the popover",
  //         position: "left",
  //       },
  //     },
  //     {
  //       element: ".third-step",
  //       popover: {
  //         className: "first-step-popover-class",
  //         title: "Title on Popover",
  //         description: "Body of the popover",
  //         position: "left",
  //       },
  //     },
  //     {
  //       element: ".fourth-step",
  //       popover: {
  //         className: "first-step-popover-class",
  //         title: "Title on Popover",
  //         description: "Body of the popover",
  //         position: "left",
  //       },
  //     },
  //   ]);

  //   // Uncomment the line below if you want to start the driver immediately
  //   aniket.start();

  //   // Cleanup function to stop the driver when the component unmounts
  //   // return () => {
  //   //   driver.reset(true);
  //   // };
  // }, []);

  return (
    <>
      {/* <Newcalender /> */}
      {/* <Sarang /> */}
      {/* <AnimationTexture/> */}

      {/* <div className="App-2">
        <h1 className="first-step">Driver.js</h1>
        <h2>Click the button to see some magic happen!</h2>
        <div className="btn">Don't try me!</div>
        <p className="paragraph">hehe</p>
        <p className="paragraph">hehe</p>
        <p className="paragraph">hehe</p>
        <div className="btn second-step">Don't try me!</div>
        <div className="btn third-step">Don't try me!</div>
        <div className="btn fourth-step">Don't try me!</div>
      </div> */}





      <div className='overflow-hidden max-w-[100vw] max-h-[100vh]'>
        <BrowserRouter>
          <Routing />
          <Routes>
            <Route path={`/online`} element={<FlowbiteComp />} />
          </Routes>
        </BrowserRouter>
      </div>

      <ThreeShoes />
      <Kitchen />
      <RoomDemo />
      {/* <LivingRoom /> */}
      {/* <MrdernKitchen /> */}
      {/* <Bathroom /> */}
    </>
  )
}

export default App
