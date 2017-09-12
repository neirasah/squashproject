import { Injectable } from '@angular/core'
import { IClub } from '../clubs/club';

@Injectable()
export class ClubService {
  getClubs() {
    return IClub
  }
}

const IClub= [
    
   {
    id: 1,
    name: 'The Club',
    address: 'Squashgatan 10',
    courtsNo: 7,
    open: 'from 10:00 am to 10.00 pm',
    imageUrl: './assets/squash.jpg', 
    courts: [
      { id: 1,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 2,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 3,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 4,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 5,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 6,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      },
      { id: 7,
        available: [10.00, 11.00, 16.00, 17.00],
        booked: [12.00, 13.00, 14.00, 15.00, 18.00, 19.00, 20.00]
      }
     
        ]
  },
   {
    id: 2,
    name: 'Belevue Stadion',
    address: 'Stadionale 3',
    courtsNo: 8,
    open: 'from 10:00 am to 10.00 pm',
    imageUrl: './assets/squash1.jpeg', 
    courts: [
    { id: 1,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 2,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 3,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 4,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 5,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 6,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 7,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    },
    { id: 8,
      available: [10, 11, 16, 17],
      booked: [12, 13, 14, 15, 18, 19, 20]
    }
      ]
    },
   {
    id: 3,
    name: 'Squash Malmo',
    address: 'Carl Gustafs väg 7',
    courtsNo: 6,
    open: 'from 10:00 am to 10.00 pm',
    imageUrl: './assets/squash2.jpeg',
    courts: [
      { id: 1,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 2,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 3,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 4,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 5,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      },
      { id: 6,
        available: [10, 11, 16, 17],
        booked: [12, 13, 14, 15, 18, 19, 20]
      }
    
        ]
      }
    ]