import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'


export function Email() {
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)

  const isError = input === ''

  return (
  <FormControl>

    <FormLabel>Email</FormLabel>
    <Input type='email'
      placeholder="Digite o seu e-mail"
      size="md"
      p="3"
      color="#3E3A46"
      borderColor="gray.400"
      borderWidth="1px"
      />
    <Box mb={6}>       
    </Box>
  </FormControl>
  
  )
}