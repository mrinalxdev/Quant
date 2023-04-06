import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant='oauth' mb={3}>
        <Image src="/images/google.png" height="20px" mr={4} />
        Continue With Google
      </Button>
      <Button variant='oauth'>Some Other Provider</Button>
    </Flex>
  );
};

export default OAuthButtons;
