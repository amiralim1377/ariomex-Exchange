import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header>
      <MobileMenu />
      <DesktopHeader />
    </header>
  );
}
