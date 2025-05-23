import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormPage } from './Components/FormPage.tsx'
import { GlobalStyle } from '../public/Global/Global.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <FormPage />
  </StrictMode>,
)
