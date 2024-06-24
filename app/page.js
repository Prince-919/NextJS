import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div>Home</div>
      <Link href={"/about"}>About Us</Link>
    </main>
  );
};

export default Home;
