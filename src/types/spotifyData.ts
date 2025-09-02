export interface CurrentSong {
   progress_ms: number;
   is_playing: boolean;
   item: {
      name: string;
      duration_ms: number;
      artists: Artist[];
      external_urls: {
         spotify: string;
      };
      album: {
         name: string;
         images: {
            url: string;
            height: number;
            width: number;
         }[];
      };
   };
}

export interface LastSong {
   name: string;
   is_playing: boolean;
   artists: Artist[];
   external_urls: {
      spotify: string;
   };
   album: {
      name: string;
      images: {
         url: string;
         height: number;
         width: number;
      }[];
   };
}

export interface Artist {
   name: string;
   external_urls: {
      spotify: string;
   };
}