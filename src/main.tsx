import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from "@apollo/client";
import {client} from "./lib/apollo"
import "./assets/styles/global.css"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
