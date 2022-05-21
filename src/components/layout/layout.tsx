import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout
