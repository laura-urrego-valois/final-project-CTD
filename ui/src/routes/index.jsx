import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/notFound'
import Header from '../components/Header/header'

export const AppRoutes = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}
