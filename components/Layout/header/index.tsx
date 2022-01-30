import {
  Button,
  Center,
  Image,
  Flex,
  Heading,
  Box,
  Input,
} from "@chakra-ui/react";
import SignInButton from "../../SignInButton";
import icon from "../../../attachments/apple-touch-icon.png";
import { useEffect } from "react";

const Header = () => {
  return (
    <>
      {/* <Center bg="gray">YouMe</Center> */}
      <Center
        h="10vh"
        p={12}
        bg="LightSlateGray"
        justifyContent="space-between"
      >
        <Image h="60px" w="60px" src={icon.src} />
        <SignInButton />
      </Center>
    </>
  );
};
export default Header;
