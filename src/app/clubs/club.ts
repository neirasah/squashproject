export interface IClub {
    
        id: number
        name: string
        address: string
        courtsNo: number
        open: string
        imageUrl: string
        courts: ICourt []
    
    }

    export interface ICourt {
        id: number
        available: string[]
        booked: string[]

    }