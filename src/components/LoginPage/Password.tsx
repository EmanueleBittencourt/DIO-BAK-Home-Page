import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';

export function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Digite a sua senha"
          size="md"
          p="3"
          color="#3E3A46"
          borderColor="gray.400"
          borderWidth="1px"
        />
        <InputRightElement width="4.5rem">
          <Button  backgroundColor="grey.500" h="1.75rem"  size="xs" onClick={handleClick}>
            {show ? 'Esconder' : 'Mostrar'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
