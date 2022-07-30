import { useNavigate } from 'react-router-dom';

export default function useNavigation() {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return {
    goBack,
  };
}
