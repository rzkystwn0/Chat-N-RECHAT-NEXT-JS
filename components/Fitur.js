import Container from "./Container";
import IlustrationOne from "./IlustrationOne";

export default function Fitur() {
  return (
    <Container>
      <div className="w-12/12 text-center py-32 " id="fitur" >
        <p className="SourceSans text-sm font-semibold tracking-widest mb-4">NGGAK HARUS SIH SEBENERNYA</p>
        <p className="DM-Sans text-2xl w-64 mb:w-0 mx-auto tracking-wide text-blue-900 mb-4">Kenapa Harus Pakai Chat N’ Rechat?</p>
        <p className="tracking-wide text-black/60 SourceSans text-base md:w-4/12 mx-auto"  >Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.</p>
      </div>
      <div className="flex flex-wrap items-center pb-32">
          <IlustrationOne 
          image="/ex1.png"
          title="Groups to keep in touch"
          dec="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos."
          />
          <IlustrationOne 
          image="/ex2.png"
          title="Simple, Reliable Messaging"
          dec="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees."
          />
          <IlustrationOne 
          image="/ex3.png"
          title="Speak Freely"
          dec="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations."
          />
      </div>
      <hr className="mb-64 bg-gray-700"/>
    </Container>
  );
}
