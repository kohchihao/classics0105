import { ReactElement } from 'react';
import {
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaFileContract } from 'react-icons/fa';
import { GiElectricalResistance, GiHouse } from 'react-icons/gi';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  subtitle?: string;
}

const Feature = ({ title, text, icon, subtitle }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={'gray.800'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>

      <Text fontSize={'xs'}color={'gray.600'}>{subtitle}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Flex
      p={{ base: 10, md: 50, lg: 100 }}
      maxW="1200px"
      margin="auto"
      bg="white"
      direction="column"
    >
      <Text
        color={'black'}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        pb={6}
      >
        Services we provide
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={GiHouse} w={10} h={10} color="black" />}
          title={'F.O.C* Disposal of items that are recyclable'}
          text={
            'F.O.C* Disposal of used furnitures from hotel, schools, offices, gym, dormitory, hospital, and many others'
          }
          subtitle={'* Terms and conditions applies'}
        />
        <Feature
          icon={
            <Icon as={GiElectricalResistance} w={10} h={10} color="black" />
          }
          title={'Disposal of faulty/condemned'}
          text={
            'Disposal of metal, paper, faulty or condemned electrical items'
          }
        />
        <Feature
          icon={<Icon as={FaFileContract} w={10} h={10} color="black" />}
          title={'Term contract'}
          text={'Term contract for disposal of all kinds of items'}
        />
      </SimpleGrid>
    </Flex>
  );
}
