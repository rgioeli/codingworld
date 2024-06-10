import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";

async function getCourse() {
  return {
    id: "qwem3km3km33k3",
    src: "https://ztmigxzhq3rp5ous.public.blob.vercel-storage.com/bfvideo.mp4",
    title: "Variables",
    description: "Learn variables the easy way.",
  };
}

const CoursesByUser = async ({ params }: { params: { user: string[] } }) => {
  params.user.map((x) => console.log(x));
  const video = await getCourse();
  const user = (await getServerSession(authOptions)) as Session;
  return (
    <div>
      <h1>Unleashing Your Curiosity</h1>
      <h1>{user?.user?.email}</h1>
      <div>
        <h2>{video.title}</h2>
        <video height={400} width={400} controls>
          <source src={video.src} />
        </video>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default CoursesByUser;
