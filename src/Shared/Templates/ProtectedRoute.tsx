import React from 'react'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({ component, ...rest } : any) => {
  // const history = useHistory()

  // useEffect(() => {
  //   const authenticate = async () => {
  //     const response = await userAuth()
  //     if (response?.status !== 200) {
  //       history.push(routes.login)
  //     }
  //   }
  //   authenticate()
  // }, [history.location.pathname])

  const routeComponent = (props: any) => React.createElement(component, props)

  return (
    <>
      <Route
        {...rest}
        render={ routeComponent }
      />
    </>
  )
}

export default ProtectedRoute
