import React from "react";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 text-gray-300 p-5 text-center">
        <p>
      
          Projenin Front-end kısmında React/React-context, Tailwind
          kullanılmıştır. Back-end kısmında Node.js, Express.js ve MySQL
          kullanılmıştır. Home sayfasında arama ile tüm şehirlerin hava durumu
          bilgisi özet şeklinde getiriliyor ve gelen kutunun üstüne basılarak
          detay sayfasına yönlendiriliyor. Gündüz/gece olma durumuna göre arka
          plan rengi değişiyor, hava sıcaklığına göre ve hava koşullarına göre
          iconlar değişiyor ve kullanıcıya tavsiyelerde bulunuluyor. İzleme
          listesi veri tabanında tutuluyor. Geçmiş sayfasında arama yapılarak
          geçmiş 2 güne ait hava durumu bilgileri getiriliyor. Hem Back-end hem
          de Front-end kısmında hata yönetimi yapılmıştır.

          API: https://www.weatherapi.com/
        </p>
      </div>
    </>
  );
}
