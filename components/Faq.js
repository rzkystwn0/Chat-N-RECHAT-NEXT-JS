import Container from "./Container";
import DetailFaq from "./DetailFaq";
import FaqPacking from "./FaqPacking";

export default function Faq() {
  return (
    <Container>
      <div className="py-32">
        <div className="w-12/12 text-center py-18 " id="faq">
          <p className="SourceSans text-sm font-semibold tracking-widest mb-4">BANYAK YANG NANYA</p>
          <p className="DM-Sans text-2xl w-64 mb:w-0 mx-auto tracking-wide text-blue-900 mb-4">Pertanyaan Yang Sering Ditanyain</p>
          <p className="tracking-wide text-black/60 SourceSans text-base md:w-4/12 mx-auto">Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca ‘kan.</p>
        </div>
        <div className="md:w-8/12 w-11/12 mx-auto ">
        <FaqPacking />
        </div>
      </div>
    </Container>
  );
}
