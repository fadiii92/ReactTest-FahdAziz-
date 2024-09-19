
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Login, Signup, Home, CreateCompanyAccount, UserLogin, UserPanel, Income, Expanses } from './Components'
import Layout from './Layout'
import AuthProvider from './context/AuthProvider'
import ViewCompanyUsers from './Components/ViewCompanyUsers'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>

        <Route path='/' element= {<Layout />} >
              <Route index element = {<Home />} />
              <Route path='ViewCompanyUsers' element = {<ViewCompanyUsers />} />
              <Route path='Income' element = {<Income />} />
              <Route path='Expanses' element = {<Expanses />} />

        </Route>
              <Route path='CreateCompanyAccount' element = {<CreateCompanyAccount />} />
          <Route path='login' element = {<Login />} />
          <Route path='UserLogin' element = {<UserLogin />} />
          <Route path='register' element = {<Signup />} />
          <Route path='UserPanel' element = {<UserPanel />} />
        
        </>
    )
  )

  return (
   <>

   <AuthProvider>
        <RouterProvider router = {router} />
   </AuthProvider>



   </>
  )
}

export default App
