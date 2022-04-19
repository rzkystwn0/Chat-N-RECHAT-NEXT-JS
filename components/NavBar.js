import Container from "./Container";
import Button from "./Button";
import Nav from "./Nav";
import NavRes from "./NavRes";

export default function NavBar() {

  return (
    <>
    <Container>
      <div className="lg:flex pt-12 items-center  hidden">
        <div className="w-3/12 float-left">
          <img className="w-12" src="/logo.png" />
        </div>
        <div className="w-6/12 items-center flex justify-center">
          <Nav />
        </div>
        <div className="w-3/12">
          <Button variants="download">Download</Button>
        </div>
      </div>
    </Container>
    <NavRes />
    </>
  );
}
