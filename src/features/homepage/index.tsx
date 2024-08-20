import AboutPage from "features/aboutpage";
import ArtistPage from "features/artistspage";
import EventPage from "features/eventpage";
import Fanspage from "features/fanspage";
import PlayListPage from "features/playlistspage";
import TalentPage from "features/talentpage";
import UpdatesPage from "features/updatespage";
import AdvertBox from "shared/components/advertbox";
import Footer from "shared/components/footer";
import HeroSection from "shared/components/herosection";

function HomePage() {
  return (
    <div>
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
    </div>
  );
}

export default HomePage;
