function Layout({ children }) {
    return (
      <div>
        <header>Header</header>
        <main>{children}</main> 
        <footer>Подвал сайта</footer>
      </div>
    );
  }
  