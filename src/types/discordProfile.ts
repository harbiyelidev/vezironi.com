export interface DiscordUser {
   avatar: string;
}

export interface Activities {
   flags: number;
   id: string;
   name: string;
   type: number;
   state: string;
   session_id: string;
   details: string;
   timestamp: {
      start: number;
      end?: number;
   };
   assets: {
      large_image: string;
      large_text: string;
      small_image: string;
      small_text: string;
   };
   application_id: string;
   created_at: number;
}

export interface ProfileData {
   discord_user: DiscordUser;
   discord_status: 'online' | 'idle' | 'dnd' | 'offline';
   activities: Activities[]
}