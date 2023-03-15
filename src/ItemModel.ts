import leaf from './img/leaf.png'
import bike from './img/bike.png'
import train from './img/train.png'
import city from './img/city.png'
import horse from './img/horse.png'
import plant from './img/plant.png'
export type ItemData = {
    id: number
    name: string
    image: string
    description: string
}

export const items:ItemData[] = [
    {
        id:1,
        name: 'Dewdrop Leaf',
        image: leaf,
        description: 'A leaf'
    },
    {
        id:2,
        name: "Rural Bike",
        image: bike,
        description: 'Boke'
    },
    {
        id:3,
        name: "Train Ride",
        image: train,
        description: 'Chhu Chu'
    },
    {
        id:4,
        name: "Citylines",
        image: city,
        description: 'lights and action'
    },
    {
        id:5,
        name: "Horse",
        image: horse,
        description: 'Bojack'
    },
    {
        id:6,
        name: "Plant",
        image: plant,
        description: 'I am groot'
    },
]

export const hobbyItems:ItemData[] = [
    {
        id:1,
        name: 'Dewdrop Leaf',
        image: leaf,
        description: 'A leaf hobby'
    },
    {
        id:2,
        name: "Rural Bike",
        image: bike,
        description: 'Boke'
    },
    {
        id:3,
        name: "Train Ride",
        image: train,
        description: 'Chhu Chu'
    },
]