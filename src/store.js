import {create} from 'zustand';

export const useQueryStore = create(set => ({
  gameQuery: {},
  setSearchText: searchText => set(() => ({gameQuery: {searchText}})),
}));

export const useAuthStore = create(set => ({
  user: {},
  setUser: user => set(() => ({user})),
}));
