import { BrowserRouter,Route,Routes } from "react-router-dom";import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkTreeview from "./views/LinkTreeview";
import Profileview from "./views/Profileview";
import HandleView from "./views/HandleView";
import NotFoundView from "./views/NotFoundView";
import HomveView from "./views/HomeView";


export default function Router(){

  return(
    <BrowserRouter>

      <Routes>
        <Route element={<AuthLayout/>}>
        <Route path="/auth/login" element={<LoginView></LoginView>}/>
        <Route path="/auth/register" element={<RegisterView></RegisterView>}/>
        </Route>
        <Route path="/" element={<HomveView/>}/>
        <Route path="/admin" element={<AppLayout/>}>
          <Route index={true} element={<LinkTreeview/>}/>
          <Route path="profile" element={<Profileview/>} />
        </Route>
        <Route path="/:handle" element={<AuthLayout/>}>
          <Route element={<HandleView/>} index={true}/>
        </Route>
        <Route path="/404"  element={<AuthLayout/>}>
        <Route element={<NotFoundView/>} index={true}/>
        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}
