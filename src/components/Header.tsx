import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="purple.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        position="relative"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          bordercolor="gray.700"
        >
          <Icon as={RiNotificationLine} size="20" />
          <Icon as={RiUserAddLine} size="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Samuel Lima</Text>
            <Text color="gray.300" fontSize="small">
              lima300799@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Samuel Lima"
            src="https://github.com/samuellima99.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}