import React from 'react'
import styles from './login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.login}>
        Login Page
      
    </div>
  )
};

export default LoginPage



//Server comonpnents are rendered on the server by default...
// If you want to render a component on the client, you can use the 'use client' directive at the top of the file. This will make the component a client component, which can use state, effects, and other client-side features.
// server actions are functions that run on the server and can be used to perform databse connection or API calls.
