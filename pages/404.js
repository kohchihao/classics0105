import { Text, Stack, Button, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Stack justify="center" align="center" flexDir="column" pt="50px" gap={4}>
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
      <Button
        variant="plain"
        bg="teal.500"
        color="white"
        _hover={{ bg: 'teal.600' }}
        _active={{ bg: 'teal.700' }}
        asChild
      >
        <Link href="/">Return to home page</Link>
      </Button>
    </Stack>
  );
};

export default Custom404;
