import Container from "./Container";
import { FiturEmj } from "./FiturEmj";

export default function Teknologi() {
  return (
    <Container>
      <div id="teknologi" className="mt-32 flex flex-wrap">
        <div className="lg:w-6/12 w-12/12">
          <img src="/mockup.png" className="w-full" />
        </div>
        <div className="lg:w-6/12 w-12/12">
          <div className="mt-24">
            <p className="SourceSans text-sm font-semibold tracking-widest mb-4">TEKNOLOGI YANG DIGUNAKAN</p>
            <p className="DM-Sans text-2xl lg:w-8/12 tracking-wide text-blue-900 mb-4">Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱</p>
            <p className="tracking-wide text-black/60 SourceSans text-base lg:w-8/12" id="fitur">
              Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus
              tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:
            </p>
          </div>
          <div className="w-12/12">
            <FiturEmj emj="/emj1.png" title="Kamu Adalah Beban Kami" dec="Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!" />
            <FiturEmj emj="/emj2.png" title="Males Buat Ngembangin" dec="Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin." />
            <FiturEmj emj="/emj3.png" title="Pokoknya Males Aja Lah" dec="Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah." />
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );
}
