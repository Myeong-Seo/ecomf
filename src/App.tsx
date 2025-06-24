import {Navigate, Route, Routes} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Mypage from './MyPage';

function App() {

    return (
        <div>
            <h1>App 페이지로 이동했음</h1>
            <Routes>
                <Route path="/" element={<Navigate to = "/login"/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </div>
    );
}

export default App;

/*
import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
