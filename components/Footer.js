import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-blue-300/20 w-full">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap py-16 ml-3">
          <div className="md:w-6/12 w-12/12 md:ml-16 mb-8">
            <div className="flex items-center">
              <img src="logo.png" />
              <p className="DM-Sans font-semibold tracking-wider text-lg ml-4">Chat N’ Rechat</p>
            </div>
            <p className="md:w-8/12 my-8 SourceSans text-black/60 tracking-wide">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
            <p className="SourceSans text-sm text-black/60 tracking-wide font-semibold">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</p>
          </div>
          <div className="md:w-3/12  mb-8">
            <p className="DM-Sans font-semibold tracking-wider text-lg">SiteMap</p>
            <ul>
              <li className="mt-4 SourceSans text-lg text-black/60 tracking-wide ">
                <a href="#beranda">Beranda</a>
              </li>
              <li className="mt-4 SourceSans text-lg text-black/60 tracking-wide ">
                <a href="#fitur">Fitur - fitur</a>
              </li>
              <li className="mt-4 SourceSans text-lg text-black/60 tracking-wide ">
                <a href="#teknologi">Teknologi</a>
              </li>
              <li className="mt-4 SourceSans text-lg text-black/60 tracking-wide ">
                <a href="#faq">Faq</a>
              </li>
              <li className="mt-4 SourceSans text-lg text-black/60 tracking-wide ">
                <a href="#">Download</a>
              </li>
            </ul>
          </div>
          <div className="md:w-3/12 ">
            <p className="DM-Sans font-semibold tracking-wider text-lg">Tetep Terhubung</p>
            <p className="md:w-7/12 my-8 SourceSans text-black/60 tracking-wide">Lihat kami pansos di sosial media berikut:</p>
            <div className="flex">
              <a href="#">
                <img className="ml-4" src="instagram.png" />
              </a>
              <a href="#">
                <img className="ml-4" src="facebook.png" />
              </a>
              <a href="#">
                <img className="ml-4" src="twitter.png" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
