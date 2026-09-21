import { useCallback, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import { Preloader } from './components/preloader/Preloader'
import {
  AguaPage,
  ContatoPage,
  GranjaPage,
  HistoriaPage,
  MarcaPage,
  MetodoPage,
  OrigemPage,
  ProducaoPage,
  RebanhoPage,
  TerraPage,
} from './pages/Chapters'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'historia', element: <HistoriaPage /> },
      { path: 'terra', element: <TerraPage /> },
      { path: 'rebanho', element: <RebanhoPage /> },
      { path: 'granja', element: <GranjaPage /> },
      { path: 'producao', element: <ProducaoPage /> },
      { path: 'metodo', element: <MetodoPage /> },
      { path: 'agua', element: <AguaPage /> },
      { path: 'marca', element: <MarcaPage /> },
      { path: 'origem', element: <OrigemPage /> },
      { path: 'contato', element: <ContatoPage /> },
    ],
  },
])

export default function App() {
  const [ready, setReady] = useState(false)
  const onComplete = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready ? <Preloader onComplete={onComplete} /> : null}
      {ready ? <RouterProvider router={router} /> : null}
    </>
  )
}
