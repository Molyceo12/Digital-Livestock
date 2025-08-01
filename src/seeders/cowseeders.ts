import { AppDataSource } from "../config/db";
import { Cows } from "../models/cows";

export const seedCows = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  const cowRepo = AppDataSource.getRepository(Cows);

  const cowsData: Partial<Cows>[] = [
    {
      name: "Nyiramuhire",
      age: 3,
      category: 1,
      owner: 1,
      description: "Healthy female cow",
      price: 950.0,
      weight: 420.5,
      health_status: "Vaccinated",
      breed: "Mutara",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326809/1000_F_457998316_saF8lQgjnb9VRXoLFLmJcwEYlCs03MHl_stjx98.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326807/240_F_329196568_9sezPrHvUWxZGLVBJghkg5p0kqYzNDuN_bv1a8a.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326793/240_F_408397642_90VWDYh2umNrWaveWstmXCy6g6PZXvXW_mpbfmb.jpg",
      ],
    },
    {
      name: "Gitare",
      age: 4,
      category: 2,
      owner: 1,
      description: "Strong breeding bull",
      price: 1200.0,
      weight: 610,
      health_status: "Healthy",
      breed: "Musanze",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326807/240_F_282840134_isp4o1UmyXZSEVuaNlCxFzhWleQSHgIp_a6c0yc.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326795/240_F_282840407_XkkcUBGJDukjHTqj2zThKzFQOAxymRW9_q7ngxh.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326793/240_F_408397642_90VWDYh2umNrWaveWstmXCy6g6PZXvXW_mpbfmb.jpg",
      ],
    },
    {
      name: "Inyamibwa",
      age: 1,
      category: 3,
      owner: 1,
      description: "Young calf with great potential",
      price: 400.0,
      weight: 190,
      health_status: "Healthy",
      breed: "Rwamagana",
      purchase_status: "Reserved",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326808/240_F_350397855_MFEv4Al29KQd9CpbKWBA64ryxDTmKhjX_c7osle.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754326803/240_F_371446357_TrB9DDfHWs3Z9dSsXrjlACp74pzF2LlL_cn05pk.jpg",
      ],
    },
    {
      name: "Ikimasa",
      age: 2,
      category: 5,
      owner: 1,
      description: "Docile steer suitable for meat",
      price: 700.0,
      weight: 350,
      health_status: "Vaccinated",
      breed: "Kayonza",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327473/download_t6uwfo.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327473/download_1_giujzc.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327473/download_2_cxkrpj.jpg",
      ],
    },
    {
      name: "Kigina",
      age: 3,
      category: 4,
      owner: 1,
      description: "Heifer, almost ready for calving",
      price: 980.0,
      weight: 410,
      health_status: "Healthy",
      breed: "Gatsibo",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327686/download_3_t0bhs5.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327686/download_1_ji0nto.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754327685/download_mdwbbr.jpg",
      ],
    },
    {
      name: "Isimbi",
      age: 2,
      category: 1,
      owner: 1,
      description: "Young female cow, well-fed",
      price: 860.0,
      weight: 370,
      health_status: "Vaccinated",
      breed: "Gakenke",
      purchase_status: "Offered",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328135/download_a7nxdt.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328135/download_2_trnmpw.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328135/download_1_wt0ox5.jpg",
      ],
    },
    {
      name: "Tugire",
      age: 5,
      category: 2,
      owner: 1,
      description: "Older bull, experienced breeder",
      price: 1100.0,
      weight: 630,
      health_status: "Healthy",
      breed: "Bigogwe",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328780/images_ltqogl.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328779/images_2_xc4jv9.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328778/images_1_tsukeq.jpg",
      ],
    },
    {
      name: "Nzirabatinya",
      age: 1,
      category: 3,
      owner: 1,
      description: "Calf, playful and healthy",
      price: 380.0,
      weight: 180,
      health_status: "Vaccinated",
      breed: "Bigogwe",
      purchase_status: "Available",
      photos: [
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328988/download_shtzrh.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328987/download_1_obuque.jpg",
        "https://res.cloudinary.com/dlezmeikx/image/upload/v1754328987/download_2_jwieq0.jpg",
      ],
    },
  ];

  await cowRepo.save(cowsData);
  console.log("✅ Seeded 8 cows.");
 
};


