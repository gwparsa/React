function Header() {
  const isLogin = true;
  return (
    <header>
      <img src="#" alt="logo" />
      {isLogin ? (
        <div>
          <button>Dashboard</button>
          <button>Sabad Kharid</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}

export default Header;
