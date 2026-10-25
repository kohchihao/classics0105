import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  Text,
} from '@chakra-ui/react';
import damaipri from '../../../public/images/damai-primary-school.jpg';
import jurongwestsec from '../../../public/images/jurong-west-secondary-school.png';
import outramsec from '../../../public/images/outram-secondary-school.jpg';
import punggolsec from '../../../public/images/punggol-secondary-school.png';
import anchorgreenpri from '../../../public/images/anchor-green-primary-school.jpg';
import chijpri from '../../../public/images/chij-our-lady-of-good-counsel.png';
import OrganizationImage from './components/OrganizationImage';

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat.Root
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor="gray.800"
      rounded={'lg'}
      gap="0"
    >
      <Stat.Label fontWeight={'medium'} fontSize="sm" lineHeight="1.5" color="inherit">
        {title}
      </Stat.Label>
      <Stat.ValueText fontSize={'2xl'} fontWeight={'medium'} lineHeight="1.5" letterSpacing="normal">
        {stat}
      </Stat.ValueText>
    </Stat.Root>
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
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'We cleared over'}
          stat={' 300 schools & offices 🏫'}
        />
        <StatsCard title={'All'} stat={'over Singapore 🇸🇬'} />
        <StatsCard title={'In'} stat={'the past 5 years 🕔'} />
      </SimpleGrid>

      <SimpleGrid mt={10} columns={{ base: 2, md: 4, lg: 6 }} gap={10}>
        <OrganizationImage src={damaipri} />
        <OrganizationImage src={jurongwestsec} />
        <OrganizationImage src={outramsec} />
        <OrganizationImage src={punggolsec} />
        <OrganizationImage src={anchorgreenpri} />
        <OrganizationImage src={chijpri} />
      </SimpleGrid>
      <Text mt={5} textAlign="center" fontSize={'xs'} color={'gray.600'}>
        and many more :)
      </Text>
    </Box>
  );
}
