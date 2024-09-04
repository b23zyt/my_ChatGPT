import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import Homepage from "./routes/homepage/Homepage"
import DashboardPage from './routes/dashboardPage/DashboardPage';
import ChatPage from './routes/chatPage/ChatPage';
import RootLayout from './layouts/rootLayout/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout'
import SignInPage from './routes/signInPage/SignInPage'
import SignUpPage from './routes/signUpPage/SignUpPage'
import Terms from './routes/policyPage/Terms'
import PolicyPage from './routes/policyPage/PolicyPage'


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: '/sign-in',
        element: <SignInPage/>
      },
      {
        path: '/sign-up',
        element: <SignUpPage/>
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '/policy',
        element: <PolicyPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
