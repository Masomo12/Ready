import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeScreen from './pages/HomeScreen';
import ResourceLocator from './pages/ResourceLocator';
import OfflineCommunication from './pages/OfflineCommunication';
import Settings from './pages/Settings';
import FemicidePrevention from './pages/FemicidePrevention';
import Navigation from './components/Navigation';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <HomeScreen />
                    <Navigation />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <PrivateRoute>
                  <>
                    <ResourceLocator />
                    <Navigation />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/communication"
              element={
                <PrivateRoute>
                  <>
                    <OfflineCommunication />
                    <Navigation />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/femicide-prevention"
              element={
                <PrivateRoute>
                  <>
                    <FemicidePrevention />
                    <Navigation />
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <>
                    <Settings />
                    <Navigation />
                  </>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Toaster position="top-center" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;