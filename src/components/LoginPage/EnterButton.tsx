import { Button, Text } from "@chakra-ui/react"
import { login } from "../../services/login"



export const EnterButton = () => {
    return (
        <Button
            onClick={login}
            type="submit"
            colorScheme="blue"
            w="100%"
            mt="6"
            py="6"
            borderRadius="8px"
            bg="#1E3A5F"
            color="#FFFFFF"
            _hover={{ bg: '#163456' }}
        >
            <Text fontSize="lg" fontWeight="bold">
            Entrar
            </Text>
        </Button>


    )
}