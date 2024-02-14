# React Context API

## Introduction

This repository provides a simple implementation of React Context API for managing user authentication in a React application. The Context API allows components to share data without having to pass props manually through each level of the component tree.

## File Structure

The project consists of the following files and directories:

- `context/`: Contains context-related files.
  - `UserContext.js`: Defines the UserContext using `React.createContext()`.
  - `UserContextProvider.js`: Provides the UserContext to the component tree with a state for managing user data.
- `components/`: Contains React components.
  - `Login.jsx`: Component for user login with form fields for email and password.
  - `LoginInVerif.jsx`: Component for verifying user login status and displaying appropriate content.
- `App.js`: Main component where context provider is wrapped around other components.
- `README.md`: Documentation file providing instructions and overview of the project.

## Setup

To use the React Context API for user authentication in your project, follow these steps:

1. Copy the `context/` and `components/` directories to your project.
2. Import and use the `UserContextProvider` in your `App.js` file to wrap the components requiring access to user data.
3. Implement the `Login` and `LoginInVerif` components in your application as needed.
4. Customize the components and context logic according to your project requirements.

## Usage

## Create context/UserContext.js

Defines the UserContext using `React.createContext()`.

```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

## Create context/UserContextProvider.js

Provides the UserContext to the component tree with a state for managing user data.

### highlights : user ,children

```js
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

## App.js

Main component where the context provider is wrapped around other components.

```js
import "./App.css";
import Login from "./components/Login";
import LoginInVerif from "./components/LoginInVerif";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <LoginInVerif />
    </UserContextProvider>
  );
}

export default App;
```

## components/Login.jsx

Component for user login with form fields for email and password. It uses the useContext hook to access the UserContext and update the user data.

```js
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="h-[500px] flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-4">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter your email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={sumbitHandler}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

## components/LoginInverif.jsx

Component for verifying user login status and displaying appropriate content. It uses the useContext hook to access the UserContext and render different content based on the user's login status

```js
import { useContext } from "react";
import UserContext from "../context/UserContext";

const LoginInVerif = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Please Login
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          welcome <hr />
          User : {user.username} <hr />
        </button>
      </div>
    </div>
  );
};

export default LoginInVerif;
```
