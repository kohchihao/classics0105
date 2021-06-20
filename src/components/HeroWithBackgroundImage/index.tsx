import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { SiWhatsapp } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import {
  handleWhatsApp,
  getWhatsAppMessageTemplate,
  getMailTemplate,
} from '@utils';
import { onEmailButtonClicked } from '@utils/tracking';
import Image from 'next/image';
import backgroundImage from '../../../public/images/background.jpg';

export default function WithBackgroundImage() {
  return (
    <Flex w={'full'} h={'100vh'}>
      <Box position="absolute" height="100vh" width="100vw" overflow="hidden">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={50}
          alt="background image"
          placeholder="blur"
        />
      </Box>

      <VStack
        zIndex={1}
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            as="h1"
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            We provide disposal services from residential units to commercial
            projects.
          </Text>

          <Stack spacing={2} align={'flex-start'}>
            <Text
              color={'white'}
              fontWeight={400}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
            >
              Contact us for more information!
            </Text>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={4}
            >
              <Button
                leftIcon={<SiWhatsapp />}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#25D366'}
                href={'#'}
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
                    scenario: 'hero',
                  })
                }
              >
                WhatsApp
              </Button>

              <Button
                as={'a'}
                leftIcon={<HiOutlineMail />}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                colorScheme="blue"
                href={getMailTemplate()}
                rounded={'full'}
                onClick={() => {
                  onEmailButtonClicked();
                }}
              >
                Email
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
