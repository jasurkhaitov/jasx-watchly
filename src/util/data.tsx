import { Category } from '@/typescript/type';
import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoFilmOutline,
  IoVideocamOutline,
  IoGameControllerOutline,
  IoSchoolOutline,
  IoFootballOutline,
  IoHappyOutline,
  IoMicOutline,
  IoShirtOutline,
  IoCashOutline,
  IoBarbellOutline,
  IoCarSportOutline,
  IoSparklesOutline,
  IoMusicalNotesOutline,
  IoAirplaneOutline
} from 'react-icons/io5';

export const categories: Category[] = [
  { name: "All", icons: IoHomeOutline, active: true },
  { name: "New", icons: IoNewspaperOutline },
  { name: "Movie", icons: IoFilmOutline },
  { name: "Live", icons: IoVideocamOutline },
  { name: "Gaming", icons: IoGameControllerOutline },
  { name: "Education", icons: IoSchoolOutline },
  { name: "Sport", icons: IoFootballOutline },
  { name: "Comedy", icons: IoHappyOutline },
  { name: "Podcast", icons: IoMicOutline },
  { name: "Fashion", icons: IoShirtOutline },
  { name: "Crypto", icons: IoCashOutline },
  { name: "Gym", icons: IoBarbellOutline },
  { name: "Cars", icons: IoCarSportOutline },
  { name: "Beauty", icons: IoSparklesOutline },
  { name: "Music", icons: IoMusicalNotesOutline },
  { name: "Travel", icons: IoAirplaneOutline },
];