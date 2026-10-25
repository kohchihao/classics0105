import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Collapsible,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { SiWhatsapp } from 'react-icons/si';
import { handleWhatsApp, getWhatsAppMessageTemplate } from '@utils';
import Image from 'next/image';

export default function WithSubnavigation() {
  const { open } = useDisclosure();

  return (
    <Box position="fixed" top="0" width="100%" zIndex="999">
      <Flex
        bg={'white'}
        color={'gray.600'}
        minH={{ base: '50px', md: '60px'}}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        />
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            src="/images/icon_3.svg"
            width={150}
            height={30}
            alt="Company Icon"
            unoptimized
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          gap={6}
        >
          <Button
            variant="plain"
            display={{ base: 'none', md: 'inline-flex' }}
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
        </Stack>
      </Flex>

      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <MobileNav />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={'gray.600'}
            _hover={{
              textDecoration: 'none',
              color: 'gray.800',
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack gap={4} onClick={children && onToggle}>
      <Link
        py={2}
        href={href ?? '#'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={'gray.600'}>
          {label}
        </Text>
      </Link>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [];
