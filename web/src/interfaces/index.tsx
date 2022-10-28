import { ReactNode } from 'react';

export type IGame = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

export type IGameCardProps = {
  game: IGame;
};

export type IAdsParams = {
  id: string;
  discordImage: string;
  username: string;
  discordId: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
};

export type IModal = {
  open: boolean;
  setOpen(open: boolean): void;
  title?: string;
  close?: boolean;
  centered?: boolean;
  children: ReactNode;
};

export type IToast = {
  open: boolean;
  setOpen(open: boolean): void;
  dados: IToastData;
};

export type IToastData = {
  type: string;
  title: string;
  message: string;
};

export type ITooltip = {
  description: string;
  delayDuration?: number;
  children: ReactNode;
};

export type IDiscordProfile = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    discriminator?: string | null;
    avatar?: string | null;
    image_url?: string | null;
    username?: string | null;
    id?: string | null;
  };
  expires: ISODateString;
};

export declare type ISODateString = string;