import { Routes, Route} from 'react-router-dom'

//* import components
import Login from '../containers/Login'
import RecoveryPassword from '../containers/recoveryPassword'

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<>Home</>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>

            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default Router