import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContextProvider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
