import {getServerSession} from "next-auth";
import {authConfig} from "@/config/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <p>{session?.user?.name}</p>
      {session?.user?.image && (<Image
        src={session?.user?.image as string}
        alt={"user image"}
        width={50}
        height={50}
      />)}
    </>
  );
}