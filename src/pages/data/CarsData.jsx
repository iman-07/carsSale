import k5 from '/src/assets/car-marka-images/k5.webp';
import kiaK5 from '/src/assets/CarDetails/kia k5.png'
import kiaS from '/src/assets/CarDetails/kiaK5 S.jpg'

import mazda from '/src/assets/car-marka-images/mazda.avif';
import mazda6 from '/src/assets/CarDetails/mazda 6.jpg'
import mazdaS from '/src/assets/CarDetails/masdaS.jpg'

import camry from '/src/assets/car-marka-images/camry.webp';
import camryS from '/src/assets/CarDetails/camryS.jpeg'
import camryT from '/src/assets/CarDetails/camryT.webp'

import rx from '/src/assets/car-marka-images/rx.jpg';
import lexusRX from '/src/assets/CarDetails/lexusRX.webp'
import rxS from '/src/assets/CarDetails/rxS.jpg'

import m5 from '/src/assets/car-marka-images/m5.webp';
import m5S from '/src/assets/CarDetails/m5S.jpg'
import m5R from '/src/assets/CarDetails/m5 сзади.webp'

import sonata from '/src/assets/car-marka-images/sonata.jpg';
import sonataR from '/src/assets/CarDetails/sonataR.jpg'
import sonataS from '/src/assets/CarDetails/sonataS.jpg'

import genesis from '/src/assets/car-marka-images/genesis g80.webp';
import genesisR from '/src/assets/CarDetails/genesisR.jpg'
import genesisS from '/src/assets/CarDetails/genesisS.jpg'

import rs6 from '/src/assets/car-marka-images/rs6.webp';
import rs6R from '/src/assets/CarDetails/rs6R.jpg'
import rs6S from '/src/assets/CarDetails/rs6S.jpeg'

import passat from '/src/assets/car-marka-images/passat.jpg';
import passatR from '/src/assets/CarDetails/passatR.jpg'
import passatS from '/src/assets/CarDetails/passatS.jpg'

import skoda from '/src/assets/car-marka-images/skoda.webp';
import skodaR from '/src/assets/CarDetails/skodaR.jpg'
import skodaS from '/src/assets/CarDetails/skodaS.jpg'

import e63 from '/src/assets/car-marka-images/e63.jpg';
import e63S from '/src/assets/CarDetails/e63S.jpg'
import e63R from '/src/assets/CarDetails/e63R.jpg'

import volvo from '/src/assets/car-marka-images/volvo.jpg';
import volvoR from '/src/assets/CarDetails/volvoR.webp'
import volvoS from '/src/assets/CarDetails/volvoS.avif'

import tesla from '/src/assets/car-marka-images/tesla model 5.jpeg';
import teslaS from '/src/assets/CarDetails/tesla3S.jpg'
import teslaR from '/src/assets/CarDetails/tesla сзади.webp'

import porsh from '/src/assets/car-marka-images/porsh.avif';
import porshS from '/src/assets/CarDetails/porshS.jpg'
import porshR from '/src/assets/CarDetails/porshR.jpg'

import x5 from '/src/assets/car-marka-images/x5.jpg';
import x5S from '/src/assets/CarDetails/x5S.webp'
import x5R from '/src/assets/CarDetails/x5R.jpeg'

import q7 from '/src/assets/car-marka-images/q7.webp';
import q7R from '/src/assets/CarDetails/q7R.webp'
import q7S from '/src/assets/CarDetails/q7S.webp'

import ford from '/src/assets/CarDetails/ford.jpg'
import fordS from '/src/assets/CarDetails/fordS.jpg'
import fordR from '/src/assets/CarDetails/fordR.jpg'

import camaro from '/src/assets/car-marka-images/camaro.jpg'

export const carsData = [
  {
    id: 1,
    name: 'Kia K5',
    price: '$23,529',
    description: {
      Руль: 'слева',
      Топливо: 'бензин',
      Привод: 'передний',
      Тип: 'седан',
      Особенности: 'экономичный, современный дизайн — отлично подходит для города'
    },
    image: [k5, kiaK5, kiaS]
  },  
  {
    id: 2,
    name: 'Mazda 6',
    price: '$27,058',
    description: 'Mazda 6 - Левый руль, бензиновый двигатель, передний привод. Стильный и мощный седан с отличной динамикой и комфортом на дороге.',
    image: [mazda, mazda6, mazdaS]
  },
  {
    id: 3,
    name: 'Toyota Camry',
    price: '$28,235',
    description: 'Toyota Camry - Левый руль, бензиновый двигатель, передний привод. Надежный седан с хорошими показателями экономии топлива и долговечности.',
    image: [camry, camryS, camryT]
  },
  {
    id: 4,
    name: 'Lexus RX',
    price: '$49,411',
    description: 'Lexus RX - Левый руль, бензиновый двигатель, полный привод. Роскошный кроссовер с высококлассной отделкой и передовыми технологиями.',
    image: [rx, lexusRX, rxS]
  },
  {
    id: 5,
    name: 'BMW M5',
    price: '$88,235',
    description: 'BMW M5 - Левый руль, бензиновый двигатель, полный привод. Спортивный седан с мощностью 625 л.с., идеально подходит для любителей скорости и динамичной езды.',
    image: [m5, m5S, m5R]
  },
  {
    id: 6,
    name: 'Hyundai Sonata',
    price: '$24,706',
    description: 'Hyundai Sonata - Левый руль, бензиновый двигатель, передний привод. Экономичный и практичный седан для городского использования.',
    image: [sonata, sonataR, sonataS]
  },
  {
    id: 7,
    name: 'Genesis G80',
    price: '$69,412',
    description: 'Genesis G80 - Левый руль, бензиновый двигатель, задний привод. Роскошный седан с первоклассной отделкой и современными технологиями.',
    image: [genesis, genesisR, genesisS]
  },
  {
    id: 8,
    name: 'Audi RS6',
    price: '$96,471',
    description: 'Audi RS6 - Левый руль, бензиновый двигатель, полный привод. Универсал с высокой производительностью и мощностью 591 л.с.',
    image: [rs6, rs6R, rs6S]
  },
  {
    id: 9,
    name: 'Volkswagen Passat',
    price: '$32,941',
    description: 'Volkswagen Passat - Левый руль, бензиновый и дизельный двигатели, передний привод. Универсальный седан с хорошей экономией топлива и простором для пассажиров.',
    image: [passat, passatR, passatS]
  },
  {
    id: 10,
    name: 'Skoda Superb',
    price: '$35,294',
    description: 'Skoda Superb - Левый руль, бензиновый и дизельный двигатели, передний и полный привод. Комфортабельный и экономичный седан с просторным салоном.',
    image: [skoda, skodaR, skodaS]
  },
  {
    id: 11,
    name: 'BMW E63',
    price: '$105,882',
    description: 'BMW E63 - Левый руль, бензиновый двигатель, задний привод. Спортивное купе с элегантным дизайном и отличной динамикой на дороге.',
    image: [e63, e63R, e63S]
  },
  {
    id: 12,
    name: 'Volvo S90',
    price: '$52,941',
    description: 'Volvo S90 - Левый руль, бензиновый и дизельный двигатели, передний привод. Роскошный и безопасный седан с современными функциями безопасности.',
    image: [volvo, volvoR, volvoS]
  },
  {
    id: 13,
    name: 'Tesla Model 3',
    price: '$64,706',
    description: 'Tesla Model 3 - Левый руль, электрический двигатель, полный привод. Электрический седан с потрясающей производительностью и дальностью хода.',
    image: [tesla, teslaR, teslaS]
  },
  {
    id: 14,
    name: 'Porsche Panamera',
    price: '$129,411',
    description: 'Porsche Panamera - Левый руль, бензиновый и гибридный двигатели, полный привод. Спортивный и роскошный седан с мощными двигателями.',
    image: [porsh, porshR, porshS]
  },
  {
    id: 15,
    name: 'BMW X5',
    price: '$76,471',
    description: 'BMW X5 - Левый руль, бензиновый и дизельный двигатели, полный привод. Роскошный кроссовер с отличной динамикой и просторным салоном.',
    image: [x5, x5R, x5S]
  },
  {
    id: 16,
    name: 'Audi Q7',
    price: '$91,471',
    description: 'Audi Q7 - Левый руль, бензиновый и дизельный двигатели, полный привод. Большой и комфортный внедорожник с высококачественной отделкой.',
    image: [q7, q7R, q7S]
  },
  {
    id: 17,
    name: 'Ford Mustang',
    price: '$35,294',
    description: 'Ford Mustang - Левый руль, бензиновый двигатель, задний привод. Культовый спортивный автомобиль с мощными характеристиками и агрессивным дизайном.',
    image: [ford, fordR, fordS]
  },
  {
    id: 18,
    name: 'Chevrolet Camaro',
    price: '$41,176',
    description: 'Chevrolet Camaro - Левый руль, бензиновый двигатель, задний привод. Мощный спортивный автомобиль с агрессивным внешним видом и отличной динамикой.',
    image: [camaro]
  },
  {
    id: 19,
    name: 'Mercedes-Benz E-Class',
    price: '$58,824',
    description: 'Mercedes-Benz E-Class - Левый руль, бензиновый и дизельный двигатели, полный привод. Роскошный седан с высочайшими показателями безопасности и комфорта.',
    image: ['/src/assets/car-marka-images/e-class.jpeg']
  },
  {
    id: 20,
    name: 'Audi A8',
    price: '$70,588',
    description: 'Audi A8 - Левый руль, бензиновый двигатель, полный привод. Премиум седан с передовыми технологиями и комфортом на уровне люксовых автомобилей.',
    image: ['/src/assets/car-marka-images/a8.jpg']
  },
  {
    id: 21,
    name: 'Nissan Altima',
    price: '$23,529',
    description: 'Nissan Altima - Левый руль, бензиновый двигатель, передний привод. Экономичный и надежный седан для повседневной городской эксплуатации.',
    image: ['/src/assets/car-marka-images/altima.jpeg']
  },
  {
    id: 22,
    name: 'Honda Civic',
    price: '$17,647',
    description: 'Honda Civic - Левый руль, бензиновый двигатель, передний привод. Компактный и экономичный седан с высоким уровнем безопасности и комфорта.',
    image: ['/src/assets/car-marka-images/civic.jpg']
  },
  {
    id: 23,
    name: 'BMW X6',
    price: '$88,235',
    description: 'BMW X6 - Левый руль, бензиновый и дизельный двигатели, полный привод. Роскошный кроссовер с отличной динамикой и премиум-уровнем комфорта.',
    image: ['/src/assets/car-marka-images/x6.jpg']
  },
  {
    id: 24,
    name: 'Land Rover Range Rover',
    price: '$105,882',
    description: 'Land Rover Range Rover - Левый руль, бензиновый и дизельный двигатели, полный привод. Роскошный внедорожник с отличной проходимостью и комфортом.',
    image: ['/src/assets/car-marka-images/range-rover.jpg']
  }
];
