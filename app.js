// =============================================
// ⚙️  KONFIGURASI
// =============================================
const WA = "6283865531532";
const NAMA_WARUNG = "Clarissa Telur";

// =============================================
// 📦  KATALOG
// Untuk tambah/edit produk: isi di sini
// id    : unik, huruf+angka, tanpa spasi
// n     : nama produk
// e     : emoji
// d     : keterangan singkat (satuan/harga/dll) — kosongkan jika tidak ada
// bg    : warna background kartu (teal3/yellow/pink/green/gray)
// custom: true = pelanggan ketik sendiri (untuk "dll")
// =============================================
const DATA = [
  {
    cat: "Sembako", icon: "🛒",
    items: [
      { id:"t1",  n:"Telur Ayam",      e:"🥚", d:"Butir / kg / karpet", bg:"yellow" },
      { id:"b1",  n:"Beras",           e:"🌾", d:"per kg / liter",      bg:"yellow" },
      { id:"g1",  n:"Gas Elpiji 3kg",  e:"🔵", d:"",                    bg:"teal3"  },
      { id:"m1",  n:"Minyak Curah",    e:"🫙", d:"per kg / liter",      bg:"yellow" },
      { id:"m2",  n:"Minyak Premium",  e:"🫙", d:"",                    bg:"yellow" },
      { id:"m3",  n:"Minyak 1L",       e:"🫙", d:"",                    bg:"yellow" },
      { id:"m4",  n:"Minyak 2L",       e:"🫙", d:"",                    bg:"yellow" },
    ]
  },
  {
    cat: "Bumbu Dapur", icon: "🌿",
    items: [
      { id:"gm1", n:"Gula Merah 250gr",        e:"🍫", d:"",                bg:"yellow" },
      { id:"gm2", n:"Gula Merah 1kg",          e:"🍫", d:"",                bg:"yellow" },
      { id:"gp1", n:"Gula Putih Sachet",       e:"🍬", d:"",                bg:"yellow" },
      { id:"gp2", n:"Gula Putih 250gr",        e:"🍬", d:"",                bg:"yellow" },
      { id:"gp3", n:"Gula Putih 1kg",          e:"🍬", d:"",                bg:"yellow" },
      { id:"dk1", n:"Desaku Merica",           e:"🌶️", d:"",               bg:"green"  },
      { id:"dk2", n:"Desaku Marinasi",         e:"🌿", d:"",                bg:"green"  },
      { id:"dk3", n:"Desaku Ketumbar",         e:"🌿", d:"",                bg:"green"  },
      { id:"dk4", n:"Desaku Kunyit",           e:"🌿", d:"",                bg:"green"  },
      { id:"dk5", n:"Desaku Balado",           e:"🌶️", d:"",               bg:"green"  },
      { id:"dk6", n:"Desaku Bawang Putih",     e:"🧄", d:"",                bg:"green"  },
      { id:"kc1", n:"Kecap Bango Sachet",      e:"🍶", d:"",                bg:"teal3"  },
      { id:"kc2", n:"Kecap Bango",             e:"🍶", d:"Rp 3.000",        bg:"teal3"  },
      { id:"kc3", n:"Kecap ABC Sachet",        e:"🍶", d:"",                bg:"teal3"  },
      { id:"kc4", n:"Kecap ABC",               e:"🍶", d:"Rp 2.000",        bg:"teal3"  },
      { id:"sc1", n:"Saos",                    e:"🍅", d:"Rp 500 – 1.000",  bg:"pink"   },
      { id:"sn1", n:"Santan Bubuk",            e:"🥥", d:"",                bg:"yellow" },
      { id:"sn2", n:"Santan Cair",             e:"🥥", d:"",                bg:"yellow" },
      { id:"bl1", n:"Bumbu Sinti",             e:"🌿", d:"",                bg:"green"  },
      { id:"bl2", n:"Garam",                   e:"🧂", d:"",                bg:"gray"   },
      { id:"bl3", n:"Mecin / Penyedap",        e:"✨", d:"Rp 2.000 – 5.000",bg:"gray"   },
      { id:"bl4", n:"Royko",                   e:"🥄", d:"Rp 500 – 5.000",  bg:"teal3"  },
      { id:"sa1", n:"Saori Saos Tiram",        e:"🌊", d:"",                bg:"teal3"  },
      { id:"sa2", n:"Saori Saos Lada Hitam",   e:"🌊", d:"",                bg:"teal3"  },
      { id:"sa3", n:"Saori Saos Asam Manis",   e:"🌊", d:"",                bg:"teal3"  },
      { id:"rc1", n:"Racik Ayam Goreng",       e:"🍗", d:"",                bg:"yellow" },
      { id:"rc2", n:"Racik Nasi Goreng",       e:"🍳", d:"",                bg:"yellow" },
      { id:"rc3", n:"Racik Sayur Sop",         e:"🥣", d:"",                bg:"yellow" },
      { id:"rc4", n:"Racik Sayur Asem",        e:"🥣", d:"",                bg:"yellow" },
      { id:"rc5", n:"Racik Lodeh",             e:"🥣", d:"",                bg:"yellow" },
      { id:"rc6", n:"Racik Rendang",           e:"🍖", d:"",                bg:"yellow" },
      { id:"rc7", n:"Racik Gulai",             e:"🍖", d:"",                bg:"yellow" },
      { id:"rc8", n:"Racik Opor Ayam",         e:"🍗", d:"",                bg:"yellow" },
      { id:"bc1", n:"Boncabe",                 e:"🌶️", d:"",               bg:"pink"   },
      { id:"st1", n:"Sambel Terasi",           e:"🌶️", d:"",               bg:"pink"   },
      { id:"tr1", n:"Terasi Udang",            e:"🦐", d:"",                bg:"pink"   },
      { id:"tf1", n:"Tepung Terigu 250gr",     e:"🌾", d:"",                bg:"gray"   },
      { id:"tf2", n:"Tepung Terigu 1kg",       e:"🌾", d:"",                bg:"gray"   },
      { id:"tf3", n:"Tepung Aci 250gr",        e:"🌾", d:"",                bg:"gray"   },
      { id:"tf4", n:"Tepung Aci 1kg",          e:"🌾", d:"",                bg:"gray"   },
      { id:"tf5", n:"Tepung Sasa Serbaguna",   e:"🌾", d:"",                bg:"gray"   },
      { id:"tf6", n:"Tepung Beras",            e:"🌾", d:"",                bg:"gray"   },
      { id:"tf7", n:"Tepung Ketan",            e:"🌾", d:"",                bg:"gray"   },
    ]
  },
  {
    cat: "Mie", icon: "🍜",
    items: [
      { id:"ik1", n:"Indomie Ayam Bawang",       e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik2", n:"Indomie Soto",               e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik3", n:"Indomie Kari Ayam",          e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik4", n:"Indomie Ayam Jerit",         e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik5", n:"Indomie Kocok Bandung",      e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik6", n:"Indomie Empal Gentong",      e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ik7", n:"Indomie Rawon",              e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"ig1", n:"Indomie Goreng",             e:"🍜", d:"goreng", bg:"yellow" },
      { id:"ig2", n:"Indomie Ayam Geprek",        e:"🍜", d:"goreng", bg:"yellow" },
      { id:"ig3", n:"Indomie Rica-rica",          e:"🍜", d:"goreng", bg:"yellow" },
      { id:"ig4", n:"Indomie Sambal Ijo",         e:"🍜", d:"goreng", bg:"yellow" },
      { id:"ig5", n:"Indomie Aceh",               e:"🍜", d:"goreng", bg:"yellow" },
      { id:"ig6", n:"Indomie Rendang",            e:"🍜", d:"goreng", bg:"yellow" },
      { id:"sd1", n:"Sedap Kuah Selection Soup",  e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"sd2", n:"Sedap Laksa Singapore",      e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"sd3", n:"Sedap Kari Spesial",         e:"🍜", d:"kuah",  bg:"teal3"  },
      { id:"sd4", n:"Sedap Goreng",               e:"🍜", d:"goreng", bg:"yellow" },
      { id:"sk1", n:"Sukses Kuah Soto",           e:"🍜", d:"isi 2 · kuah", bg:"teal3"  },
      { id:"sk2", n:"Sukses Kuah Ayam Bawang",    e:"🍜", d:"isi 2 · kuah", bg:"teal3"  },
      { id:"sk3", n:"Sukses Goreng Aceh",         e:"🍜", d:"isi 2 · goreng",bg:"yellow"},
      { id:"sk4", n:"Sukses Goreng Ayam Kecap",   e:"🍜", d:"isi 2 · goreng",bg:"yellow"},
      { id:"sk5", n:"Sukses Goreng Ayam Kremes",  e:"🍜", d:"isi 2 · goreng",bg:"yellow"},
      { id:"ml1", n:"Mie Sakura",                 e:"🍜", d:"",      bg:"pink"   },
      { id:"ml2", n:"Spageti WOW",                e:"🍝", d:"",      bg:"pink"   },
      { id:"ml3", n:"Bihun Jagung",               e:"🍜", d:"",      bg:"pink"   },
      { id:"ml4", n:"Bihunku",                    e:"🍜", d:"",      bg:"pink"   },
      { id:"ml5", n:"Mie Gelas",                  e:"🍜", d:"",      bg:"pink"   },
    ]
  },
  {
    cat: "Minuman", icon: "☕",
    items: [
      { id:"kp1",  n:"Kapal Api Mix",         e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp2",  n:"Goodday Cappuccino",    e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp3",  n:"Goodday Moccachino",    e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp4",  n:"Goodday Coklat",        e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp5",  n:"Luwak",                 e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp6",  n:"Creamy Latte",          e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp7",  n:"Top Kopi Gula Aren",    e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp8",  n:"Nescafe",               e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp9",  n:"Indocafe",              e:"☕", d:"kopi",   bg:"yellow" },
      { id:"kp10", n:"Kopikap",               e:"☕", d:"kopi",   bg:"yellow" },
      { id:"th1",  n:"Maxtea Lemontea",       e:"🍵", d:"teh",   bg:"green"  },
      { id:"th2",  n:"Maxtea Teh Tarik",      e:"🍵", d:"teh",   bg:"green"  },
      { id:"th3",  n:"ABC Susu",              e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th4",  n:"ABC Klepon",            e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th5",  n:"Susu Indomilk Putih",   e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th6",  n:"Susu Indomilk Coklat",  e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th7",  n:"Energen Vanila",         e:"🥣", d:"sereal", bg:"yellow" },
      { id:"th8",  n:"Energen Coklat",         e:"🥣", d:"sereal", bg:"yellow" },
      { id:"th9",  n:"Energen Kurma",          e:"🥣", d:"sereal", bg:"yellow" },
      { id:"th10", n:"Anlene",                 e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th11", n:"Milo",                   e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th12", n:"Chocolatos Matcha",      e:"🍵", d:"",      bg:"green"  },
      { id:"th13", n:"Chocolatos Coklat",      e:"🍵", d:"",      bg:"green"  },
      { id:"th14", n:"Drink Beng-beng",        e:"🍫", d:"",      bg:"yellow" },
      { id:"th15", n:"Susu Jahe AMH",          e:"🥛", d:"",      bg:"teal3"  },
      { id:"th16", n:"Dancow Putih",           e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th17", n:"Dancow Coklat",          e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th18", n:"Champion",               e:"🥛", d:"susu",  bg:"teal3"  },
      { id:"th19", n:"Teh Celup",              e:"🍵", d:"teh",   bg:"green"  },
      { id:"th20", n:"Teh Tongji",             e:"🍵", d:"teh",   bg:"green"  },
      { id:"th21", n:"Levontea",               e:"🍵", d:"teh",   bg:"green"  },
      { id:"th22", n:"Adem Sari",              e:"🧃", d:"",      bg:"green"  },
      { id:"th23", n:"Isoplus",                e:"🧃", d:"",      bg:"green"  },
      { id:"th24", n:"Teh Pucuk",              e:"🍵", d:"teh",   bg:"green"  },
      { id:"th25", n:"Teh Kotak",              e:"🍵", d:"teh",   bg:"green"  },
      { id:"th26", n:"Nipis Madu",             e:"🍋", d:"",      bg:"yellow" },
      { id:"th27", n:"Floridina",              e:"🍊", d:"",      bg:"yellow" },
      { id:"th28", n:"Yakult",                 e:"🥛", d:"",      bg:"pink"   },
      { id:"th29", n:"Susu Kotak",             e:"🥛", d:"",      bg:"teal3"  },
      { id:"th30", n:"Milku",                  e:"🥛", d:"",      bg:"teal3"  },
      { id:"th31", n:"Real Good",              e:"🥛", d:"",      bg:"teal3"  },
      { id:"th32", n:"Kratingdaeng",           e:"⚡", d:"",      bg:"yellow" },
      { id:"th33", n:"C-1000",                 e:"🍋", d:"",      bg:"yellow" },
      { id:"th34", n:"Yogurt",                 e:"🥛", d:"",      bg:"pink"   },
      { id:"th35", n:"Sierra Botol",           e:"💧", d:"",      bg:"teal3"  },
      { id:"th36", n:"Cleo",                   e:"💧", d:"",      bg:"teal3"  },
      { id:"th37", n:"Galon",                  e:"💧", d:"",      bg:"teal3"  },
    ]
  },
  {
    cat: "Jajanan", icon: "🍿",
    items: [
      { id:"pm1", n:"Kopiko Susu",      e:"🍬", d:"permen", bg:"yellow" },
      { id:"pm2", n:"Kiss",             e:"🍬", d:"permen", bg:"yellow" },
      { id:"pm3", n:"Permen Asem",      e:"🍬", d:"permen", bg:"yellow" },
      { id:"pm4", n:"Lollipop Milkita", e:"🍭", d:"permen", bg:"yellow" },
      { id:"pm5", n:"Permen Karet",     e:"🍬", d:"permen", bg:"yellow" },
      { id:"ku1", n:"Good Time",        e:"🍪", d:"kue",    bg:"teal3"  },
      { id:"ku2", n:"Coklat Stik",      e:"🍫", d:"kue",    bg:"teal3"  },
      { id:"ku3", n:"Astor",            e:"🍫", d:"kue",    bg:"teal3"  },
      { id:"ku4", n:"Beng-beng",        e:"🍫", d:"kue",    bg:"teal3"  },
      { id:"ku5", n:"Sari Gandum",      e:"🌾", d:"kue",    bg:"teal3"  },
      { id:"ku6", n:"Slai O'lai",       e:"🍪", d:"kue",    bg:"teal3"  },
      { id:"ku7", n:"Oreo",             e:"🍪", d:"kue",    bg:"teal3"  },
      { id:"ku8", n:"Bolu Oreo",        e:"🍰", d:"kue",    bg:"teal3"  },
      { id:"ku9", n:"Bonita",           e:"🍪", d:"kue",    bg:"teal3"  },
      { id:"ku10",n:"Waffle",           e:"🧇", d:"kue",    bg:"teal3"  },
      { id:"ku11",n:"Coki-coki",        e:"🍫", d:"kue",    bg:"teal3"  },
      { id:"ku12",n:"Agar-agar",        e:"🟩", d:"",       bg:"green"  },
      { id:"ck1", n:"Chitato BBQ",      e:"🥔", d:"ciki",   bg:"yellow" },
      { id:"ck2", n:"Potato Lite",      e:"🥔", d:"ciki",   bg:"yellow" },
      { id:"ck3", n:"French Fries",     e:"🍟", d:"ciki",   bg:"yellow" },
      { id:"ck4", n:"Ciki Ball",        e:"🟡", d:"ciki",   bg:"yellow" },
      { id:"ck5", n:"Taro",             e:"🟣", d:"ciki",   bg:"yellow" },
      { id:"ck6", n:"Twist",            e:"🌀", d:"ciki",   bg:"yellow" },
      { id:"ck7", n:"Caca",             e:"🍿", d:"ciki",   bg:"yellow" },
      { id:"ck8", n:"Sukro",            e:"🥜", d:"ciki",   bg:"yellow" },
      { id:"ck9", n:"Kremes",           e:"🍿", d:"ciki",   bg:"yellow" },
      { id:"ck10",n:"Rumput Laut",      e:"🌿", d:"ciki",   bg:"green"  },
      { id:"ck11",n:"Siip",             e:"🍿", d:"ciki",   bg:"yellow" },
      { id:"ck12",n:"Coklat",           e:"🍫", d:"ciki",   bg:"teal3"  },
      { id:"ck13",n:"Buryam",           e:"🍿", d:"ciki",   bg:"yellow" },
      { id:"ck14",n:"MP-ASI Beras Merah",e:"🌾",d:"",      bg:"green"  },
      // CUSTOM — pelanggan ketik sendiri
      { id:"jaj_custom", n:"Jajanan Lainnya / Dll", e:"✏️", d:"ketik sendiri", bg:"gray", custom:true },
    ]
  },
  {
    cat: "Sabun & Bersih", icon: "🧼",
    items: [
      { id:"sm1", n:"Shinzui",              e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sm2", n:"GIV",                  e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sm3", n:"Nuvo Batang",          e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sm4", n:"Nuvo Cair",            e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sm5", n:"Lifebouy",             e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sm6", n:"Harmoni",              e:"🧼", d:"sabun mandi",  bg:"teal3"  },
      { id:"sw1", n:"Sabun Pepaya",         e:"🧼", d:"sabun wajah",  bg:"pink"   },
      { id:"sw2", n:"Glow & Lovely",        e:"🧼", d:"sabun wajah",  bg:"pink"   },
      { id:"sw3", n:"Hadalabo",             e:"🧼", d:"sabun wajah",  bg:"pink"   },
      { id:"sp1", n:"Tresemme",             e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp2", n:"Pantene",              e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp3", n:"Sunsilk",              e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp4", n:"Head & Shoulders",     e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp5", n:"Clear",                e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp6", n:"Zinc",                 e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp7", n:"Rejoice",              e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp8", n:"Kodomo",               e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp9", n:"Dove",                 e:"🧴", d:"sampo",        bg:"teal3"  },
      { id:"sp10",n:"Kondisioner Pantene",  e:"🧴", d:"kondisioner",  bg:"teal3"  },
      { id:"sp11",n:"Kondisioner Dove",     e:"🧴", d:"kondisioner",  bg:"teal3"  },
      { id:"gg1", n:"Pepsodent",            e:"🦷", d:"pasta gigi",   bg:"green"  },
      { id:"gg2", n:"Ciptadent",            e:"🦷", d:"pasta gigi",   bg:"green"  },
      { id:"gg3", n:"Sikat Gigi",           e:"🪥", d:"",             bg:"green"  },
      { id:"cb1", n:"Daia Besar",           e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb2", n:"Daia Kecil",           e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb3", n:"Jaz 1",                e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb4", n:"Rinso Cair",           e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb5", n:"Rinso Bubuk",          e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb6", n:"So Klin Liquid",       e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb7", n:"So Soft",              e:"🌸", d:"pelembut",     bg:"pink"   },
      { id:"cb8", n:"Gentle Gen",           e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb9", n:"Proclin",              e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb10",n:"Downy",                e:"🌸", d:"pelembut",     bg:"pink"   },
      { id:"cb11",n:"Royale",               e:"🌸", d:"pelembut",     bg:"pink"   },
      { id:"cb12",n:"Molto",                e:"🌸", d:"pelembut",     bg:"pink"   },
      { id:"cb13",n:"Colek Ekonomi",        e:"🫧", d:"cuci baju",    bg:"teal3"  },
      { id:"cb14",n:"Kamper",               e:"🌿", d:"",             bg:"green"  },
      { id:"cb15",n:"Citrun",               e:"🍋", d:"",             bg:"yellow" },
      { id:"cb16",n:"Rapika",               e:"🫧", d:"",             bg:"teal3"  },
      { id:"cb17",n:"Kispray",              e:"🫧", d:"",             bg:"teal3"  },
      { id:"lt1", n:"So Klin Lantai",       e:"🧹", d:"pembersih lantai", bg:"teal3" },
      { id:"lt2", n:"Supersol",             e:"🧹", d:"pembersih lantai", bg:"teal3" },
      { id:"cp1", n:"Mama Lemon",           e:"🍋", d:"cuci piring · Rp 2.000–4.000", bg:"yellow" },
      { id:"cp2", n:"Sunlight",             e:"🍋", d:"cuci piring · Rp 2.000–5.000", bg:"yellow" },
      { id:"cp3", n:"Ekonomi",              e:"💧", d:"cuci piring",  bg:"teal3"  },
    ]
  },
  {
    cat: "Obat-obatan", icon: "💊",
    items: [
      { id:"ob1", n:"Promag",              e:"💊", d:"",             bg:"pink"   },
      { id:"ob2", n:"Oskadon Biru",        e:"💊", d:"",             bg:"pink"   },
      { id:"ob3", n:"Oskadon SP",          e:"💊", d:"",             bg:"pink"   },
      { id:"ob4", n:"Remacil",             e:"💊", d:"",             bg:"pink"   },
      { id:"ob5", n:"Bodrex",              e:"💊", d:"",             bg:"pink"   },
      { id:"ob6", n:"Bodrex Extra",        e:"💊", d:"",             bg:"pink"   },
      { id:"ob7", n:"Panadol",             e:"💊", d:"",             bg:"pink"   },
      { id:"ob8", n:"Panadol Extra",       e:"💊", d:"",             bg:"pink"   },
      { id:"ob9", n:"Paracetamol",         e:"💊", d:"",             bg:"pink"   },
      { id:"ob10",n:"Mixagrip Flu",        e:"💊", d:"",             bg:"pink"   },
      { id:"ob11",n:"Bodrexin",            e:"💊", d:"",             bg:"pink"   },
      { id:"ob12",n:"Ultraflu",            e:"💊", d:"",             bg:"pink"   },
      { id:"ob13",n:"Paramex",             e:"💊", d:"",             bg:"pink"   },
      { id:"ob14",n:"Diapet",              e:"💊", d:"",             bg:"pink"   },
      { id:"ob15",n:"Decolgen",            e:"💊", d:"",             bg:"pink"   },
      { id:"ob16",n:"Komix",               e:"💊", d:"",             bg:"pink"   },
      { id:"ob17",n:"Salonpas",            e:"🩹", d:"",             bg:"gray"   },
      { id:"ob18",n:"Salonpas Koyo Cabe",  e:"🌶️",d:"",            bg:"pink"   },
      { id:"ob19",n:"Hansaplast",          e:"🩹", d:"",             bg:"gray"   },
      { id:"ob20",n:"Kayu Putih",          e:"🌿", d:"",             bg:"green"  },
      { id:"ny1", n:"HIT Electric",        e:"⚡", d:"obat nyamuk",  bg:"yellow" },
      { id:"ny2", n:"HIT Bakar Kertas",    e:"💨", d:"obat nyamuk",  bg:"gray"   },
      { id:"ny3", n:"Autan",               e:"🦟", d:"obat nyamuk",  bg:"green"  },
    ]
  },
  {
    cat: "Kecantikan", icon: "🩷",
    items: [
      { id:"kc1", n:"Moist Scoora",          e:"🩷", d:"",           bg:"pink"   },
      { id:"kc2", n:"Moist G2G",             e:"🩷", d:"",           bg:"pink"   },
      { id:"kc3", n:"Kapas",                 e:"☁️", d:"",           bg:"pink"   },
      { id:"kc4", n:"Glow & Lovely Cream",   e:"✨", d:"",           bg:"pink"   },
      { id:"kc5", n:"Tisu Kecil",            e:"🧻", d:"",           bg:"gray"   },
      { id:"kc6", n:"Tisu Sedang",           e:"🧻", d:"",           bg:"gray"   },
      { id:"kc7", n:"Tisu Besar",            e:"🧻", d:"",           bg:"gray"   },
      { id:"kc8", n:"Tisu Basah Kecil",      e:"🧻", d:"",           bg:"gray"   },
      { id:"kc9", n:"Tisu Basah Besar",      e:"🧻", d:"",           bg:"gray"   },
      { id:"kc10",n:"Elif",                  e:"🩷", d:"",           bg:"pink"   },
      { id:"kc11",n:"Marina Handbody",       e:"🧴", d:"",           bg:"pink"   },
      { id:"kc12",n:"Kotek Besar",           e:"🩷", d:"",           bg:"pink"   },
      { id:"kc13",n:"Kotek Kecil",           e:"🩷", d:"",           bg:"pink"   },
      { id:"kc14",n:"Pemper M",              e:"👶", d:"",           bg:"teal3"  },
      { id:"kc15",n:"Pemper L",              e:"👶", d:"",           bg:"teal3"  },
      { id:"kc16",n:"Pemper XL",             e:"👶", d:"",           bg:"teal3"  },
      { id:"kc17",n:"Pemper Lansia",         e:"🧓", d:"",           bg:"teal3"  },
    ]
  },
  {
    cat: "Rokok", icon: "🚬",
    items: [
      { id:"rk1", n:"Djarum Coklat",       e:"🚬", d:"rokok",      bg:"gray"   },
      { id:"rk2", n:"Samsu",               e:"🚬", d:"rokok",      bg:"gray"   },
      { id:"rk3", n:"Super",               e:"🚬", d:"rokok",      bg:"gray"   },
      { id:"rk4", n:"Magnum",              e:"🚬", d:"rokok",      bg:"gray"   },
    ]
  },
  {
    cat: "Top Up & Tagihan", icon: "💳",
    items: [
      { id:"vc1", n:"Voucher WiFi",        e:"📶", d:"Rp 2.500–50.000", bg:"teal3" },
      { id:"vc2", n:"Pulsa",               e:"📱", d:"",           bg:"teal3"  },
      { id:"vc3", n:"Paket Internet",      e:"📡", d:"",           bg:"teal3"  },
      { id:"vc4", n:"Token PLN",           e:"⚡", d:"",           bg:"yellow" },
      { id:"vc5", n:"Tagihan PLN",         e:"⚡", d:"",           bg:"yellow" },
      { id:"vc6", n:"BPJS",                e:"🏥", d:"",           bg:"teal3"  },
      { id:"vc7", n:"PDAM",                e:"💧", d:"",           bg:"teal3"  },
      { id:"vc8", n:"Top Up Dana",         e:"💳", d:"",           bg:"teal3"  },
      { id:"vc9", n:"Top Up ShopeePay",    e:"🛍️", d:"",          bg:"teal3"  },
      { id:"vc10",n:"Top Up GoPay",        e:"💚", d:"",           bg:"teal3"  },
      { id:"vc11",n:"Top Up Game",         e:"🎮", d:"",           bg:"teal3"  },
      { id:"vc12",n:"Top Up Maxim",        e:"🚗", d:"",           bg:"teal3"  },
      { id:"vc13",n:"Top Up Grab",         e:"🚙", d:"",           bg:"teal3"  },
      { id:"vc14",n:"Top Up OVO",          e:"💜", d:"",           bg:"teal3"  },
      { id:"vc15",n:"Top Up Link Aja",     e:"🔴", d:"",           bg:"teal3"  },
      { id:"vc16",n:"Tarik Tunai",         e:"💵", d:"",           bg:"yellow" },
    ]
  },
  {
    cat: "Lainnya", icon: "📦",
    items: [
      { id:"at1", n:"Buku",                e:"📓", d:"ATK",        bg:"teal3"  },
      { id:"at2", n:"Pulpen",              e:"🖊️", d:"ATK",       bg:"teal3"  },
      { id:"at3", n:"Pensil",              e:"✏️", d:"ATK",       bg:"teal3"  },
      { id:"at4", n:"Penghapus",           e:"🧽", d:"ATK",        bg:"teal3"  },
      { id:"kr1", n:"Kerupuk",             e:"🍘", d:"Rp 1.000–2.000", bg:"yellow" },
      { id:"kr2", n:"Kemplang",            e:"🍘", d:"",           bg:"yellow" },
      { id:"mai1",n:"Mainan & Aksesoris Anak", e:"🧸", d:"tanyakan ke seller", bg:"yellow" },
      // CUSTOM
      { id:"lain_custom", n:"Barang Lainnya / Dll", e:"✏️", d:"ketik sendiri", bg:"gray", custom:true },
    ]
  },
];

// =============================================
// 🔧  STATE & LOGIC
// =============================================
let cart = {};       // { id: qty }
let customItems = []; // [{label}]
let catAktif = "Semua";

function allFlat() {
  let r = [];
  DATA.forEach(g => g.items.forEach(it => r.push({ ...it, cat: g.cat })));
  return r;
}

function itemName(id) {
  for (const g of DATA) for (const it of g.items) if (it.id === id) return it.n;
  return id;
}

// ── RENDER TABS ───────────────────────────
function renderCats() {
  const el = document.getElementById("catRow");
  el.innerHTML = "";
  ["Semua", ...DATA.map(g => g.cat)].forEach(c => {
    const b = document.createElement("button");
    b.className = "cat-btn" + (c === catAktif ? " on" : "");
    const icon = DATA.find(g => g.cat === c)?.icon || "";
    b.textContent = (icon ? icon + " " : "") + c;
    b.onclick = () => { catAktif = c; renderCats(); renderContent(); };
    el.appendChild(b);
  });
}

// ── RENDER GRID ───────────────────────────
function renderContent() {
  const q = document.getElementById("srch").value.trim().toLowerCase();
  const cnt = document.getElementById("content");
  const nr = document.getElementById("noRes");
  cnt.innerHTML = "";

  if (q) {
    const found = allFlat().filter(it =>
      it.n.toLowerCase().includes(q) ||
      it.cat.toLowerCase().includes(q) ||
      (it.d && it.d.toLowerCase().includes(q))
    );
    if (!found.length) { nr.style.display = "block"; return; }
    nr.style.display = "none";
    const g = document.createElement("div"); g.className = "pg";
    found.forEach(it => g.appendChild(makeCard(it)));
    cnt.appendChild(g);
    return;
  }
  nr.style.display = "none";
  const groups = catAktif === "Semua" ? DATA : DATA.filter(g => g.cat === catAktif);
  groups.forEach(g => {
    const title = document.createElement("div");
    title.className = "sec-title";
    title.textContent = g.icon + " " + g.cat;
    cnt.appendChild(title);
    const grid = document.createElement("div"); grid.className = "pg";
    g.items.forEach(it => grid.appendChild(makeCard(it)));
    cnt.appendChild(grid);
  });
}

function makeCard(it) {
  const div = document.createElement("div");
  div.className = "pc" + (it.custom ? " pc-custom" : "");

  if (it.custom) {
    const customKey = it.id;
    div.innerHTML = `
      <div class="pc-img ${it.bg || 'gray'}">${it.e}</div>
      <div class="custom-wrap">
        <p>Ada yang kamu cari selain daftar di atas? Ketik di sini:</p>
        <input id="ci_${customKey}" type="text" placeholder='mis: Yupi, Chitato Ori...'/>
        <button class="btn-cadd" onclick="addCustom('${customKey}')">+ Tambah ke Keranjang</button>
      </div>`;
  } else {
    const bg = it.bg || "teal3";
    div.innerHTML = `
      <div class="pc-img ${bg}">${it.e}${it.d ? `<span class="pc-tag">${it.d}</span>` : ""}</div>
      <div class="pc-body">
        <div class="pc-name">${it.n}</div>
        <div class="pc-foot">
          <span class="pc-price">tanya seller</span>
          <div id="ctrl_${it.id}"></div>
        </div>
      </div>`;
    setTimeout(() => drawCtrl(it.id, it.n), 0);
  }
  return div;
}

function drawCtrl(id, name) {
  const el = document.getElementById("ctrl_" + id);
  if (!el) return;
  const qty = cart[id] || 0;
  const enc = encodeURIComponent(name);
  if (qty === 0) {
    el.innerHTML = `<button class="btn-plus" onclick="add('${id}','${enc}')">+</button>`;
  } else {
    el.innerHTML = `<div class="qty-ctrl">
      <button onclick="dec('${id}')">−</button>
      <span class="qty-n">${qty}</span>
      <button onclick="add('${id}','${enc}')">+</button>
    </div>`;
  }
}

// ── CART OPS ──────────────────────────────
function add(id, enc) {
  cart[id] = (cart[id] || 0) + 1;
  updateAll();
}
function dec(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (!cart[id]) delete cart[id];
  updateAll();
}
function del(id) { delete cart[id]; updateAll(); }

function addCustom(key) {
  const inp = document.getElementById("ci_" + key);
  const v = inp.value.trim();
  if (!v) { inp.focus(); return; }
  customItems.push(v);
  inp.value = "";
  updateAll();
}
function delCustom(i) { customItems.splice(i, 1); updateAll(); }

function updateAll() {
  renderContent();
  renderCart();
  updateBadge();
}
function updateBadge() {
  const n = Object.values(cart).reduce((a, b) => a + b, 0) + customItems.length;
  document.getElementById("fabN").textContent = n;
}

// ── RENDER DRAWER ─────────────────────────
function renderCart() {
  const dl = document.getElementById("dlist");
  const df = document.getElementById("dfoot");
  const ids = Object.keys(cart);
  if (!ids.length && !customItems.length) {
    dl.innerHTML = '<div class="dempty">🧺<br/>Keranjang masih kosong</div>';
    df.style.display = "none";
    return;
  }
  df.style.display = "block";
  dl.innerHTML = "";
  ids.forEach(id => {
    const el = document.createElement("div"); el.className = "ci";
    el.innerHTML = `
      <div class="ci-info">
        <div class="ci-name">${itemName(id)} × ${cart[id]}</div>
        <div class="ci-sub">Konfirmasi harga ke seller</div>
      </div>
      <button class="ci-del" onclick="del('${id}')">✕</button>`;
    dl.appendChild(el);
  });
  customItems.forEach((c, i) => {
    const el = document.createElement("div"); el.className = "ci";
    el.innerHTML = `
      <div class="ci-info">
        <div class="ci-name">${c}</div>
        <div class="ci-sub">Lainnya — konfirmasi ke seller</div>
      </div>
      <button class="ci-del" onclick="delCustom(${i})">✕</button>`;
    dl.appendChild(el);
  });
}

// ── DRAWER TOGGLE ─────────────────────────
function openDrw() {
  document.getElementById("drw").classList.add("on");
  document.getElementById("ovl").classList.add("on");
}
function closeDrw() {
  document.getElementById("drw").classList.remove("on");
  document.getElementById("ovl").classList.remove("on");
}

// ── RADIO STYLE ───────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".rb").forEach(lb => {
    lb.addEventListener("click", () => {
      document.querySelectorAll(".rb").forEach(x => x.classList.remove("sel"));
      lb.classList.add("sel");
    });
  });
  renderCats();
  renderContent();
});

// ── KIRIM WA ──────────────────────────────
function kirimWA() {
  const nama = document.getElementById("fNama").value.trim();
  const alamat = document.getElementById("fAlamat").value.trim();
  const notes = document.getElementById("fNotes").value.trim();
  const bayar = document.querySelector('input[name="bayar"]:checked')?.value || "Cash";

  if (!nama) { document.getElementById("fNama").focus(); alert("Isi nama dulu ya kak 😊"); return; }
  const ids = Object.keys(cart);
  if (!ids.length && !customItems.length) { alert("Keranjang masih kosong!"); return; }

  const now = new Date().toLocaleString("id-ID", { dateStyle: "long", timeStyle: "short" });
  const baris = [
    ...ids.map(id => `  • ${itemName(id)} × ${cart[id]}`),
    ...customItems.map(c => `  • ${c}`)
  ];

  let msg = `Halo kak! Mau pesan dari *${NAMA_WARUNG}* 🥚\n\n`;
  msg += `👤 Nama: *${nama}*\n`;
  if (alamat) msg += `📍 Alamat: ${alamat}\n`;
  msg += `💳 Pembayaran: *${bayar}*\n`;
  msg += `🕐 Waktu: ${now}\n\n`;
  msg += `*🛒 Daftar Belanja:*\n${baris.join("\n")}\n\n`;
  msg += `💰 Total: _mohon konfirmasi harga_\n`;
  if (notes) msg += `\n📝 Catatan: ${notes}\n`;
  msg += `\nTerima kasih kak! 🙏`;

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
}

function doSearch() { renderContent(); }
