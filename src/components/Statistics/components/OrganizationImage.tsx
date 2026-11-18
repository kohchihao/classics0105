import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  src: any;
  alt: string;
};
const OrganizationImage = ({ src, alt }: Props) => {
  return (
    <Box
      width={{ base: '120px', lg: '150px' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Matches the box width above (lg = 62em in src/theme.ts). Without
          sizes, next/image serves a 2x copy of the 2550px source at w=3840. */}
      <Image
        src={src}
        quality={50}
        alt={alt}
        placeholder="blur"
        sizes="(min-width: 62em) 150px, 120px"
      />
    </Box>
  );
};

export default OrganizationImage;
