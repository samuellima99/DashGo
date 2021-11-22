import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Lima</Text>
          <Text color="gray.300" fontSize="small">
            lima300799@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Samuel Lima"
        src="https://github.com/samuellima99.png"
      />
    </Flex>
  );
}
