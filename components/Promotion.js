import Container from "./Container";

export default function Promotion() {
  return (
    <Container>
      <div className="bg-sky-600  flex flex-wrap rounded-3xl">
        <div className="lg:w-6/12  lg:pt-24 lg:pl-32 order-last lg:order-frist">
          <div className="text-white">
            <p className="SourceSans  text-sm font-semibold tracking-widest mb-4">DOWNLOAD APLIKASINYA</p>
            <p className="DM-Sans text-3xl lg:w-8/12 tracking-wide mb-6">Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau Symbian Store</p>
            <ul className="text-lg SourceSans list-disc ml-8">
                <li>Android Version: Mojave+</li>
                <li>iOS Version: Lolipop+</li>
                <li>Symbian: 20.04+</li>
            </ul>
          </div>
          <div className="flex py-6 ml-4">
            <img src="ios.png" />
            <img src="android.png" className="ml-4 "/>
          </div>
        </div>
        <div className="lg:w-6/12 w-full lg:mb-0 mb-4 lg:order-last order-frist" >
          <img src="/mockupChat.png" className="mx-auto"/>
        </div>
      </div>
    </Container>
  );
}
