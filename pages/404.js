import { Text, Stack, Button, Box, Link } from '@chakra-ui/react';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <Stack justify="center" align="center" flexDir="column" mt="50" spacing={4}>
      <Box>
        <Image
          src="/images/404.svg"
          alt="Error 404. Page not found."
          width={200}
          height={200}
        />
      </Box>

      <Text fontWeight={500}>Oh no!</Text>
      <Text>This page could not be found</Text>
      <Button colorScheme="teal" as={Link} href="/">Return to home page</Button>
    </Stack>
  );
};

export default Custom404;
