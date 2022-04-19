

export default function Nav() {
  return (
    <ul className="SaurceSans flex flex-col  lg:flex-row text-center text-base hover:text-gray-500 transition-all ">
      <li className="lg:px-4 xl:px-14 py-4">
        <a  href="#beranda">
          Beranda
        </a>
      </li>
      <li className="lg:px-4 xl:px-14 py-4">
        <a  href="#fitur">
          Fitur-fitur
        </a>
      </li>
      <li className="lg:px-4 xl:px-14 py-4">
        <a  href="#teknologi">
          Teknologi
        </a>
      </li>
      <li className="lg:px-4 xl:px-14 py-4">
        <a  href="#faq">
          FAQ
        </a>
      </li>
    </ul>
  );
}
