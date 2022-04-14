const headerNavs = [
  { id: 1, name: "Home", to: "/home" },
  { id: 2, name: "Movies", to: "/movie" },
  { id: 3, name: "Shows", to: "/tv" },
  { id: 4, name: "Watchlist", to: "/watch-list" },
];

export function getHeaderNavs() {
  return headerNavs;
}
