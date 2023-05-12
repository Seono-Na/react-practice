import React from "react";
import "./AppTheme.css";

export default function AppTheme() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Product Detail
      <p>DarkMode:</p>
      <button>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
