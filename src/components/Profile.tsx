import {getServerSession} from "next-auth";
import {authConfig} from "@/config/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <nav>asdasd</nav>
    </>
  );
}