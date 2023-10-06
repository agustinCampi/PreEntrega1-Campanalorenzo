import CartWidget from "./CartWidget";
import { Flex, Box, Link, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <>
      <Flex backgroundColor="blue.500" p="4">
      <Box p="2">
        <Link color="white" href="/">
          ACL ECOMMERCE
        </Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link color="white" href="/">
          Inicio
        </Link>
      </Box>
      <Box p="2">
        <Link color="white" href="/nosotros">
          Nosotros
        </Link>
      </Box>
      <Box p="2">
        <Link color="white" href="/servicios">
          Servicios
        </Link>
      </Box>
      <Box p="2">
        <Link color="white" href="/contacto">
          Contacto
        </Link>
      </Box>
      <Spacer />
      <CartWidget/>
    </Flex>
    </>
  );
};

export default NavBar;  
