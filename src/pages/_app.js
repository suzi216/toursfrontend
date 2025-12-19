import '../styles/globals.css'
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { persistor, store } from '@/redux/store'


export const AuthContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [role, setRole] = useState(pageProps.role || null);

  return (
    <Provider store={store}>

      <AuthContext.Provider>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Provider>

  );
}
