import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import themes from "../utils/themes";
import { useGlobalUser } from "../lib/globalStates";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import globalUser from "../lib/recoil";
import { useRouter } from "next/router";

const SignInButton = () => {
  const [user, setUser] = useRecoilState(globalUser);
  const router = useRouter();
  return user ? (
    <Button
      fontSize={themes.buttons.fonts}
      p={themes.buttons.paddings}
      colorScheme="twitter"
      onClick={async () => {
        const logOut = await supabase.auth.signOut();
        router.push("/");
      }}
    >
      Log out
    </Button>
  ) : (
    <Button
      fontSize={themes.buttons.fonts}
      p={themes.buttons.paddings}
      colorScheme="twitter"
      onClick={async () =>
        await supabase.auth.signIn({
          provider: "google",
        })
      }
    >
      Log in
    </Button>
  );
};
export default SignInButton;
