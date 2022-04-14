import img1 from "../files/images/banner/1.jpg";
import img2 from "../files/images/banner/2.jpg";
import img3 from "../files/images/banner/3.jpg";
import img4 from "../files/images/banner/4.jpg";
import img5 from "../files/images/banner/5.jpg";
import img6 from "../files/images/banner/6.jpg";

const banners = [
  {
    id: 1,
    title: "The Dark Knight",
    quote: " Whatever Doesn't Kill You, Makes You Stranger ",
    rating: "8.5",
    image: img1,
  },
  {
    id: 2,
    title: "War Horse",
    quote: " Cause when there's life there's still hope ",
    rating: "8.1",
    image: img2,
  },
  {
    id: 3,
    title: "Inception",
    quote: " Our dreams feel real while we're in them ",
    rating: "8.5",
    image: img3,
  },
  {
    id: 4,
    title: "Pirates OF The Carribean: At The World's End",
    quote: " Not all treasure is silver and gold, mate ",
    rating: "8.1",
    image: img4,
  },
  {
    id: 5,
    title: "Harry Potter & The Deathly Hallows: Part I",
    quote: " I solemnly swear I am up to no good ",
    rating: "8.5",
    image: img5,
  },
  {
    id: 6,
    title: "The Witcher",
    quote: " You Don't Need Mutations To Strip Men Of Their Humanity ",
    rating: "8.1",
    image: img6,
  },
];

export function getHeaderBanners() {
  return banners.filter((b) => b);
}
