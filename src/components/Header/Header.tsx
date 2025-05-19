import {
  Box,
  Center,
  HStack,
  Text
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box
      as="header"
      w="100%"
      py="3"
      px="4"
      backgroundImage="url('/header_image.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      boxShadow="md"
    >
      <Center>
        <HStack gap={4}>
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="extrabold"
            color="#ffffff"
            fontFamily="heading"
            textShadow="4px 4px #1E3A5F"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)", color: "#153e75" }}
          >
            DIO BANK
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};
