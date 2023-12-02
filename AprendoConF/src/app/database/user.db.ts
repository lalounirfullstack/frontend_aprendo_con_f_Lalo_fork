import {User} from "../interfaces/user.interface";

export const USERS: User[] = [
  {
      id: 1,
      role: 'professor',
      registered: true,
      username: 'Fernanda',
      password: '1234',
      email: 'Fernanda@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Fernanda Montero',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Matemáticas', 'Física', 'Química'],
      location: {
        name: 'Malaga',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG'
      },
      price: '$30.00 x hr',
      rating: 5,
      phone: '+34 123456789',
      description: '5 años de experiencia enseñando matemáticas, física y química.'
    },
    {
      id:2,
      role: 'professor',
      registered: true,
      username: 'Yogendra',
      password: '12345',
      email: 'Yogendra@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Yogendra Singh',
      imageUrl:
        'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Historia', 'Antropología', 'Artes'],
      location: {
        name: 'Madrid',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG'
      },
      price: '$35.00 x hr',
      rating: 3,
      phone: '+34 123456789',
      description: 'Varios años de experiencia enseñando historia, antropología y artes.'
    },
    {
      id:3,
      role: 'professor',
      registered: true,
      username: 'Cristina',
      password: '12345',
      email: 'cristina@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Cristina Wocintent',
      imageUrl:
        'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Fitness', 'Yoga', 'Pilates', 'Nutrición'],
      location: {
        name: 'Valencia',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG',

      },
      price: '$25.00 x hr',
      rating: 2,
      phone: '+34 123456789',
      description: 'Certficación en fitness, yoga, pilates y nutrición.'
    },
     {
      id:4,
      role: 'professor',
      registered: false,
      username: 'Oscar',
      password: '12345',
      email: 'oscar@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Oscar Manuel López',
      imageUrl:
        'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Java', 'Angular', 'React', 'NodeJS'],
      location: {
        name: 'Barcelona',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG'
      },
      price: '$55.00 x hr',
      rating: 5,
      phone: '+34 123456789',
      description: '10 años de experiencia en programación, certificado en Java, Angular, React y NodeJS.'
    },
    {
      id:5,
      role: 'professor',
      registered: true,
      username: 'Kristel',
      password: '12345',
      email: 'Kistel@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Kistrel Yo',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Piano', 'Ukelele', 'Guitar', 'Flauta', 'Violin'],
      location: {
        name: 'Mallorca',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG'
      },
      price: '$65.00 x hr',
      rating: 3,
      phone: '+34 123456789',
      description: 'Conocimiento musical avanzando a nivel conservatorio'
    },
    {
      id:6,
      role: 'professor',
      registered: true,
      username: 'Ricardo',
      password: '12345',
      email: 'Ricardo@gmail.com',
      postalcode: '12345',
      country: 'España',
      name: 'Ricardo Alegria',
      imageUrl:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      knowledgeAreas: ['Fotografía', 'Diseño', 'Photoshop', 'Ilustrator'],
      location: {
        name: 'Nerja',
        country: 'España',
        pinImage: './assets/images/Pin_Location.JPG'
      },
      price: '$65.00 x hr',
      rating: 5,
      phone: '+34 123456789',
      description: 'Muy buen profesor, muy recomendable'
    }
];
