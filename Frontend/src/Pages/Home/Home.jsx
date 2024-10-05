import Award from "../../Components/Award/Award";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Menu from "../../Components/Menu/Menu";
import SpecialCard from "../../Components/SpecialCard/SpecialCard";
import TopDish from "../../Components/TopDish/TopDish";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <TopDish/>
      <Menu/>
      <Award/>
      <SpecialCard/>
    </div>
  )
}
