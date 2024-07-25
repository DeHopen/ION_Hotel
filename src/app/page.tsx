import HomePage from "@/components/HomePage/HomePage";
import HotelRooms from "@/components/HotelRooms/HotelRooms";
import InnopolisPage from "@/components/InnopolisPage/InnopolisPage";
import SkiPage from "@/components/SkiPage/SkiPage";
import Services from "@/components/Services/Services";
import InfoHotel from "@/components/InfoHotel/InfoHotel";

export default function Home() {
  return (
    <main>
      <HomePage/>
      <HotelRooms/>
      <InnopolisPage/>
      <SkiPage/>
      <Services/>
      <InfoHotel/>
    </main>
  );
}
