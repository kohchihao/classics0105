import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  src: any;
};
const OrganizationImage = ({ src }: Props) => {
  return (
    <Box
      width={{ base: '120px', lg: '150px' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={src} quality={50} alt="background image" placeholder="blur" />
    </Box>
  );
};

export default OrganizationImage;
