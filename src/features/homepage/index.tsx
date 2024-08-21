import { useAppQuery } from "context/AppContext";
import AboutPage from "features/aboutpage";
import ArtistPage from "features/artistspage";
import EventPage from "features/eventpage";
import Fanspage from "features/fanspage";
import PlayListPage from "features/playlistspage";
import TalentPage from "features/talentpage";
import UpdatesPage from "features/updatespage";
import { useMediaQuery } from "hooks";
import AdvertBox from "shared/components/advertbox";
import Footer from "shared/components/footer";
import HeroSection from "shared/components/herosection";

function HomePage() {
  const { menu } = useAppQuery();
  const mobileScreen = useMediaQuery("(max-width: 640px)");
  return (
    <div className="overflow-x-hidden">
      <AdvertBox />
      <HeroSection />
      <AboutPage />
      <PlayListPage />
      <ArtistPage />
      <TalentPage />
      <EventPage />
      <Fanspage />
      <UpdatesPage />
      <Footer />
      {mobileScreen && menu ? (
        <div className="w-full h-full fixed bg-black/80 inset-0 z-30" />
      ) : null}
    </div>
  );
}

export default HomePage;
