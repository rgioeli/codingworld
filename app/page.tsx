import { Session, getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const user = (await getServerSession(authOptions)) as Session;
  console.log(user);
  return (
    <main className="p-24">
      <h1>CodingWorld</h1>
      <h2>A community for coders</h2>
    </main>
  );
}
