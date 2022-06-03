import React, { useState, useCallback } from 'react';
import {Route, Routes} from 'react-router-dom';

//import Users from './user/pages/Users';

import StartPage from './operation/pages/StartPage';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { Navigate } from 'react-router-dom';

import KitchenOP from './kitchen/pages/KitchenOP';
import KitchenView from './kitchen/pages/KitchenView';
import UpdateKitchen from './kitchen/pages/UpdateKitchen';
import NewKitchen from './kitchen/pages/NewKitchen';

import MaterialTypeOP from './matrial-types/pages/MaterialTypeOP';
import MaterialTypeView from './matrial-types/pages/MaterialTypeView';
import UpdateMaterialType from './matrial-types/pages/UpdateMaterialType';
import NewMaterialType from './matrial-types/pages/NewMaterialType';

import ReasonOP from './reasons/pages/ReasonOP';
import ReasonView from './reasons/pages/ReasonView';
import UpdateReason from './reasons/pages/UpdateReason';
import NewReason from './reasons/pages/NewReason';

import ScaleOP from './scales/pages/ScaleOP';
import ScaleView from './scales/pages/ScaleView';
import UpdateScale from './scales/pages/UpdateScale';
import NewScale from './scales/pages/NewScale';

import SelectedKitchen from './operation/pages/SelectedKitchen';
import MeasureList from './operation/pages/MeasureList';
import NewMeasure from './operation/pages/NewMeasure';
import UpdateMeasuer from './operation/pages/UpdateMeasure';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
          <Route path="/" element={<StartPage/>}/>

          <Route path="/kitchens" element={<KitchenOP/>}/>
          <Route path="/:kitchenId/kitchenView" element={<KitchenView/>}/>
          <Route path="/kitchens/:kitchenId" element={<UpdateKitchen/>}/>
          <Route path="/kitchens/new" element={<NewKitchen />} />

          <Route path="/materialTypes" element={<MaterialTypeOP/>}/>
          <Route path="/:materialTypeId/materialTypeView" element={<MaterialTypeView/>}/>
          <Route path="/materialTypes/:materialTypeId" element={<UpdateMaterialType/>}/>
          <Route path="/materialTypes/new" element={<NewMaterialType />} />

          <Route path="/reasons" element={<ReasonOP/>}/>
          <Route path="/:reasonId/reasonView" element={<ReasonView/>}/>
          <Route path="/reasons/:reasonId" element={<UpdateReason/>}/>
          <Route path="/reasons/new" element={<NewReason />} />

          <Route path="/scales" element={<ScaleOP/>}/>
          <Route path="/:scaleId/scaleView" element={<ScaleView/>}/>
          <Route path="/scales/:scaleId" element={<UpdateScale/>}/>
          <Route path="/scales/new" element={<NewScale />} />

          <Route path="/startpage" element={<StartPage />} />
          <Route path="/selectedKitchen/:kitchenId" element={<SelectedKitchen/>}/>
          <Route path="/selectedScale/:scaleId" element={<MeasureList/>}/>
          <Route path="/newMeasure/:scaleId" element={<NewMeasure/>}/>
          <Route path="/updateMeasure/:operId" element={<UpdateMeasuer/>}/>
          
          <Route path="*" element={<Navigate to="/" replace />}/>
      </>
      
    );
  } else {
    routes = (
     <>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/startpage" element={<StartPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login, logout:logout}}>
        <MainNavigation/> 
        <main>
          <Routes>
            {routes}
          </Routes>
        </main> 
    </AuthContext.Provider>
  );
};

export default App;
