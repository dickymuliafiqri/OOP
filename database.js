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

class Subject {
  kode_mapel = {
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

  soal = {
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
    "bind-ix": {
      jumlah: 5,
      daftar: [
        {
          pertanyaan:
            "Banyak kalangan menyebut Rudy Hartono sebagai <u>maestro</u> bulu tangkis dunia.\n\nMakna kata bergaris bawah adalah ....",
          jawaban: [
            "Orang yang hebat dalam bidang yang digeluti",
            "Orang yang ahli dan berprestasi di bidang tertentu",
            "Orang yang mempunyai nama besar karena kesuksesannya",
            "Orang yang menjuarai suatu pertandingan dan tidak terkalahkan",
          ],
          kunci:
            "4f 72 61 6e 67 20 79 61 6e 67 20 61 68 6c 69 20 64 61 6e 20 62 65 72 70 72 65 73 74 61 73 69 20 64 69 20 62 69 64 61 6e 67 20 74 65 72 74 65 6e 74 75",
        },
        {
          pertanyaan: "Kata “atau” merupakan konjungsi?",
          jawaban: ["Tujuan", "Pilihan", "Temporal", "Syarat"],
          kunci: "50 69 6c 69 68 61 6e",
        },
        {
          pertanyaan: "Ceramah bertujuan untuk memberikan?",
          jawaban: ["Nasihat baik", "Kebencian", "Kemurkaan", "Kejahatan"],
          kunci: "4e 61 73 69 68 61 74 20 62 61 69 6b",
        },
        {
          pertanyaan: "Bahasa yang digunakan dalam teks ceramah adalah?",
          jawaban: ["Efektif", "Ambigu", "Bahasa gaul", "Bahasa tidak baku"],
          kunci: "45 66 65 6b 74 69 66",
        },
        {
          pertanyaan: "Nilai yang menjelaskan baik dan buruk seseorang dalam cerita adalah nilai?",
          jawaban: ["Agama", "Sosial", "Budaya", "Moral"],
          kunci: "4d 6f 72 61 6c",
        },
      ],
    },
    "bing-ix": {
      jumlah: 5,
      daftar: [
        {
          pertanyaan: "What is the meaning of <u>Mouse</u>",
          jawaban: ["Kucing", "Kadal", "Biawak", "Tikus"],
          kunci: "54 69 6b 75 73",
        },
        {
          pertanyaan: "What is the meaning of <u>Banana</u>",
          jawaban: ["Pisang", "Jeruk", "Rambutan", "Nanas"],
          kunci: "50 69 73 61 6e 67",
        },
        {
          pertanyaan: "What is the meaning of <u>Floor</u>",
          jawaban: ["Atap", "Tembok", "Pintu", "Lantai"],
          kunci: "4c 61 6e 74 61 69",
        },
        {
          pertanyaan: "What is the meaning of <u>Salt</u>",
          jawaban: ["Garam", "Air", "Gula", "Merica"],
          kunci: "47 61 72 61 6d",
        },
        {
          pertanyaan: "What is the meaning of <u>Air</u>",
          jawaban: ["Air", "Udara", "Api", "Tanah"],
          kunci: "55 64 61 72 61",
        },
      ],
    },
    "mtk-ix": {
      jumlah: 5,
      daftar: [
        {
          pertanyaan: "1+1",
          jawaban: ["2", "1", "5", "9"],
          kunci: "32",
        },
        {
          pertanyaan: "5-0",
          jawaban: ["5", "4", "3", "0"],
          kunci: "35",
        },
        {
          pertanyaan: "8-8",
          jawaban: ["8", "88", "-8", "0"],
          kunci: "30",
        },
        {
          pertanyaan: "20+20",
          jawaban: ["2020", "2002", "2000", "40"],
          kunci: "34 30",
        },
        {
          pertanyaan: "2019+3",
          jawaban: ["20193", "32019", "2022", "2202"],
          kunci: "32 30 32 32",
        },
      ],
    },
  };

  constructor(subject_code) {
    if (this.kode_mapel[subject_code]) {
      return {
        ...this.soal[this.kode_mapel[subject_code].kode],
      };
    }
  }
}

// https://stackoverflow.com/a/3745677
function hex2a(hexx) {
  const hexxx = hexx.replaceAll(" ", "");
  const hex = hexxx.toString(); //force conversion
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}
