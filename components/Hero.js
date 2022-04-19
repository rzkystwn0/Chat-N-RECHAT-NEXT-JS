import Button from "./Button";
import Container from "./Container";
import TotalDownUser from "./TotalDownUser";

export default function Hero() {
  return (
    <Container>
      <div className="py-32 flex flex-wrap" id="beranda">
        <div className="md:w-6/12 w-12/12 order-last md:order-first">
          <p className="SourceSans font-semibold text-blue-600 tracking-widest text-lg">CHAT N’ RECHAT</p>
          <p className="text-4xl DM-Sans text-gray-900 mt-2">Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!</p>
          <p className="SourceSans text-lg  text-black/60 mt-4">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
          <div className="flex mt-12">
            <Button variants="register">
              Register
              <img className="ml-2" src="/arrow-right-circle.svg" />
            </Button>
            <Button variants="learn more">Learn More</Button>
          </div>
          <div className="flex w-12/12 mt-14">
            <TotalDownUser image="/download.svg" field="TOTAL DON’TLOUD" value="1,501,234" />
            <TotalDownUser image="/user.svg" field="TOTAL USERS" value="1,318,829" />
          </div>
        </div>
        <div className="md:w-6/12 w-12/12 mt-8 mb-12 md:mb-0">
            <img className="w-full" src="hero.png" />
        </div>
      </div>
    </Container>
  );
}
