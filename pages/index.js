import HeroWithBackgroundImage from '@components/HeroWithBackgroundImage';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Features from '@components/Features';
import { Box } from '@chakra-ui/layout';

export default function Home() {
  return (
    <Box bg="white">
      <Navbar />
      <HeroWithBackgroundImage />
      <Features />
      <Footer />
    </Box>
  );
}
