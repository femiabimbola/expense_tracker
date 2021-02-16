import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';


ReactDOM.render(
     <SpeechProvider appId="c72a5a3d-ef47-4ffb-94fb-6296746d35d5" language="en-US">
     <Provider> 
         <App /> 
     </Provider>
    </SpeechProvider>, document.getElementById('root'));