import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import {
  onFacebookClicked,
  onInstagramClicked,
  onPaulineClicked,
  onMohammadClicked,
  onEmailAddressClicked,
} from '@utils/tracking';
import { ExternalLinkIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons'

const SocialButton = ({
  children,
  label,
  href,
  onClick,
}: {
  children: ReactNode;
  label: string;
  href: string;
  onClick: any;
}) => {
  return (
    <chakra.button
      bg={'blackAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
      target={'blank'}
      onClick={onClick}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
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
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                color={'black'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
              >
                Classics0105
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              © 2021 Classics0105. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/classics0105/'}
                onClick={() => onFacebookClicked()}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://instagram.com/classics0105'}
                onClick={() => onInstagramClicked()}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Operating Hotline</ListHeader>
            <Link
              onClick={() => onPaulineClicked()}
              fontSize={useBreakpointValue({ base: 'sm', md: 'xs' })}
              href={'tel:91841433'}
            >
              <PhoneIcon mx="2px" /> Ms. Pauline (9184 1433) 
            </Link>

            <Link
              onClick={() => onMohammadClicked()}
              fontSize={useBreakpointValue({ base: 'sm', md: 'xs' })}
              href={'tel:91231952'}
            >
              <PhoneIcon mx="2px" /> Mr. Mohammad (9123 1952) 
            </Link>

            <ListHeader>Email</ListHeader>
            <Link
              onClick={() => onEmailAddressClicked()}
              fontSize={useBreakpointValue({ base: 'sm', md: 'xs' })}
              href="mail:helloclassics0105@gmail.com"
            >
               <EmailIcon mx="2px" /> helloclassics0105@gmail.com
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Location</ListHeader>
            <Link
              fontSize={useBreakpointValue({ base: 'sm', md: 'xs' })}
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
