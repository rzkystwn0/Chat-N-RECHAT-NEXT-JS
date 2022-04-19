import { useState } from "react"
import Button from "./Button";
import Container from "./Container";
import Nav from "./Nav";

export default function NavRes() {
  const [ navRes, setNavRes ] = useState(false)

  return (
    <div className="lg:hidden w-full bg-sky-700 px-4 py-2 fixed top-0 left-0 right-0" >
      <Container>
        <div className="flex">
    <div className="w-6/12 float-left">
      <img className="w-12" src="/logo.png" />
    </div>
    <div className="w-6/12 flex items-center justify-end">
      <img src="/menu.svg" className="inline-block" onClick={() => {setNavRes(true)}}/>
    </div>
    <div className={`h-screen w-screen backdrop-blur-sm top-0 fixed transition-all ${navRes ? 'right-0' : '-right-full'}`}>
      <div className="flex items-center h-screen" >
        <img src="x.svg" className="absolute right-10 top-8 cursor-pointer" onClick={() => {setNavRes(false)}} />
        <div className="flex flex-col mx-auto">
      <Nav />
      <Button variants="download">Download</Button>
        </div>
      </div>
    </div>
        </div>
      </Container>
  </div>
  );

}