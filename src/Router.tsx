import { Routes, Route } from 'react-router-dom'
import { Payment } from './pages/Payment'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  )
}
