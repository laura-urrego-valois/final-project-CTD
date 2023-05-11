import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/notFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
