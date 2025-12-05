import FooterApp from "./FooterApp/FooterApp";
import FooterColumns from "./FooterColumns/FooterColumns";

export default function Footer() {
  return (
    <footer className="bg-background text-white py-12">
      <div className="container w-full ">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6">
          <FooterColumns />
        </div>

        <FooterApp />
      </div>
    </footer>
  );
}
