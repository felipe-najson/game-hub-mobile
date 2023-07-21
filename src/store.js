import {create} from 'zustand';

const useQueryStore = create(set => ({
  gameQuery: {},
  setSearchText: searchText => set(() => ({gameQuery: {searchText}})),
}));

export default useQueryStore;
