import {
  hotelContent,
  hotelImage, hotelServices,
  innoDescription,
  mainPageImage,
  netEnterprise,
  placeholderText,
  skiContent,
  skiImage
} from '@/types/types';

//Данные для первого экрана карусели
export const CarouselMainImages: mainPageImage[] = [
  {
    src: "/CarouselMainPage/img/restaurant.jpeg",
    alt: "restaurant",
    title: 'Единение с природой',
    mainText: 'Холл отеля',
    additionalText: 'Зона ресторана',
    width: 2500,
    height: 1406,
  },
  {
    src: "/CarouselMainPage/img/hall.jpg",
    alt: "hall",
    title: 'Приятная атмосфера',
    mainText: 'Холл отеля',
    additionalText: 'Коридор',
    width: 2500,
    height: 1406,
  },
  {
    src: "/CarouselMainPage/img/reception.jpg",
    alt: "reception",
    title: 'Комфорт и удобство',
    mainText: 'Холл отеля',
    additionalText: 'Ресепшн',
    width: 2500,
    height: 1406,
  },
];

//Данные для экрана Иннополис
export const innoDescriptions: innoDescription[] = [
  {
    title: 'Функциональная архитектура',
    description: 'Генеральный проект Иннополиса разработал планировщик Сингарупа Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.'
  },
  {
    title: 'Университет Иннополис',
    description: '100% выпускников трудоустраиваются в ведущие IT-компании или открывают свои стартапы.'
  },
  {
    title: 'Будущее на старте',
    description: 'В Иннополисе начали работать Центр обработки данных «Атомдата-Иннополис», технопарк в сфере высоких технологий «ИнноПарк».'
  },
];
export const innoPlaceholder: placeholderText =
    {
      mainText: 'Иннополис',
      additionalText: 'Зона ресторана'
    };

//Данные для экрана Горнолыжка
export const skiImages: skiImage[] = [
  {
    src: '/SkiPage/Dorms.jpeg',
    width: 1100,
    height: 746
  },
  {
    src: '/SkiPage/ski_lift.jpeg',
    width: 1100,
    height: 835
  },
  {
    src: '/SkiPage/ski.jpeg',
    width: 1100,
    height: 755
  }
]

export const skiContents: skiContent[] = [
  {
    description: 'Генеральный проект Иннополиса разработал планирующий Сингапур Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
  },
  {
    description: 'Генеральный проект Иннополиса разработал планирующий Сингапур Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
  },
];

//Данные для экрана Наша сеть
export const enterprises: netEnterprise[] = [
  {
    id: 1,
    type: 'Барбершоп',
    name: 'SIXTY барбершоп',
    description: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
  {
    id: 2,
    type: 'Массаж',
    name: 'SIXTY Массаж',
    description: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
  {
    id: 3,
    type: 'Йога',
    name: 'SIXTY Йога',
    description: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
  {
    id: 4,
    type: 'Ресторан',
    name: 'SIXTY Ресторан',
    description: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
];

//Данные для экрана Услуги
export const services: hotelServices[] = [
  {
    title: "Экскурсии по Иннополису",
    description: "Знакомство с Особой экономической зоной, посещение Университета Иннополис и его кампуса, прогулка по необычным локациям.",
    imageUrl: "/Services/inno.jpeg",
    width: 660,
    height: 405,
  },
  {
    title: "Остров Свияжск",
    description: "Город, имеющий уникальную историческую судьбу. Знакомство с ним — возможность многогранного познания прошлого нашей страны.",
    imageUrl: "/Services/Sviyazhsk.jpeg",
    width: 800,
    height: 600,
  },
  {
    title: "Трансфер до горнолыжки",
    description: "5 трасс разной сложности. Самый протяжённый спуск — 1.1 км. Перепад высот 165 м. 3 кресельных подъемника + 1 бугельный.",
    imageUrl: "/Services/skiLift.jpeg",
    width: 900,
    height: 600,
  }
];

//Данные для экрана Контакты
export const contactsContent: hotelContent =
    {
      heading: 'Как нас найти?',
      description:
          {
            title: 'Генеральный проект Иннополиса разработал планировщик Сингапура Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
            address: 'г. Иннополис, ул. Университетская, д. 1',
            phone: '+7 (495) 234-12-06',
            email: 'ionhotel@ioncompany.ru',
          },

    }

export const contactsImage: hotelImage = {
  img: '/InfoHotel/ION.jpeg',
  width: 1280,
  height: 960,
}

export const contactsPlaceholder: placeholderText = {
  mainText: 'ION',
  additionalText: 'Отель',
}
