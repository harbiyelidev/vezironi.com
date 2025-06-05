export interface DiscordUser {
  avatar: string;
}

export interface ProfileData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
}