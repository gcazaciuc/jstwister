"use client";
import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  Container,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// Define the navigation links
const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Plans', href: '#plans' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '/blog' }, // Assuming this is a separate page
];

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  // Determine if the current breakpoint is desktop or mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="nav"
      pos="fixed"
      bottom={isMobile ? 'initial' : '5px'}
      top={isMobile ? '0' : 'initial'}
      left="0"
      right="0"
      zIndex="2"
      bg="black"
      color="white"
      borderRadius={isMobile ? '0' : 'full'}
      borderColor={'white'}
      borderWidth={isMobile ? '0' : '1px'}
      mx="auto"
      maxW="640px"
      width="full"
    >
      <Container maxW="container.xl" p={2}>
        <Flex
          h="50px"
          alignItems="center"
          justifyContent="center"
          wrap="wrap"
        >
          {isMobile ? (
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              color="white"
              onClick={onToggle}
              position="absolute"
              top="1rem"
              right="1rem"
            />
          ) : null}
          <Stack
            direction={isMobile ? 'column' : 'row'}
            display={isOpen || !isMobile ? 'flex' : 'none'}
            width={isMobile ? 'full' : 'auto'}
            alignItems="center"
            justifyContent={'center'}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={4}
            rounded="md"
          >
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} p={2} borderRadius="md" _hover={{ bg: 'whiteAlpha.300' }}>
                {link.label}
              </Link>
            ))}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
