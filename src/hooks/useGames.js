import {useQuery} from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import useQueryStore from '../store';

const useGames = () => {
  const client = new APIClient('/games');
  const gameQuery = useQueryStore(s => s.gameQuery);

  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      client.getAll({
        params: {
          search: gameQuery.searchText,
        },
      }),
  });
};

export default useGames;
