import DetailFaq from "./DetailFaq";

export default function FaqPacking(){
    return (
        <>
        <DetailFaq 
            question='Apakah aplikasi ini gratis?'
            answer=' Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.'
          />
          <DetailFaq 
            question='Apakah data saya akan dijual ke agen khusus US?'
            answer=''
          />
           <DetailFaq 
            question='Pertanyaan di atas gabakal ada yang bisa jawab sih'
            answer='Entar saya di culik lagi'
          />
           <DetailFaq 
            question='Apakah bumi datar atau bulat?'
            answer='Menurut kami bumi itu donat sih'
          />
          <DetailFaq 
            question='Mengapa anda malas?'
            answer='YNTKS'
          />
           <DetailFaq 
            question='Kenapa kucing imut?'
            answer='karena kalo yang ngeselin itu kamu!!'
          />
        </>
    );
}