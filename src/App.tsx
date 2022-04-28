import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LayoutProvider } from './layouts'
import './style/main.css'
import { NearProvider } from '#providers/NearProvider/'
import { Backdrop } from '#components/Backdrop'
import { QueryClient, QueryClientProvider } from 'react-query'

const LazyDashboard = lazy(() => import('#pages/Dashboard'))
const LazyMarkets = lazy(() => import('#pages/Markets'))
const LazyAccess = lazy(() => import('#pages/Access'))
const LazyBorrow = lazy(() => import('#pages/Borrow'))
const LazyRecords = lazy(() => import('#pages/Records'))
const LazyNotFound = lazy(() => import('#pages/NotFound'))

const queryClient = new QueryClient({})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NearProvider>
        <LayoutProvider>
          <Suspense fallback={<Backdrop />}>
            <Routes>
              <Route path="/markets" element={<LazyMarkets />} />
              <Route path="/dashboard" element={<LazyDashboard />} />
              <Route path="/access" element={<LazyAccess />} />
              <Route path="/borrow" element={<LazyBorrow />} />
              <Route path="/records" element={<LazyRecords />} />
              <Route path="/not-found" element={<LazyNotFound />} />
              <Route path="/" element={<Navigate to="markets" />} />
              <Route path="*" element={<Navigate to="not-found" />} />
            </Routes>
          </Suspense>
        </LayoutProvider>
      </NearProvider>
    </QueryClientProvider>
  )
}

export default App
