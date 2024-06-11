import { Container, Box, Heading, Text, VStack, Flex, Image, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <Flex>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} py={8} align="start">
        <Box>
          <Image src="/images/financial-times-banner.jpg" alt="Financial Times Banner" />
          <Heading as="h2" size="xl" mt={4}>
            Breaking News: Market Hits Record High
          </Heading>
          <Text mt={2}>The stock market reached an all-time high today as investors reacted positively to the latest economic data...</Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg">
            Latest Articles
          </Heading>
          <VStack spacing={4} align="start" mt={4}>
            <Box>
              <Heading as="h3" size="md">
                Article 1
              </Heading>
              <Text>Summary of the first article...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Article 2
              </Heading>
              <Text>Summary of the second article...</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Article 3
              </Heading>
              <Text>Summary of the third article...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200">
        <Text>© 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;