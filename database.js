const peserta = [
  { nama: "Agung Rizky", nisn: 3121101219, kelas: "IX" },
  { nama: "Ahmad Imam Solihin", nisn: 3121101197, kelas: "IX" },
  { nama: "Alvi Syahrin", nisn: 3121101182, kelas: "IX" },
  { nama: "Ardina Zahiro", nisn: 3121101185, kelas: "IX" },
  { nama: "Boby Suprayogi", nisn: 3121101186, kelas: "IX" },
  { nama: "Dicky Mulia Fiqri", nisn: 3121101183, kelas: "IX" },
  { nama: "Fani Afilla", nisn: 3121101195, kelas: "IX" },
  { nama: "Fina Nur Jayanti", nisn: 3121101192, kelas: "IX" },
  { nama: "Habibur Rohman", nisn: 3121101194, kelas: "IX" },
  { nama: "Hizbi Maulana", nisn: 3121101205, kelas: "IX" },
  { nama: "Megantara Mozha Pratama", nisn: 3121101202, kelas: "IX" },
  { nama: "Mohammad Randi Ega Permana", nisn: 3121101188, kelas: "IX" },
  { nama: "Muhammad Fadlillah", nisn: 3121101203, kelas: "IX" },
  { nama: "Novan Anwar Prasetyo", nisn: 3121101193, kelas: "IX" },
  { nama: "Nur Hadi Irawan", nisn: 3121101206, kelas: "IX" },
  { nama: "Nurul Shintia Fazariani", nisn: 3121101198, kelas: "IX" },
  { nama: "Putri Julisa Martadina", nisn: 3121101199, kelas: "IX" },
  { nama: "Ramadhani Rusdiansyah", nisn: 3121101180, kelas: "IX" },
  { nama: "Rindi Putri Aulia", nisn: 3121101189, kelas: "IX" },
  { nama: "Rizki Ibnu Maulana", nisn: 3121101187, kelas: "IX" },
  { nama: "Safia Nur Budiastri", nisn: 3121101184, kelas: "IX" },
  { nama: "Sayu Rizky Apriliana", nisn: 3121101200, kelas: "IX" },
  { nama: "Shella Febriana Mahardika", nisn: 3121101181, kelas: "IX" },
  { nama: "Thoifur Rohman", nisn: 3121101191, kelas: "IX" },
  { nama: "Yovan Ardiansyah Putra", nisn: 3121101190, kelas: "IX" },
  { nama: "Zahravi Putra Baros", nisn: 3121101201, kelas: "IX" },
];

const kode_mapel = {
  ipa: {
    kode: "ipa-ix",
  },
  bind: {
    kode: "bind-ix",
  },
  bing: {
    kode: "bing-ix",
  },
  mtk: {
    kode: "mtk-ix",
  },
};

const soal = {
  "ipa-ix": {
    jumlah: 5,
    daftar: [
      {
        pertanyaan: "Tumbuhan yang menyimpan cadangan makanan di akar yaitu...",
        jawaban: ["Tebu", "Singkong", "Mangga", "Padi"],
        kunci: "53 69 6e 67 6b 6f 6e 67",
      },
      {
        pertanyaan: "Bagian paru-paru yang menjadi tempat terjadinya pertukaran O2 dan CO2 yaitu...",
        jawaban: ["Bronkus", "Bronkiolus", "Trakhea", "Alveolus"],
        kunci: "41 6c 76 65 6f 6c 75 73",
      },
      {
        pertanyaan: "Jika tubuh kita kekurangan kalsium bisa mengakibatkan...",
        jawaban: ["Busung lapar", "Anemia", "Keropos tulang", "Sariawan"],
        kunci: "4b 65 72 6f 70 6f 73 20 74 75 6c 61 6e 67",
      },
      {
        pertanyaan: "Benda akan menimbulkan gaya gesek yang besar bila memiliki permukaan...",
        jawaban: ["Halus", "Rata", "Kasar", "Licin"],
        kunci: "4b 61 73 61 72",
      },
      {
        pertanyaan: "Melindungi diri dengan cara memutuskan ekornya dilakukan hewan...",
        jawaban: ["Komodo", "Katak", "Cicak", "Ular"],
        kunci: "43 69 63 61 6b",
      },
    ],
  },
};

// https://stackoverflow.com/a/3745677
function hex2a(hexx) {
  const hexxx = hexx.replace(" ", "");
  const hex = hexxx.toString(); //force conversion
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}
