import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {userSlice} from "./store/reducers/UserSlice.ts";

function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch()
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment(5))}>
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
