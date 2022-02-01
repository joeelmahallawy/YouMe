import {
  Button,
  Center,
  Heading,
  Text,
  Flex,
  Box,
  Image,
  useForceUpdate,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import themes from "../utils/themes";
import StudyPic from "../attachments/studying-group.jpeg";
import GroupPic from "../attachments/group-meeting.jpeg";
import { useGlobalUser } from "../lib/globalStates";
import { useRecoilState } from "recoil";
import globalUser from "../lib/recoil";
import Link from "next/link";
import { NextPageContext } from "next";

const IndexPage = () => {
  return (
    <>
      <Center
        gap={[7, 10, 12, 14, 16]}
        flexDir="column"
        h="80vh"
        w={["90%", "80%", "70%", "60%", "50%"]}
        m="0 auto"
      >
        <Link href="/api/auth/login">SignIin</Link>
        {/* /api/auth/login */}
        <Heading fontSize={["2rem", "2.5rem", "3rem", "3.5rem", "4rem"]}>
          Welcome to YouMe
        </Heading>
        <Text fontSize={["1rem", "1rem", "1.25rem"]}>
          Connecting people with common interests, goals, and lifestyles. Meet
          friends at your school who you can study and game with. Make
          meaningful connections with coworkers and bond over more than your
          next deadline. Keep your identity private while comunicating with
          people who are just like you who are close to you either at school,
          work, or other clubs through personalizing your page and showing off
          who you are without worrying about the prying eyes of teachers or
          potential employers.
        </Text>
        <Button
          colorScheme="whatsapp"
          fontSize={themes.buttons.fonts}
          p={themes.buttons.fonts}
        >
          Try it out
        </Button>
      </Center>
      <Box bg="lightslategray">
        <Flex w="70%" m="0 auto">
          <Center
            gap={[7, 10, 12, 14, 16]}
            p={10}
            m="0 auto"
            w={["90%", "80%", "70%", "60%", "50%"]}
            flexDir="column"
          >
            <Heading>Find a study group!</Heading>
            <Image src={StudyPic.src} />
          </Center>
          <Center
            gap={[7, 10, 12, 14, 16]}
            p={10}
            m="0 auto"
            w={["90%", "80%", "70%", "60%", "50%"]}
            flexDir="column"
          >
            <Heading>Or a friend group!</Heading>
            <Image src={GroupPic.src} />
          </Center>
        </Flex>
      </Box>
    </>
  );
};
export default IndexPage;
