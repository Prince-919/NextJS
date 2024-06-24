import Link from "next/link";
import Header from "@/components/header";

const Home = () => {
  return (
    <main>
      <div>Home</div>
      <Header />
      <Link href={"/about"}>About Us</Link>
    </main>
  );
};

export default Home;
