import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" mb={6} p={3} align="center">
        Welcome to my epic Journey on Earth 🌍
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jeanlouis
          </Heading>
          <p>👽</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
