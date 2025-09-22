import { RoutePath } from "../constants/routes.path";

const useRedirect = () => {
  const navigate = useNavigate();

  function navigateTo(path: string) {
    navigate(path);
  }

  function navigateToProfile() {
    navigate(RoutePath.profile);
  }

  function navigateToDashboard() {}

  function goToDashboard() {
    window.location.href = RoutePath.dashboard;
  }

  function goToHome() {
    // window.location.href = RoutePath.home;
    if (window.location.pathname !== RoutePath.home) navigate(RoutePath.home);
  }

  function navigateToLogin() {
    navigate(RoutePath.auth.login);
  }

  function goToLogin() {
    window.location.href = RoutePath.auth.login;
  }

  function navigateToLogout() {}

  function navigateToSignUp() {
    navigate(RoutePath.auth.signup);
  }

  function goBack() {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(RoutePath.home, { replace: true });
    }
  }

  return {
    goToLogin,
    navigateToLogin,
    navigateToDashboard,
    goToDashboard,
    goToHome,
    navigateToLogout,
    navigateToSignUp,
    navigateToProfile,
    navigateTo,
    goBack,
  };
};

export default useRedirect;
