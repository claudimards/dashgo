import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Claudimar Bezerra</Text>
          <Text color='gray.300' fontSize='small'>claudimards@gmai.com</Text>
        </Box>
      )}

      <Avatar size='md' name='Claudimar Bezerra' src='https://github.com/claudimards.png' />
    </Flex>
  )
}