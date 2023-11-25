import { atom } from 'jotai';

export const accessTokenAtom = atom(localStorage.getItem('accessToken') || '');

export const updateToken = (newToken) => {
  localStorage.setItem('accessToken', newToken);
  accessTokenAtom[1](newToken);
};

export const nicknameAtom = atom(localStorage.getItem('nickname') || '');

export const updateNickname = (newNickname) => {
  localStorage.setItem('nickname', newNickname);
  nicknameAtom[1](newNickname);
};