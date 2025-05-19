import { ChakraProvider } from '@chakra-ui/react'
import { LoginForms } from './components/LoginPage/LoginForms'



export function App() {
  return (
    <ChakraProvider>
      <LoginForms/>
    </ChakraProvider>
  )
}