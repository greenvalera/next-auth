"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Navigation = () => {
  const session = useSession();

  return (
    <>
      <p>{session.data?.user?.name}</p>
      {session.data?.user?.image && (<Image
        src={session.data?.user?.image as string}
        alt={"user image"}
        width={50}
        height={50}
      />)}
    </>
  );
};

export default Navigation;