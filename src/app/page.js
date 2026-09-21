import Header from "@/components/Header";
import VideoIntro from "@/components/VideoIntro";
import Hero from "@/components/Hero";
import BrandManifesto from "@/components/BrandManifesto";
import CategoryJourney from "@/components/CategoryJourney";
import ArtOfTable from "@/components/ArtOfTable";
import FeaturedCollection from "@/components/FeaturedCollection";
import PlateStories from "@/components/PlateStories";
import BowlCollection from "@/components/BowlCollection";
import DongaStory from "@/components/DongaStory";
import TrayGallery from "@/components/TrayGallery";
import DinnerSets from "@/components/DinnerSets";
import Hotelware from "@/components/Hotelware";
import SpoonDetails from "@/components/SpoonDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <VideoIntro />
        
        <BrandManifesto />
        <CategoryJourney />
        <Hero />
        <ArtOfTable />
        <FeaturedCollection />
        <PlateStories />
        <BowlCollection />
        <DongaStory />
        <TrayGallery />
        <DinnerSets />
        <Hotelware />
        <SpoonDetails />
        <WhyChooseUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
