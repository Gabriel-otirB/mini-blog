import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from '../hooks/useAuthentication';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { auth } = useAuthentication();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Memory Leak
  }, [auth]);

  // While user undefined
  if (user === null) {
    return (
      <div style={styles.loadingContainer}>
        <h2>Carregando...</h2>
      </div>
    );
  }
  
  // Afterward user value change
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}

// Loading Style
const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
  },
};
