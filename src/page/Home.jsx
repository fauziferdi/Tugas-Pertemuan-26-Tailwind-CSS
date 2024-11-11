import React from "react";
import NewsSection from "../components/NewsSection";
import GalleryHeader from "../components/GalleryHeader";

const Home = () => {
  const siaranPersData = [
    {
      content:
        "Sambut Hari Pelanggan Nasional 2023, Intip Inovasi Customer Experience di Tokopedia Care",
      date: "06 October 2023",
      img: "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
    },
    {
      content:
        "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
      date: "04 October 2023",
      img: "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
    },
    {
      content:
        "Tokopedia Luncurkan Fitur Dipromosikan Affiliate, Pengguna Makin Mudah Dapat Penghasilan Tambahan",
      date: "13 September 2023",
      img: "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
    },
  ];

  const behindTheSceneData = [
    {
      content: "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care",
      date: "08 November 2023",
      img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1.png",
    },
    {
      content:
        "Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga Besar Nakama",
      date: "19 October 2023",
      img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464.jpg",
    },
    {
      content:
        "Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi Sampah Plastik",
      date: "29 August 2023",
      img: "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
    },
  ];

  const socialImpactData = [
    {
      content: "Beraksi untuk Sesama di Tahun ke-13 Tokopedia",
      date: "17 Agustus 2022,",
      img: "https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg",
    },
    {
      content:
        "Wujudkan Komitmen Jaga Kelestarian Lingkungan, Tokopedia Tanam Ribuan Pohon Mangrove di 8 Provinsi Indonesia",
      date: "22 Agustus 2022",
      img: "https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg",
    },
    {
      content:
        "Kontribusi Nakama untuk Lingkungan Lewat Tanam Pohon Mangrove di Program Nakamate",
      date: "06 October 2023",
      img: "https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg",
    },
  ];

  return (
    <main>
      <div className="grid grid-cols-2 gap-2 mb-12">
        <GalleryHeader
          content="Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!"
          date="21 March 2024"
          img="https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg"
        />
        <div className="grid grid-rows-2 gap-2">
          <GalleryHeader
            content="Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia"
            date="23 August 2023"
            img="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg"
          />
          <div className="grid grid-cols-2 gap-2">
            <GalleryHeader
              content="Implementasi AI di Tokopedia, dari Gudang Pintar sampai Sistem Rekomendasi"
              date="21 August 2023"
              img="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
            />
            <GalleryHeader
              content="CPO Tokopedia Berbagi Cara Menerapkan Data-Driven Decision Making dalam Mengembangkan Produk"
              date="24 July 2023"
              img="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
            />
          </div>
        </div>
      </div>

      <NewsSection
        judul="Siaran Pers"
        menuPlus={true}
        newsData={siaranPersData}
      />
      <NewsSection judul="Behind The Scane" newsData={behindTheSceneData} />
      <NewsSection judul="Social Impact" newsData={socialImpactData} />
    </main>
  );
};

export default Home;
