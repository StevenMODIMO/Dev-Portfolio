import About from "../components/About";
import Expertise from "../components/Expertise";
import CertificateList from "../components/Certificates";

export default function Intro({theme}) {
  return (
    <div className="pt-2 sm:pt-12">
      <About />
      <Expertise theme={theme} />
      <CertificateList />
      <footer className="flex justify-center mt-8 text-sm sm:text-lg">
        <p>Handcrafted by Steven Modimo &copy; 2022.</p>
      </footer>
    </div>
  );
}
