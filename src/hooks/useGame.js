import {useQuery} from '@tanstack/react-query';
import APIClient from '../services/apiClient';

const useGame = id => {
  const client = new APIClient('/games');

  return useQuery({
    queryKey: ['games', id],
    queryFn: () => client.get(id),
  });
};

export default useGame;
