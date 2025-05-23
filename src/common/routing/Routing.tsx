import { Main } from "@/app/Main"
import { PageNotFound } from "@/common/components"
import { Login } from "@/features/auth/ui/Login/Login"
import { Route, Routes } from "react-router"
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute"
import { useAppSelector } from "../hooks"
import { selectIsLoggedIn } from "@/features/auth/model/auth-slice"

export const Path = {
  Main: "/",
  Login: "login",
  Faq: "/faq",
  NotFound: "*",
} as const

export const Routing = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
 
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
        <Route path={Path.Main} element={<Main />} />
        <Route path={Path.Faq} element={<h2>Faq</h2>} />
      </Route>
 
      <Route element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath={Path.Main} />}>
        <Route path={Path.Login} element={<Login />} />
      </Route>
 
      <Route path={Path.NotFound} element={<PageNotFound />} />

      {/* Отдельная защита роута */}
      {/* <Route
        path={Path.Login}
        element={
          <ProtectedRoute isAllowed={!isLoggedIn}>
            <Login />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  )
}
