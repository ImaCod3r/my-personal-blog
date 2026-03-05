// Components
import MyProfile from "@/src/components/MyProfile";
import PostCard from "@/src/components/PostCard";

export default function Home() {
  return (
    <>
      <header>
        <MyProfile />

        <h1>Welcome to my blog!</h1>

      </header>
      <main className="mt-10">
        <h2 className="text-2xl font-bold">Lastest post</h2>

        <section className="mt-5">
            <PostCard
              title="Como cozinhar catato"
              description="Aprenda!"
              posted_at={210000098}
              cover_image="https://github.com/ImaCod3r.png"
            />
        </section>
      </main>
    </>
  );
}
