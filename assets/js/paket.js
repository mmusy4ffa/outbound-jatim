/* =========================================================
   Outbound Jatim — Data & Filter Paket Outbound (Tanpa Harga)
   ========================================================= */

// Daerah yang TIDAK memiliki kategori "gunung"
const REGIONS_WITHOUT_MOUNTAIN = ["mojokerto"];

const REGION_LABELS = {
  malang: "Malang",
  batu: "Batu",
  mojokerto: "Mojokerto",
  banyuwangi: "Banyuwangi",
};

const CATEGORY_LABELS = {
  gunung: "Gunung",
  rafting: "Rafting & Sungai",
  resort: "Resort & Venue",
  games: "Games & Edukasi",
};

const PACKAGES = [
  {
    id: "batu-premium",
    title: "Outbound Batu Premium",
    region: "batu",
    categories: ["gunung", "resort"],
    desc: "Paket lengkap team building di Kota Wisata Batu dengan fasilitas resort berbintang dan trainer tersertifikasi.",
    pax: "20-500 Pax",
    duration: "Full Day / Stay",
    badge: "bestseller",
    image: "assets/img/1000414856.webp",
    alt: "Fasilitas outbound resort di dataran tinggi Kota Batu dengan pemandangan pegunungan",
    benefits: [
      "Meningkatkan kolaborasi dan efisiensi komunikasi antar lini tim",
      "Mengasah jiwa kepemimpinan dalam simulasi pemecahan masalah",
      "Fasilitas resort sejuk dengan pemandangan alami pegunungan Batu",
      "Sesi pemicu motivasi (Motivation Master Session) oleh pemandu senior"
    ],
    facilities: [
      "Master Trainer & Fasilitator sertifikasi BNSP",
      "Peralatan Game & High-Ropes keselamatan standar internasional",
      "Makan Siang Prasmanan + 2x Coffee Break",
      "Sewa Lapangan Rumput Resort Exclusif & Izin Kegiatan",
      "Banner Custom Perusahaan + Spanduk Event",
      "Dokumentasi Foto & Video (Termasuk Drone Footage)",
      "P3K & Asuransi Kegiatan Outdoor"
    ],
    rundown: [
      { time: "07.30 - 08.00", activity: "Kedatangan Peserta & Registrasi Ulang di Resort Batu" },
      { time: "08.00 - 09.00", activity: "Ice Breaking, Grouping, & Energizer Challenge" },
      { time: "09.00 - 11.30", activity: "Low to Medium Impact Team Building Games" },
      { time: "11.30 - 13.00", activity: "Makan Siang Prasmanan, Istirahat & Sholat" },
      { time: "13.00 - 15.00", activity: "Problem Solving Strategy Challenge & Synergy Game" },
      { time: "15.00 - 16.00", activity: "Commitment Building, Debriefing, & Foto Bersama" }
    ]
  },
  {
    id: "leadership-malang",
    title: "Leadership Camp Gunung Panderman, Malang",
    region: "malang",
    categories: ["gunung"],
    desc: "Fokus pada pengembangan karakter kepemimpinan dan komunikasi efektif melalui simulasi manajemen konflik di kaki Gunung Panderman.",
    pax: "30-200 Pax",
    duration: "2D1N Stay",
    badge: "bestseller",
    image: "assets/img/1000414857.webp",
    alt: "Sesi leadership training tim korporat di taman pegunungan Malang",
    benefits: [
      "Menggembleng resiliensi dan pengambilan keputusan cepat saat tekanan",
      "Membangun psychological safety antar jajaran manajemen",
      "Suasana camp privat di kaki gunung dengan udara segar 100%",
      "Review profil kepemimpinan berbasis feedback fasilitator"
    ],
    facilities: [
      "Akomodasi Tenda Glamping / Cottage Kaki Gunung",
      "Makan 3x + Barbeque Campfire Malam Hari",
      "Tim Safety & Pertolongan Pertama Medis",
      "Peralatan Orientasi Lapangan & Simulasi Leadership",
      "Dokumentasi Foto & Highlight Video"
    ],
    rundown: [
      { time: "Hari 1 - 13.00", activity: "Check-in Basecamp & Briefing Keselamatan Camp" },
      { time: "Hari 1 - 15.30", activity: "Trekking Ringan & Simulasi Navigasi Kelompok" },
      { time: "Hari 1 - 19.00", activity: "Api Unggun, Barbeque & Sesi Deep Leadership Debrief" },
      { time: "Hari 2 - 06.00", activity: "Senam Pagi & Morning Energy Challenge" },
      { time: "Hari 2 - 09.00", activity: "Synergy Final Challenge & Penutupan" }
    ]
  },
  {
    id: "rafting-kasembon",
    title: "Rafting Kasembon, Malang",
    region: "malang",
    categories: ["rafting"],
    desc: "Diarungi dengan karakter 'Strip' sepanjang 4 meter, rafting Kasembon menawarkan sensasi menantang dikelilingi hamparan sawah.",
    pax: "20-300 Pax",
    duration: "Half Day",
    badge: "",
    image: "assets/img/1000414858.webp",
    alt: "Panorama Sungai Kasembon Malang dengan pemandangan sawah hijau",
    benefits: [
      "Memacu adrenalin dan keberanian menghadapi ketidakpastian",
      "Mempererat rasa saling percaya antar dayung pengemudi perahu",
      "Pemandangan tebing alami dan hamparan sawah hijau yang memanjakan mata"
    ],
    facilities: [
      "Perahu Rafting Perusahaan, Dayung & Pelampung SNI",
      "Skipper / Guide Arung Jeram Profesional Tersertifikasi",
      "Makan Siang Khas Pedesaan (Nasi Jagung / Prasmanan)",
      "Welcome Drink Warm Tea & Snack",
      "Asuransi Arung Jeram Resmi"
    ],
    rundown: [
      { time: "08.30 - 09.00", activity: "Tiba di Basecamp Kasembon & Safety Fitting Helm/Pelampung" },
      { time: "09.00 - 09.30", activity: "Pengarahan Teknik Mendayung & Safety Briefing" },
      { time: "09.30 - 12.00", activity: "Pengarungan Sungai Kasembon 7.5 KM & Rest Spot Foto" },
      { time: "12.00 - 13.30", activity: "Bilas Bersih, Makan Siang & Kepulangan" }
    ]
  },
  {
    id: "rafting-combo",
    title: "Rafting Combo Adventure, Malang",
    region: "malang",
    categories: ["rafting", "games"],
    desc: "Kombinasi sempurna antara training motivasi di pagi hari dan tantangan arung jeram Sungai Pekalen di sore hari.",
    pax: "30-250 Pax",
    duration: "Full Day",
    badge: "hotdeal",
    image: "assets/img/1000414863.webp",
    alt: "Aktivitas rafting arung jeram di Sungai Pekalen Jawa Timur",
    benefits: [
      "Paket petualangan paling komplet: Fun Outbound + Extreme Water Sport",
      "Melepaskan kejenuhan kerja secara total dalam sehari penuh",
      "Dilengkapi fasilitas foto aksi saat melewati jeram sungai"
    ],
    facilities: [
      "Fasilitator Outbound Pagi & Guide Rafting Sore",
      "Peralatan Game Outbound + Peralatan Rafting Complete",
      "Makan Siang Prasmanan 2x + Kelapa Muda Segar",
      "Locker & Kamar Mandi Bilas Bersih"
    ],
    rundown: [
      { time: "08.00 - 11.30", activity: "Fun Team Building & Competition Games di Lapangan Basecamp" },
      { time: "11.30 - 13.00", activity: "Istirahat, Makan Siang & Persiapan Air" },
      { time: "13.00 - 15.30", activity: "Pengarungan Rafting Combo Jeram Menantang" },
      { time: "15.30 - 16.30", activity: "Kelapa Muda Segar, Bilas & Penutupan" }
    ]
  },
  {
    id: "ijen-banyuwangi",
    title: "Sunrise Adventure Gunung Ijen, Banyuwangi",
    region: "banyuwangi",
    categories: ["gunung"],
    desc: "Pendakian ringan menikmati blue fire dan sunrise di Kawah Ijen, dilanjutkan sesi refleksi tim di puncak.",
    pax: "10-100 Pax",
    duration: "2D1N Stay",
    badge: "",
    image: "assets/img/20260724_141514_0003.webp",
    alt: "Tim korporat berdiri di kawasan pegunungan Banyuwangi saat matahari terbit",
    benefits: [
      "Pengalaman unik mendaki salah satu kawah tercantik di dunia",
      "Meningkatkan rasa solidaritas dan pantang menyerah tim",
      "Sesi perenungan dan penetapan target bisnis di puncak ketinggian"
    ],
    facilities: [
      "Pemandu Lokal & Fasilitator Gunung Ijen",
      "Masker Gas Respirator Standar & Senter Kepala",
      "Hotel / Homestay Pilihan Banyuwangi",
      "Makan Malam + Sarapan Pagi Puncak",
      "Tiket Masuk TWA Kawah Ijen Resmi"
    ],
    rundown: [
      { time: "Hari 1 - 20.00", activity: "Penjemputan & Briefing Persiapan Trekking Ijen" },
      { time: "Hari 2 - 01.30", activity: "Tiba di Pos Paltuding & Start Pendakian" },
      { time: "Hari 2 - 04.30", activity: "Fenomena Blue Fire & Sunrise Refleksi Puncak" },
      { time: "Hari 2 - 08.30", activity: "Kembali ke Basecamp, Sarapan & Selesai" }
    ]
  },
  {
    id: "rafting-songgon",
    title: "Rafting Songgon, Banyuwangi",
    region: "banyuwangi",
    categories: ["rafting"],
    desc: "Menyusuri hutan tropis lebat di sepanjang Sungai Songgon dengan kombinasi arus tenang dan jeram menantang.",
    pax: "20-150 Pax",
    duration: "Half Day",
    badge: "",
    image: "assets/img/20260724_141514_0004.webp",
    alt: "Pemandangan Sungai Songgon Banyuwangi dikelilingi hutan tropis",
    benefits: [
      "Pengalaman susur sungai di tengah rimbunnya hutan pinus Songgon",
      "Sensasi jeram aman namun mendebarkan untuk semua kalangan usia",
      "Fasilitas lengkap dengan saung istirahat khas Banyuwangi"
    ],
    facilities: [
      "Perahu & Perlengkapan Arung Jeram Safety Complete",
      "Guide Lokal Berpengalaman",
      "Kuliner Khas Banyuwangi (Nasi Tempong)",
      "Asuransi Diri & Fasilitas Bilas"
    ],
    rundown: [
      { time: "09.00 - 09.30", activity: "Registrasi & Briefing Sungai Songgon" },
      { time: "09.30 - 11.30", activity: "Pengarungan Sungai & Stop Photo Spot Hutan Pinus" },
      { time: "11.30 - 13.00", activity: "Makan Nasi Tempong & Penutupan" }
    ]
  },
  {
    id: "kromong-mojokerto",
    title: "Rafting Kromong, Pacet Mojokerto",
    region: "mojokerto",
    categories: ["rafting"],
    desc: "Susuri jernihnya Sungai Kromong di Pacet dengan bebatuan alami dan suasana pegunungan yang sejuk.",
    pax: "20-200 Pax",
    duration: "Half Day",
    badge: "",
    image: "assets/img/20260724_141514_0005.webp",
    alt: "Sungai Kromong di Pacet, Mojokerto dengan bebatuan alami dan air jernih",
    benefits: [
      "Lokasi sangat dekat dan mudah diakses dari Surabaya / Sidoarjo",
      "Air sungai jernih dingin alami dari lereng Gunung Welirang",
      "Bisa dirangkai dengan berendam di Pemandian Air Panas Padusan"
    ],
    facilities: [
      "Peralatan Rafting SNI Complete",
      "Guide Arung Jeram Sertifikasi",
      "Makan Siang & Wedang Jahe Hangat",
      "Tiket Masuk Kawasan Wisata Padusan"
    ],
    rundown: [
      { time: "08.30 - 09.00", activity: "Tiba di Basecamp Pacet & Fitting Helm" },
      { time: "09.00 - 11.30", activity: "Susur Sungai Kromong & Foto Bersama" },
      { time: "11.30 - 13.00", activity: "Makan Siang & Bebas Berendam Air Panas" }
    ]
  },
  {
    id: "trawas-mojokerto",
    title: "Team Building Trawas, Mojokerto",
    region: "mojokerto",
    categories: ["resort", "games"],
    desc: "Program team building di venue outdoor sejuk kawasan Trawas, cocok untuk workshop sekaligus rekreasi tim.",
    pax: "30-300 Pax",
    duration: "Full Day",
    badge: "bestseller",
    image: "assets/img/20260724_141514_0006.webp",
    alt: "Sesi workshop dan brainstorming tim korporat di venue Trawas Mojokerto",
    benefits: [
      "Lokasi favorit Jawa Timur dengan pemandangan Gunung Penanggungan",
      "Fasilitas aula luas untuk kombinasi rapat indoor & games outdoor",
      "Sangat fleksibel disesuaikan dengan tema rapat tahunan instansi"
    ],
    facilities: [
      "Fasilitator Utama & Game Master",
      "Sewa Lapangan Hijau & Sound System Outdoor",
      "Prasmanan Khas Trawas + 2x Coffee Break",
      "Banner Event Custom & Foto Dokumentasi"
    ],
    rundown: [
      { time: "08.00 - 09.00", activity: "Opening Ceremony & Fun Warm-up Games" },
      { time: "09.00 - 12.00", activity: "Synergy & Effective Communication Challenge" },
      { time: "12.00 - 13.30", activity: "Makan Siang Prasmanan & Rest" },
      { time: "13.30 - 15.30", activity: "Final Mission Challenge & Debrief" }
    ]
  },
  {
    id: "glamping-arjuno",
    title: "Glamping Gunung Arjuno, Batu",
    region: "batu",
    categories: ["gunung", "resort"],
    desc: "Retreat premium di kaki Gunung Arjuno dengan tenda glamping, cocok untuk kombinasi rapat kerja dan relaksasi tim.",
    pax: "10-80 Pax",
    duration: "2D1N Stay",
    badge: "hotdeal",
    image: "assets/img/20260724_141514_0007.webp",
    alt: "Area glamping premium di kaki Gunung Arjuno kawasan Batu",
    benefits: [
      "Pengalaman berkemah mewah dengan kasur empuk dan fasilitas kamar mandi privat",
      "Suasana hening alami yang mendukung diskusi keputusan strategis perusahaan",
      "Barbeque malam hari diiringi live akustik musik"
    ],
    facilities: [
      "Unit Tenda Glamping Luxury 2D1N",
      "Makan 3x + Barbeque Dinner",
      "Fasilitator Retreat & Outbound Games",
      "Api Unggun & Sound System Akustik"
    ],
    rundown: [
      { time: "Hari 1 - 14.00", activity: "Welcome Drink & Check-in Glamping Arjuno" },
      { time: "Hari 1 - 16.00", activity: "Light Outdoor Bonding & Sunset Gathering" },
      { time: "Hari 1 - 19.00", activity: "BBQ Dinner, Api Unggun & Sesi Refleksi Tim" },
      { time: "Hari 2 - 07.00", activity: "Sarapan Pagi, Morning Yoga & Check-out" }
    ]
  }
];

function getPackageById(id) {
  return PACKAGES.find(p => p.id === id) || PACKAGES[0];
}

const packageGrid = document.getElementById("packageGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const regionNote = document.getElementById("regionNote");
const categoryButtons = document.querySelectorAll("#categoryFilters .btn-pill");
const regionButtons = document.querySelectorAll("#regionFilters .btn-pill");

let activeCategory = "semua";
let activeRegion = "semua";

function badgeMarkup(pkg) {
  if (pkg.badge === "bestseller") {
    return '<span class="badge-hot position-absolute" style="top:1rem; left:1rem;">Best Seller</span>';
  }
  if (pkg.badge === "hotdeal") {
    return '<span class="badge-hot position-absolute" style="top:1rem; left:1rem;">Hot Deal</span>';
  }
  return (
    '<span class="badge-region position-absolute" style="top:1rem; left:1rem;">' +
    REGION_LABELS[pkg.region] +
    "</span>"
  );
}

function cardMarkup(pkg) {
  const categoryChips = pkg.categories
    .map((c) => '<span class="badge-category me-1">' + CATEGORY_LABELS[c] + "</span>")
    .join("");
  const waMessage =
    "Halo Admin Outbound Jatim, saya tertarik dengan paket " +
    pkg.title +
    " (" +
    REGION_LABELS[pkg.region] +
    "). Mohon informasi ketersediaan jadwal dan penawaran detailnya.";

  return (
    '<div class="col-md-6 col-lg-4 package-card" data-region="' +
    pkg.region +
    '" data-categories="' +
    pkg.categories.join(",") +
    '">' +
    '<div class="card-oj h-100 d-flex flex-column">' +
    '<div class="position-relative" style="height:13rem; overflow:hidden;">' +
    '<a href="paket-detail.html?id=' + pkg.id + '">' +
    '<img class="w-100 h-100" style="object-fit:cover;" src="' +
    pkg.image +
    '" alt="' +
    pkg.alt +
    '" loading="lazy" />' +
    '</a>' +
    badgeMarkup(pkg) +
    "</div>" +
    '<div class="p-4 d-flex flex-column flex-grow-1">' +
    '<h3 class="fs-5 mb-2"><a href="paket-detail.html?id=' + pkg.id + '" class="text-navy">' +
    pkg.title +
    "</a></h3>" +
    '<div class="mb-3">' +
    categoryChips +
    "</div>" +
    '<p class="small text-muted-custom flex-grow-1">' +
    pkg.desc +
    "</p>" +
    '<div class="d-flex align-items-center gap-3 text-muted-custom small border-top border-bottom py-2 mb-3">' +
    '<span><i class="bi bi-people me-1"></i>' +
    pkg.pax +
    "</span>" +
    '<span><i class="bi bi-clock me-1"></i>' +
    pkg.duration +
    "</span>" +
    "</div>" +
    '<div class="card-action-btns mt-auto">' +
    '<a class="btn btn-outline-navy-pill btn-sm-custom" href="paket-detail.html?id=' + pkg.id + '">Lihat Detail <i class="bi bi-chevron-right"></i></a>' +
    '<a class="btn btn-orange btn-sm-custom" href="' + waLink(waMessage) + '" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> Pesan WA</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

function renderPackages() {
  if (!packageGrid) return;
  packageGrid.innerHTML = PACKAGES.map(cardMarkup).join("");
  applyFilters();
}

function applyFilters() {
  const cards = document.querySelectorAll(".package-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const region = card.getAttribute("data-region");
    const categories = card.getAttribute("data-categories").split(",");

    const matchRegion = activeRegion === "semua" || region === activeRegion;
    const matchCategory = activeCategory === "semua" || categories.includes(activeCategory);

    if (matchRegion && matchCategory) {
      card.classList.remove("d-none");
      visibleCount++;
    } else {
      card.classList.add("d-none");
    }
  });

  if (resultCount) resultCount.textContent = "(" + visibleCount + ")";
  if (emptyState) emptyState.classList.toggle("d-none", visibleCount !== 0);
}

function syncRegionAvailability() {
  regionButtons.forEach((btn) => {
    const region = btn.getAttribute("data-region");
    const isRestricted =
      activeCategory === "gunung" && REGIONS_WITHOUT_MOUNTAIN.includes(region);

    btn.classList.toggle("d-none", isRestricted);

    if (isRestricted && activeRegion === region) {
      activeRegion = "semua";
      regionButtons.forEach((b) => b.classList.remove("active"));
      const allBtn = document.querySelector('#regionFilters [data-region="semua"]');
      if (allBtn) allBtn.classList.add("active");
    }
  });

  if (regionNote) regionNote.style.display = activeCategory === "gunung" ? "block" : "none";
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-category");
    syncRegionAvailability();
    applyFilters();
  });
});

regionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("d-none")) return;
    regionButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeRegion = btn.getAttribute("data-region");
    applyFilters();
  });
});

const resetFilterBtn = document.getElementById("resetFilterBtn");
if (resetFilterBtn) {
  resetFilterBtn.addEventListener("click", () => {
    activeCategory = "semua";
    activeRegion = "semua";
    categoryButtons.forEach((b) => b.classList.remove("active"));
    const catAll = document.querySelector('#categoryFilters [data-category="semua"]');
    if (catAll) catAll.classList.add("active");
    syncRegionAvailability();
    regionButtons.forEach((b) => b.classList.remove("active"));
    const regAll = document.querySelector('#regionFilters [data-region="semua"]');
    if (regAll) regAll.classList.add("active");
    applyFilters();
  });
}

// Form Request Proposal -> kirim ke WhatsApp
const proposalForm = document.getElementById("proposalForm");
if (proposalForm) {
  proposalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const company = document.getElementById("proposalCompany").value.trim();
    const pax = document.getElementById("proposalPax").value;
    const contact = document.getElementById("proposalContact").value.trim();

    const message =
      "Halo Admin Outbound Jatim, saya ingin meminta proposal penawaran khusus.\n" +
      "Nama Perusahaan: " + company + "\n" +
      "Estimasi Peserta: " + pax + "\n" +
      "Kontak: " + contact;

    openWhatsApp(message);
  });
}

document.addEventListener("DOMContentLoaded", renderPackages);
