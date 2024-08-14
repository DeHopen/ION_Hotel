'use client'

import HotelRooms from "@/components/HotelRooms/HotelRooms";
import Innopolis from "@/components/InnopolisPage/InnopolisPage";
import SkiPage from "@/components/SkiPage/SkiPage";
import Services from "@/components/Services/Services";
import InfoHotel from "@/components/InfoHotel/InfoHotel";
import {useMediaQuery} from "react-responsive";
import CarouselMainMobile from "@/components/HomePage/Mobile/CarouselMainMobile";
import CarouselMainPage from "@/components/HomePage/CarouselMainPage";
import InfoHotelMobile from "@/components/InfoHotel/Mobile/InfoHotelMobile";
import InnopolisPageMobile from "@/components/InnopolisPage/Mobile/InnopolisPageMobile";
import SkiPageMobile from "@/components/SkiPage/Mobile/SkiPageMobile";
import NetMobile from "@/components/Net/Mobile/NetMobile";
import {
  CarouselMainImages, contactsContent, contactsImage, contactsPlaceholder,
  enterprises,
  innoDescriptions,
  innoPlaceholder, skiContents,
  skiImages, services, rooms
} from "@/data/data";
import Net from "@/components/Net/Net";
import ServicesMobile from "@/components/Services/Mobile/ServicesMobile";
import RoomMobile from "@/components/HotelRooms/Mobile/RoomMobile";


export default function Home() {

  const isMobile = useMediaQuery({maxWidth: 768});

  return (
      <>
        {isMobile ? (
            <main className='flex flex-col gap-16 mb-16'>
              <CarouselMainMobile images={CarouselMainImages}/>
              <RoomMobile room={rooms}/>
              <NetMobile enterprises={enterprises}/>
              <InnopolisPageMobile PlaceholderText={innoPlaceholder} descriptions={innoDescriptions}/>
              <SkiPageMobile content={skiContents} images={skiImages}/>
              <ServicesMobile services={services}/>
              <InfoHotelMobile content={contactsContent} mainImg={contactsImage} placeholder={contactsPlaceholder}/>
            </main>
        ) : (
            <main className='flex flex-col gap-32 mb-28'>
              <CarouselMainPage images={CarouselMainImages}/>
              <HotelRooms rooms={rooms}/>
              <Net enterprises={enterprises}/>
              <Innopolis descriptions={innoDescriptions} PlaceholderText={innoPlaceholder}/>
              <SkiPage content={skiContents} images={skiImages}/>
              <Services services={services}/>
              <InfoHotel placeholder={contactsPlaceholder} mainImg={contactsImage} content={contactsContent}/>
            </main>
        )}
      </>

  );
}
