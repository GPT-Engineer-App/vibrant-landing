import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRocket, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4} bg={bgColor} color={textColor}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="lg">
          MyCompany
        </Heading>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </Box>

      <VStack spacing={8} textAlign="center">
        <Heading as="h2" size="2xl">
          Welcome to MyCompany
        </Heading>
        <Text fontSize="xl">We provide the best solutions for your business needs.</Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>

      <Box mt={16} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvbHV0aW9uc3xlbnwwfHx8fDE3MTYzMTUwMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Solutions" borderRadius="md" />
      </Box>

      <Box mt={16} textAlign="center">
        <Heading as="h3" size="lg" mb={4}>
          Follow Us
        </Heading>
        <HStack spacing={4} justifyContent="center">
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Box>

      <Box mt={16} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
