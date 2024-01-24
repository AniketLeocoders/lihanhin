import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Homepage from "../pages/Homepage";
import Loadingpage from "../pages/Loadingpage"
import RefCardCarusal from "../componentss/ref-carousal/RefCardCarusal";
import Stylecardslider from "../componentss/Stylecardslider";
import Shader from "../Components/Shader/Shader";
const Bake_example = lazy(() => import('../Components/baked/example/Bake_example'));
const CardCarusal = lazy(() => import('../componentss/CardCarusal'));
const SecondCardSlider = lazy(() => import('../componentss/SecondCardSlider'));
const Bathroom = lazy(() => import('../Components/bathroom/Bathroom'));
const MordernKitchen = lazy(() => import('../Components/mordenKitchen/MrdernKitchen'));

const Routing = () => {
    let RoutingArray = [
        { path: "/", component: Homepage },
        { path: "/Bake_example", component: Bake_example },
        { path: "/Shader", component: Shader },
        { path: "/bathroom", component: Bathroom },
        { path: "/kitchen", component: MordernKitchen },
        { path: "/card-carusal", component: CardCarusal },
        { path: "/card-carusal2", component: SecondCardSlider },
        { path: "/card-carusal3", component: RefCardCarusal },
        { path: "/card-carusal4", component: Stylecardslider },
    ]
    return (
        <>
            <Suspense fallback={<Loadingpage />}>
                <Routes>
                    {RoutingArray?.map((routeing, i) =>
                        <Route key={`${routeing + i}`} path={routeing.path} element={<routeing.component />}
                        // loader={async ({ params }) => { return fetch(`/fake/api/teams/${params.teamId}.json`); }}
                        // action={async ({ request }) => { return updateFakeTeam(await request.formData()); }}
                        // errorElement={<ErrorBoundary />}
                        />
                    )}
                </Routes>
            </Suspense>
        </>
    )
}

export default Routing