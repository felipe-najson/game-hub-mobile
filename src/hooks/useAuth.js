import {useAuthStore} from '../store';

const useAuth = () => {
  const {user, setUser} = useAuthStore();
};
