import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { ExternalLinkIcon, PhoneIcon, EmailIcon } from '../icons';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.a
      bg={'blackAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
      target={'blank'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.a>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'700'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg={'gray.50'} color={'gray.700'}>
      <Container maxW={'6xl'} py={10} px="4">
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 1fr 2fr' }}
          gap={8}
        >
          <Stack gap={6}>
            <Box>
              <Text
                color={'black'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: '2xl', md: '3xl' }}
              >
                Classics0105
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              © 2026 Classics0105. All rights reserved
            </Text>
            <Stack direction={'row'} gap={6}>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/classics0105/'}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://instagram.com/classics0105'}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Operating Hotline</ListHeader>
            <Link
              fontSize={{ base: 'sm', md: 'xs' }}
              href={'tel:91841433'}
            >
              <PhoneIcon mx="2px" /> Ms. Pauline (9184 1433) 
            </Link>

            <ListHeader>Email</ListHeader>
            <Link
              fontSize={{ base: 'sm', md: 'xs' }}
              href="mail:helloclassics0105@gmail.com"
            >
               <EmailIcon mx="2px" /> helloclassics0105@gmail.com
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Location</ListHeader>
            <Link
              fontSize={{ base: 'sm', md: 'xs' }}
              href="https://goo.gl/maps/EwX3UQTkTw1eLhnJ6"
            >
              6 Sungei Kadut Ave <ExternalLinkIcon mx="2px" />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
