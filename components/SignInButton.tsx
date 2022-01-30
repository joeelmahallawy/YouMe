import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import themes from "../utils/themes";
import { useGlobalUser } from "../lib/globalStates";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import globalUser from "../lib/recoi";

const SignInButton = () => {
  //   const [user, setUser] = useGlobalUser();
  const [user, setUser] = useRecoilState(globalUser);

  return user ? (
    <Button
      fontSize={themes.buttons.fonts}
      p={themes.buttons.paddings}
      colorScheme="twitter"
      onClick={async () => await supabase.auth.signOut()}
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
