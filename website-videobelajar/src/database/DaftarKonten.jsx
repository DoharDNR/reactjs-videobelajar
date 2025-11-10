const locationSrc = "/src/assets";
//Database-Line
const imgBanner = [
  `${locationSrc}/img-resource/banner-produk1.jpg`,
  `${locationSrc}/img-resource/banner-produk2.jpg`,
  `${locationSrc}/img-resource/banner-produk3.jpg`,
  `${locationSrc}/img-resource/banner-produk4.jpg`,
  `${locationSrc}/img-resource/banner-produk5.jpg`,
  `${locationSrc}/img-resource/banner-produk6.jpg`,
  `${locationSrc}/img-resource/banner-produk7.jpg`,
  `${locationSrc}/img-resource/banner-produk8.jpg`,
  `${locationSrc}/img-resource/banner-produk9.jpg`,
];

const imgCustomer = [
  `${locationSrc}/img-resource/customer1.png`,
  `${locationSrc}/img-resource/customer2.png`,
  `${locationSrc}/img-resource/customer3.png`,
  `${locationSrc}/img-resource/customer4.png`,
  `${locationSrc}/img-resource/customer5.png`,
  `${locationSrc}/img-resource/customer6.png`,
  `${locationSrc}/img-resource/customer7.png`,
  `${locationSrc}/img-resource/customer8.png`,
  `${locationSrc}/img-resource/customer9.png`,
];

const BankTransfer = [
  { iconBank: "/src/assets/iconPayment/BCA-icon.png", nameBank: "Bank BCA" },
  { iconBank: "/src/assets/iconPayment/BNI-icon.png", nameBank: "Bank BNI" },
  { iconBank: "/src/assets/iconPayment/BRI-icon.png", nameBank: "Bank BRI" },
  {
    iconBank: "/src/assets/iconPayment/Mandiri-icon.png",
    nameBank: "Bank Mandiri",
  },
];
const EWallet = [
  { iconBank: "/src/assets/iconPayment/DANA-icon.png", nameBank: "Dana" },
  { iconBank: "/src/assets/iconPayment/OVO-icon.png", nameBank: "OVO" },
  { iconBank: "/src/assets/iconPayment/LA-icon.png", nameBank: "LinkAja" },
  { iconBank: "/src/assets/iconPayment/SP-icon.png", nameBank: "Shopee Pay" },
];

const videos = [
  {
    id: 1,
    banner: imgBanner[0],
    title: "Big 4 Auditor Financial Analyst",
    describe:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
    img: imgCustomer[0],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Bisnis",
    price: "Rp 300K",
    rating: 3.5,
  },
  {
    id: 2,
    banner: imgBanner[1],
    title: "Big 4 Auditor Financial Analyst",
    img: imgCustomer[1],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Bisnis",
    price: "Rp 350K",
    rating: 4.0,
  },
  {
    id: 3,
    banner: imgBanner[2],
    title: "Big 4 Auditor Financial Analyst",
    img: imgCustomer[2],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Pemasaran",
    price: "Rp 250K",
    rating: 4.2,
  },
  {
    id: 4,
    banner: imgBanner[3],
    title: "Big 4 Auditor Financial Analyst",
    img: imgCustomer[3],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Pemasaran",
    price: "Rp 270K",
    rating: 4.1,
  },
  {
    id: 5,
    banner: imgBanner[4],
    title: "Big 4 Auditor Financial Analyst",
    img: imgCustomer[4],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Desain",
    price: "Rp 280K",
    rating: 4.5,
  },
  {
    id: 6,
    banner: imgBanner[5],
    title: "Big 4 Auditor Financial Analyst",
    img: imgCustomer[5],
    instructor: "Jenna Ortega",
    role: "Senior Accountant at Gojek",
    category: "Desain",
    price: "Rp 240K",
    rating: 4.3,
  },
];

const transaction = [
  {
    id: 1,
    banner: imgBanner[0],
    title: "Big 4 Auditor Financial Analyst",
    describe:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
    category: "Berhasil",
    price: "Rp 300K",
    status: "Berhasil",
  },
  {
    id: 2,
    banner: imgBanner[1],
    title: "Big 4 Auditor Financial Analyst",
    category: "Gagal",
    price: "Rp 350K",
    status: "Gagal",
  },
  {
    id: 3,
    banner: imgBanner[2],
    title: "Big 4 Auditor Financial Analyst",
    category: "Menunggu",
    price: "Rp 250K",
    status: "Belum Bayar",
  },
  {
    id: 4,
    banner: imgBanner[3],
    title: "Big 4 Auditor Financial Analyst",
    category: "Berhasil",
    price: "Rp 270K",
    status: "Berhasil",
  },
  {
    id: 5,
    banner: imgBanner[4],
    title: "Big 4 Auditor Financial Analyst",
    category: "Gagal",
    price: "Rp 280K",
    status: "Gagal",
  },
  {
    id: 6,
    banner: imgBanner[5],
    title: "Big 4 Auditor Financial Analyst",
    category: "Menunggu",
    price: "Rp 240K",
    status: "Belum Bayar",
  },
];

const myCourse = [
  {
    id: 1,
    banner: imgBanner[0],
    title: "Big 4 Auditor Financial Analyst",
    describe:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
    category: "Berhasil",
    price: "Rp 300K",
    status: "Berhasil",
  },
  {
    id: 2,
    banner: imgBanner[1],
    title: "Big 4 Auditor Financial Analyst",
    category: "Gagal",
    price: "Rp 350K",
    status: "Gagal",
  },
  {
    id: 3,
    banner: imgBanner[2],
    title: "Big 4 Auditor Financial Analyst",
    category: "Menunggu",
    price: "Rp 250K",
    status: "Belum Bayar",
  },
  {
    id: 4,
    banner: imgBanner[3],
    title: "Big 4 Auditor Financial Analyst",
    category: "Berhasil",
    price: "Rp 270K",
    status: "Berhasil",
  },
  {
    id: 5,
    banner: imgBanner[4],
    title: "Big 4 Auditor Financial Analyst",
    category: "Gagal",
    price: "Rp 280K",
    status: "Gagal",
  },
  {
    id: 6,
    banner: imgBanner[5],
    title: "Big 4 Auditor Financial Analyst",
    category: "Menunggu",
    price: "Rp 240K",
    status: "Belum Bayar",
  },
];

//Database-Line

export { videos, transaction, myCourse, BankTransfer, EWallet };
