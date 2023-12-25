import { useRouter } from "next/router"

import { useLogin } from "@/context/loginContext"

import Content from "./Content"
import Header from "./Header"

const AuthenticatedPage = ({ children }: { children: React.ReactNode }) => {
  const { dispatch } = useLogin()
  const router = useRouter()
  
  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: null })
    router.push('/login')
  }

  return (
    <Content>
      <Header logout={logout} />
      {children}
    </Content>
  )
}

export default AuthenticatedPage
