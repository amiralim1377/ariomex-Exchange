import HeaderLogo from "../HeaderLogo/HeaderLogo";

export default function MobileMenu() {
  return (
    <div className="flex justify-between lg:hidden">
      <div>hamburger-button-menu</div>
      <div>button-Login</div>
      <HeaderLogo />
    </div>
  );
}
