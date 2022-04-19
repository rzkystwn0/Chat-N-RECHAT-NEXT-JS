import Container from "./Container";

export default function Support() {
  return (
    <Container>
      <div className="w-full lg:rounded-lg rounded-2xl bg-blue-200/20 py-10">
        <ul className="flex flex-wrap justify-center">
          <li className="px-5 lg:px-16 lg:py-0 py-6" >
            <img src="/cnn.png" />
          </li>
          <li className="px-5 lg:px-16 lg:py-0 py-6" >
            <img src="/tirto.png" />
          </li>
          <li className="px-5 lg:px-16 lg:py-0 py-6" >
            <img src="/forbes.png" />
          </li>
          <li className="px-5 lg:px-16 lg:py-0 py-6" >
            <img src="/google.png" />
          </li>
          <li className="px-5 lg:px-16 lg:py-0 py-6" >
            <img src="/newYork.png" />
          </li>
        </ul>
      </div>
    </Container>
  );
}
