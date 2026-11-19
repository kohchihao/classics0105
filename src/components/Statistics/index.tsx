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
      <chakra.h2
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        How is our company doing?
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'We cleared over'}
          stat={' 300 schools & offices 🏫'}
        />
        <StatsCard title={'All'} stat={'over Singapore 🇸🇬'} />
        <StatsCard title={'In'} stat={'the past 5 years 🕔'} />
      </SimpleGrid>

      <SimpleGrid mt={10} columns={{ base: 2, md: 4, lg: 6 }} gap={10}>
        <OrganizationImage
          src={damaipri}
          alt="Damai Primary School logo, a Classics0105 disposal client in Singapore"
        />
        <OrganizationImage
          src={jurongwestsec}
          alt="Jurong West Secondary School logo, a Classics0105 disposal client in Singapore"
        />
        <OrganizationImage
          src={outramsec}
          alt="Outram Secondary School logo, a Classics0105 disposal client in Singapore"
        />
        <OrganizationImage
          src={punggolsec}
          alt="Punggol Secondary School logo, a Classics0105 disposal client in Singapore"
        />
        <OrganizationImage
          src={anchorgreenpri}
          alt="Anchor Green Primary School logo, a Classics0105 disposal client in Singapore"
        />
        <OrganizationImage
          src={chijpri}
          alt="CHIJ Our Lady of Good Counsel logo, a Classics0105 disposal client in Singapore"
        />
      </SimpleGrid>
      <Text mt={5} textAlign="center" fontSize={'xs'} color={'gray.600'}>
        and many more :)
      </Text>
    </Box>
  );
}
