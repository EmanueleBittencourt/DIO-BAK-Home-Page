import { 
    Box,
    Center,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react'
import * as React from "react"
import { Header } from '../Header/Header'
import { PasswordInput } from './Password'
import { Email } from './Email'
import { EnterButton } from './EnterButton'


export const LoginForms = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    LoginForms()
  }

  return (
    <Box h="100vh" w="100vw" overflow="hidden" m="0" p="0">
      <Box as="header">
        <Header />
      </Box>


      <Center
        h="calc(100vh - 80px)"
        w="100%"
        bg="#1E3A5F"
      >
        <Box
          as="form"
          onSubmit={handleSubmit}
          minHeight="40vh"
          bg="rgba(247, 247, 248, 0.8)"
          w="100%"
          maxW="400px"
          p="6"
          borderRadius="xl"
          boxShadow="2xl"
        >
          <Box position="relative" display="inline-block" mb="10">
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              color="#16181C"
            >
              Faça o Login
            </Text>
            <Box
              position="absolute"
              bottom="-10px"
              left="0"
              width="150px"
              height="4px"
              bg="#163456"
              borderRadius="full"
            />
          </Box>

        <Email />
        <PasswordInput />
        <EnterButton />
        </Box>
      </Center>
    </Box>
  );
}
