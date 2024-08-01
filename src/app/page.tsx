import HomePage from "@/components/HomePage/HomePage";
import HotelRooms from "@/components/HotelRooms/HotelRooms";
import Innopolis from "@/components/InnopolisPage/InnopolisPage";
import SkiPage from "@/components/SkiPage/SkiPage";
import Services from "@/components/Services/Services";
import InfoHotel from "@/components/InfoHotel/InfoHotel";
import Net from "@/components/Net/Net";

export default function Home() {
  return (
    <main>
      <HomePage/>
      <HotelRooms/>
      <Innopolis/>
      <SkiPage/>
      <Net/>
      <Services/>
      <InfoHotel/>
    </main>
  );
}
