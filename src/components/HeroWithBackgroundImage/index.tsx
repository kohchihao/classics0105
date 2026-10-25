import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import { SiWhatsapp } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import {
  handleWhatsApp,
  getWhatsAppMessageTemplate,
  getMailTemplate,
} from '@utils';
import Image from 'next/image';
import backgroundImage from '../../../public/images/background.jpg';

export default function WithBackgroundImage() {
  return (
    <Flex w={'full'} h={'100vh'}>
      <Box position="absolute" height="100vh" width="100vw" overflow="hidden">
        <Image
          src={backgroundImage}
          alt="background image"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={50}
          placeholder="blur"
        />
      </Box>

      <VStack
        zIndex={1}
        w={'full'}
        justify={'center'}
        px={{ base: 4, md: 8 }}
        bgGradient="to-r"
        gradientFrom="blackAlpha.600"
        gradientTo="transparent"
      >
        <Stack maxW={'2xl'} align={'flex-start'} gap={6}>
          <Text
            as="h1"
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: '3xl', md: '4xl' }}
          >
            We provide disposal services from residential units to commercial
            projects.
          </Text>

          <Stack gap={2} align={'flex-start'}>
            <Text
              color={'white'}
              fontWeight={400}
              fontSize={{ base: 'xl', md: '2xl' }}
            >
              Contact us for more information!
            </Text>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              gap={4}
            >
              <Button
                variant="plain"
                fontSize={'sm'}
                fontWeight={600}
                lineHeight="1.2"
                color={'white'}
                bg={'#25D366'}
                _hover={{
                  bg: '#25D368',
                }}
                _active={{
                  bg: '#25D368',
                }}
                rounded={'full'}
                onClick={() =>
                  handleWhatsApp({
                    hp: '91841433',
                    msg: getWhatsAppMessageTemplate(),
                  })
                }
              >
                <SiWhatsapp />
                WhatsApp
              </Button>

              <Button
                variant="plain"
                asChild
                fontSize={'sm'}
                fontWeight={600}
                lineHeight="1.2"
                color={'white'}
                bg="blue.500"
                _hover={{ bg: 'blue.600' }}
                _active={{ bg: 'blue.700' }}
                rounded={'full'}
              >
                <a href={getMailTemplate()}>
                  <HiOutlineMail />
                  Email
                </a>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
