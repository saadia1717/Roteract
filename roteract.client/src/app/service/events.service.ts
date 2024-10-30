import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  public getEvents() {
    return [{
      "id": 1,
      "name": "Concert de rock",
      "date": new Date("2024-11-15"),
      "location": "Salle de concert ABC",
      "description": "Un concert de rock avec plusieurs groupes locaux.",
      "nbPlaces": 25
  },
  {
      "id": 2,
      "name": "Exposition d'art",
      "date": new Date("2024-12-01"),
      "location": "Galerie d'art XYZ",
      "description": "Une exposition mettant en avant des artistes contemporains.",
      "nbPlaces": 10
  },
  {
      "id": 3,
      "name": "Marathon de la ville",
      "date": new Date("2025-03-10"),
      "location": "Centre-ville",
      "description": "Un marathon ouvert à tous, avec plusieurs catégories.",
      "nbPlaces": 40
  },
  {
    "id": 1,
    "name": "Concert de rock",
    "date": new Date("2024-11-15"),
    "location": "Salle de concert ABC",
    "description": "Un concert de rock avec plusieurs groupes locaux.",
    "nbPlaces": 25
},
{
    "id": 2,
    "name": "Exposition d'art",
    "date": new Date("2024-12-01"),
    "location": "Galerie d'art XYZ",
    "description": "Une exposition mettant en avant des artistes contemporains.",
    "nbPlaces": 10
},
{
    "id": 3,
    "name": "Marathon de la ville",
    "date": new Date("2025-03-10"),
    "location": "Centre-ville",
    "description": "Un marathon ouvert à tous, avec plusieurs catégories.",
    "nbPlaces": 40
},
]
  }
}
