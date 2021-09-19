import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import damaipri from '../../../public/images/damai-primary-school.jpg';
import jurongwestsec from '../../../public/images/jurong-west-secondary-school.png';
import outramsec from '../../../public/images/outram-secondary-school.jpg';
import punggolsec from '../../../public/images/punggol-secondary-school.png';
import anchorgreenpri from '../../../public/images/anchor-green-primary-school.jpg';
import chijpri from '../../../public/images/chij-our-lady-of-good-counsel.png';

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="1200px"
      mx={'auto'}
      pt={5}
      px={{ base: 5, sm: 12, md: 17 }}
      pb={20}
    >
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        How is our company doing?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'We cleared over'}
          stat={' 300 schools & offices 🏫'}
        />
        <StatsCard title={'All'} stat={'over Singapore 🇸🇬'} />
        <StatsCard title={'In'} stat={'the past 5 years 🕔'} />
      </SimpleGrid>

      <SimpleGrid mt={10} columns={{ base: 2, md: 4, lg: 6 }} spacing={10}>
        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={damaipri}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>

        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={jurongwestsec}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>

        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={outramsec}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>

        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={punggolsec}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>
        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={anchorgreenpri}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>
        <Box
          width="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={chijpri}
            quality={50}
            alt="background image"
            placeholder="blur"
          />
        </Box>
      </SimpleGrid>
      <Text mt={5} textAlign="center" fontSize={'xs'} color={'gray.600'}>
        and many more :)
      </Text>
    </Box>
  );
}
