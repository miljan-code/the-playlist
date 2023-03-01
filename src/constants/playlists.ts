export type SongType = {
  cover: string;
  title: string;
  album: string;
  length: string;
};

export type AlbumType = {
  cover: string;
  title: string;
  artist: string;
};

export const topSongs: SongType[] = [
  {
    cover: '/song-1.png',
    title: 'Whenever, Whenever',
    album: 'Nothing But the Beat',
    length: '06:21',
  },
  {
    cover: '/song-2.png',
    title: 'Love U',
    album: 'Raising The Beast',
    length: '04:32',
  },
  {
    cover: '/song-3.png',
    title: 'Walk This Way',
    album: 'Aerosmith',
    length: '02:56',
  },
  {
    cover: '/song-4.png',
    title: 'I Would Like Remix',
    album: 'Beach Boys',
    length: '03:14',
  },
];

export const topAlbums: AlbumType[] = [
  {
    cover: '/album-sm-1.png',
    title: 'Glory',
    artist: 'Britney Spears',
  },
  {
    cover: '/album-sm-2.png',
    title: 'Come & Get It',
    artist: 'Selena Gomez',
  },
  {
    cover: '/album-sm-3.png',
    title: 'Hitmepulse Remix',
    artist: 'Zara Larsson',
  },
  {
    cover: '/album-sm-4.png',
    title: 'Fortunate Son',
    artist: 'The Weekend',
  },
];
