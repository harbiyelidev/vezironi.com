export interface CurrentSong {
    progress_ms: number;
    item: {
        name: string;
        duration_ms: number;
        external_urls: {
            spotify: string;
        };
        artists: {
            name: string;
            external_urls: {
                spotify: string;
            };
        }[];
        album: {
            name: string;
            images: {
                url: string;
                height: number;
                width: number;
            }[];
        };
    };
    is_playing: boolean;
}

export interface LastSong {
    name: string;
    external_urls: {
        spotify: string;
    };
    artists: {
        name: string;
        external_urls: {
            spotify: string;
        };
    }[];
    album: {
        name: string;
        images: {
            url: string;
            height: number;
            width: number;
        }[];
    };
}