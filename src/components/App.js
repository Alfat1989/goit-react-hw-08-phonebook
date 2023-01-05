import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/auth-operations';
import { RequireAuth } from './hoc/RequireAuth';
import '../App.css';

const Layout = lazy(() => import('./Layout/Layout'));
const ContactPage = lazy(() => import('../pages/ContactsPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/contacts" element={<ContactPage />} /> */}
            <Route
              path="/contacts"
              element={
                <RequireAuth>
                  <ContactPage />
                </RequireAuth>
              }
            />
            <Route path="registered" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
