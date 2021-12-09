
import './App.css';
import { GlobalLayout } from './common/GlobalLayout';
import { Sider } from './components/sider';
import { Header } from './components/header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GetComponent, routes } from './routes/routesManager';
import 'antd/dist/antd.css';
export function App() {
  const location = useLocation();
  return (
    <>
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
    </>
  );
}



