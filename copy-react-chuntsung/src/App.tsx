import React, { Children, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalLayout } from './common/GlobalLayout';
import { Sider } from './components/sider';
import { Header } from './components/header';
import { Routes, Link, Route, useLocation } from 'react-router-dom';
import { GetComponent, routes } from './routes/routesManager';
export function App() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        {routes.map((route, idx) => {
          <Route path={route.path} key={idx} element={route.component} />
        })}
      </Routes>
      <GlobalLayout
        header={<Header isLogin={false} userName="" isVisible={false} />}
        silder={<Sider />}
        children={GetComponent(location.pathname)}
      />
    </div>
  );
}



