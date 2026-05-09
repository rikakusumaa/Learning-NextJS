import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import More from "@/components/More";   

export default function Home() {
  return (
    <div className="pageWrapper">
      <Hero></Hero>
      <Menu></Menu>
      <More></More>
    </div>
  );
}
