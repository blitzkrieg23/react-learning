import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    //event.preventDefault();
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isUserAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
