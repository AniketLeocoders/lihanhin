import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Homepage from "../pages/Homepage";
import Loadingpage from "../pages/Loadingpage";
const Bathroom = lazy(() => import('../Components/bathroom/Bathroom'));
const MordernKitchen = lazy(() => import('../Components/mordenKitchen/MrdernKitchen'));

const Routing = () => {
    let RoutingArray = [
        { path: "/", component: Homepage },
        { path: "/bathroom", component: Bathroom },
        { path: "/kitchen", component: MordernKitchen },
    ]
    return (
        <>
            <Suspense fallback={<Loadingpage/>}>
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