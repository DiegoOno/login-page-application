import { login } from '@/lib/api'
import { useRouter } from 'next/router'
import React, { createContext, useContext, useReducer } from 'react'
import { useMutation, useQueryClient } from 'react-query'

interface LoginState {
  isAuthenticated: boolean
  user: any
  loading: boolean
  error: any
}
interface LoginContextProps {
  loginState: LoginState
  authenticate: ({ email, password }: { email: string, password: string }) => Promise<boolean>
  dispatch: React.Dispatch<{ type: string, payload: any }>
}

const LoginContext = createContext({} as LoginContextProps)

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const loginReducer = (state: LoginState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

const LoginContextProider = ({ children }: { children: React.ReactNode }) => {
  const [loginState, dispatch] = useReducer(loginReducer, initialState);
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    {
      onSuccess: ({ loggedUser, expireIn }) => {
        queryClient.invalidateQueries("login");
        dispatch({ type: "LOGIN_SUCCESS", payload: { loggedUser, expireIn } });
        router.push("/dashboard");
      },
      onError: (error) => {
        console.error(error);
      },
    }
  )


  const authenticate = async ({ email, password }: { email: string, password: string }) => {
    try {
      mutate({ email, password })
      return true
    } catch(error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error })
      return false
    }
  }

  const value = {
    loginState,
    dispatch,
    authenticate
  }

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}

const useLogin = () => {
  const context = useContext(LoginContext)
  if (!context) {
    throw new Error('useLogin must be used within a LoginContextProvider');
  }
  return context;
}

export { LoginContextProider, useLogin }
