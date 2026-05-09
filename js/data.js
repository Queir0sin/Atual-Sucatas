// Lista de produtos atualizada com imagens reais do Instagram
const products = [
    {
        "id": 1,
        "title": "Sucata BMW 320i Sport GP Flex (Para Peças)",
        "price": 1693.91,
        "category": "Veículo Completo",
        "brand": "BMW",
        "model": "320i",
        "image": "images/carros/bmw320i/sucata_bmw_320i_sport_gp_flex.webp",
        "gallery": [
            "images/carros/bmw320i/sucata_bmw_320i_sport_gp_flex.webp",
            "images/carros/bmw320i/sucata_bmw_320i_sport_gp_flex_.webp",
            "images/carros/bmw320i/sucata_bmw_320i_sport_gp_flex_volante.webp",
            "images/carros/bmw320i/sucata_bmw_320i_sport_gp_flex_volante2.webp",
            "images/carros/bmw320i/90_sucata_bmw_320i_sport_gp_flex_painel.webp"
        ],
        "description": "Sucata completa da BMW 320i Sport GP Flex disponível para retirada de peças. Veículo com excelente procedência, contendo motor, câmbio, lataria, painel, volante original e módulos eletrônicos em ótimo estado de conservação. Ideal para quem busca peças originais de reposição com qualidade garantida. Consulte a disponibilidade das peças específicas através do nosso WhatsApp!"
    },
    {
        "id": 49,
        "title": "Sucata Fiat Pulse Audace TF200 2024/2025 (Para Peças)",
        "price": 3800.00,
        "category": "Veículo Completo",
        "brand": "Fiat",
        "model": "Pulse",
        "image": "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_1_a372e680b86a47ddb985ba0a524bfe54 (1).webp",
        "gallery": [
            "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_1_a372e680b86a47ddb985ba0a524bfe54 (1).webp",
            "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_2_1d3c086a0d86b8f0da42823ed77fb41d.webp",
            "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_3_4c72bca6f18ae3b34c88078277bccd2d.webp",
            "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_4_94b72cdeef17d95d1f8c176b119386ba.webp",
            "images/carros/Fiat Pulse Audace TF200 20242025/sucata_fiat_pulse_audace_tf200_2024_2025_45548_5_b592803f148ebcec8e4d4841ad1caee6.webp"
        ],
        "description": "Sucata do Fiat Pulse Audace TF200 2024/2025 disponível para retirada de peças. Veículo super novo. Ideal para retirada de peças de lataria, motor, câmbio e acabamentos internos. Consulte peças disponíveis pelo nosso WhatsApp e garanta peças originais com procedência garantida!"
    },
    {
        "id": 50,
        "title": "Sucata Honda Civic EX 2.0 Flex CVT 2021 (Para Peças)",
        "price": 4200.00,
        "category": "Veículo Completo",
        "brand": "Honda",
        "model": "Civic",
        "image": "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_1_f161154a63c2aa1e420aced0f558186d.webp",
        "gallery": [
            "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_1_f161154a63c2aa1e420aced0f558186d.webp",
            "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_2_e49078936c9b48e0276cd5aca296a388.webp",
            "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_3_e4a9cbc1079ec4ee4bb20c84b1dfd1b1.webp",
            "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_4_2cbccd7ce0a6354ba988d551bc744240.webp",
            "images/carros/Honda Civic EX 2.0 Flex CVT 20212021/sucata_honda_civic_ex_2_0_flex_cvt_2021_2021_38926_5_1772f621b27671ef24cbffbfd5f9770d.webp"
        ],
        "description": "Sucata Honda Civic EX 2.0 Flex CVT 2021. Excelente oportunidade para aquisição de peças originais com procedência. Motor em ótimo estado, componentes eletrônicos e tapeçaria íntegros. Veículo baixado no Detran. Fale conosco no WhatsApp para consultar o estoque da peça que você precisa!"
    },
    {
        "id": 51,
        "title": "Sucata Honda Civic G10 EXL 2.0 Flex 2019 (Para Peças)",
        "price": 3900.00,
        "category": "Veículo Completo",
        "brand": "Honda",
        "model": "Civic",
        "image": "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_1_9db2bd5380a6f164ee830d532a4d1514.webp",
        "gallery": [
            "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_1_9db2bd5380a6f164ee830d532a4d1514.webp",
            "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_2_51aaf42792aa2cdf2afa2a33aa8b9bd2.webp",
            "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_3_33b706d32429240aece9878a8b181375.webp",
            "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_4_52c9563298671660f4d83667376f43f3.webp",
            "images/carros/Honda Civic G10 EXL 2.0 Flex 2019/sucata_honda_civic_g10_exl_2_0_flex_2019_45126_5_31ec8a0171d69afbfa885d7924d033f6.webp"
        ],
        "description": "Sucata Honda Civic G10 EXL 2.0 Flex 2019 para retirada de peças. Ótima procedência e grande disponibilidade de peças de acabamento, lataria e mecânica com total procedência garantida. Baixado no Detran. Clique no botão de WhatsApp abaixo e nos mande qual peça você está precisando!"
    },
    {
        "id": 52,
        "title": "Sucata Hyundai Creta Platinum 1.0 TGDI 2023 (Para Peças)",
        "price": 4500.00,
        "category": "Veículo Completo",
        "brand": "Hyundai",
        "model": "Creta",
        "image": "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_1_acb741f57d6c83c8427674c1a89ff390.webp",
        "gallery": [
            "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_1_acb741f57d6c83c8427674c1a89ff390.webp",
            "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_2_db244593b33595760fe3487e93c41476.webp",
            "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_3_38398f0e729bffc26d98fe434d5e5e8b.webp",
            "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_4_8fce0af15a8d9385ec7172a898cf7aa8.webp",
            "images/carros/Hyundai Creta Platinum 1.0 TGDI 2023/sucata_hyundai_creta_platinum_1_0_tgdi_2023_48_276_km_44220_5_25e3a6febc022369f15ae28ef893f7fb.webp"
        ],
        "description": "Sucata Hyundai Creta Platinum 1.0 TGDI 2023. Veículo de excelente padrão disponível para retirada de peças originais. Conta com mecânica preservada, faróis, lanternas, acabamentos do painel, multimídia e tapeçaria. Garantia de procedência para reparo do seu veículo. Chame no WhatsApp!"
    },
    {
        "id": 2,
        "title": "Sucata Chevrolet Onix Plus 1.0 (Para Peças)",
        "price": 1250.00,
        "category": "Veículo Completo",
        "brand": "Chevrolet",
        "model": "Onix Plus",
        "image": "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_1_bc06917095a2a5a41601c07bd61eee87.webp",
        "gallery": [
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_1_bc06917095a2a5a41601c07bd61eee87.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_2_4d231966933073b28ae97b9683309394.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_3_a09712c16055e0dae753ee5457b0ce9b.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_4_1eed00a9dfc8bd0e95ad8e897170a26a.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_5_fc497f6757e1e14f20bd94f98209abd3.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_6_a77605c84f7e06fbdb4b843f74c70f57.webp",
            "images/carros/Onix Plus 1.0/sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_7_321f047275693f67f8e9bc7a29369a9a.webp",
            "images/carros/Onix Plus 1.0/90_sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_8_f9a51f79597bf540c82d4721482145d7 (1).webp",
            "images/carros/Onix Plus 1.0/90_sucata_chevrolet_onix_plus_1_0_aspirado_manual_2022_8_000_km_43390_9_0c4ea0ec43ca462c5e7fe7c1cd7b3174.webp"
        ],
        "description": "Sucata do Chevrolet Onix Plus 1.0 Aspirado Manual 2022 com apenas 8.000 km rodados. Veículo super novo, ideal para retirada de peças de lataria, motor praticamente sem uso, câmbio e acabamentos internos impecáveis. Consulte peças disponíveis pelo nosso WhatsApp e garanta peças originais com procedência garantida!"
    },
    {
        "id": 3,
        "title": "Sucata Toyota Corolla XEI 2.0 Flex (Para Peças)",
        "price": 3500.00,
        "category": "Veículo Completo",
        "brand": "Toyota",
        "model": "Corolla XEI",
        "image": "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_1_ddee6033e14a5e363ad5d1b6f6a1193f.webp",
        "gallery": [
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_1_ddee6033e14a5e363ad5d1b6f6a1193f.webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_2_d149852877043c2c54c3ba7bfb8a33ca (1).webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_3_b2842505c2648330360f12233bb6aa4b.webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_4_64ddaf985fb3e32af489c83dae31b4f0.webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_5_6feeab61b93f0c2febd264b2a8d499bb.webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_6_a3d54c12a2fe2e2af8077bf6d139388e.webp",
            "images/carros/Toyota Corolla XEI 2.0 Flex/90_sucata_toyota_corolla_xei_2_0_flex_2019_39_989_km_43392_7_5f1b56c4a52015e65c3223d381137c0d.webp"
        ],
        "description": "Sucata do Toyota Corolla XEI 2.0 Flex 2019 com apenas 39.989 km rodados. Excelente oportunidade para aquisição de peças originais com procedência. Motor em ótimo estado, lataria traseira e laterais preservadas, além de componentes eletrônicos e tapeçaria íntegros. Veículo baixado no Detran. Fale conosco no WhatsApp para consultar o estoque da peça que você precisa!"
    },
    {
        "id": 4,
        "title": "Sucata Chevrolet Tracker LT 1.4 Turbo (Para Peças)",
        "price": 2800.00,
        "category": "Veículo Completo",
        "brand": "Chevrolet",
        "model": "Tracker",
        "image": "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_1_c3fc6fb88635c3b960a44550814bf0cd.webp",
        "gallery": [
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_1_c3fc6fb88635c3b960a44550814bf0cd.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_2_6f304a5f42318d2952c8d8518622cfb8.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_3_7def6868e55d817f88325564b12a4c2c.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_4_5024a9e29f3b6db3b6607c5ee550165d.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_5_dee7cdbb1fa15295a323d346675d0b9d.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_6_434627baffb45a4ad2b01875fbab3d8e.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_7_32712169413ac6163e48088f14a1ea3d.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_8_1bc8b2f1ce4ae48c2a3b2119623c8421.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_9_6f054c68afe6180187d24e0def9c3fc0.webp",
            "images/carros/Tracker LT 1.4 T 2018/90_sucata_chevrolet_tracker_lt_1_4_t_2018_58_949_km_43812_10_a7fa8eb38b03e79d30058a21cd34f119.webp"
        ],
        "description": "Sucata do Chevrolet Tracker LT 1.4 Turbo 2018 disponível para retirada de peças. Veículo com motorização turbo em excelente estado, diversas peças de acabamento, lataria e mecânica com total procedência garantida. Baixado no Detran. Clique no botão de WhatsApp abaixo e nos mande qual peça você está precisando!"
    },
    {
        "id": 5,
        "title": "Sucata Mercedes-Benz C180 1.6 Turbo (Para Peças)",
        "price": 4500.00,
        "category": "Veículo Completo",
        "brand": "Mercedes-Benz",
        "model": "C180",
        "image": "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_1_de765e632de9415be242cde9abd72c2a_20230508122209.webp",
        "gallery": [
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_1_de765e632de9415be242cde9abd72c2a_20230508122209.webp",
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_2_344c139377527e098fc52cd40766bb8e_20230508122210.webp",
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_3_f405d1a56779cb9f0cb3c363177dbb3d_20230508122211.webp",
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_4_7c880aa11ed2bcdd6b1e82560185b6c3_20230508122211.webp",
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_5_5d1a2a22fcf48cfe05fc25a6199ff460_20230508122209.webp",
            "images/carros/Mercedes-benz C180 2018 1.6 T/90_sucata_mercedes_benz_c180_2018_1_6_t_156cv_flex_25495_10_8f69d29b07a65209980cd2220260a775_20230508122209.webp"
        ],
        "description": "Sucata completa da Mercedes-Benz C180 2018 1.6 Turbo (156cv) Flex. Veículo de altíssimo padrão disponível para retirada de peças genuínas. Conta com mecânica preservada, faróis, lanternas, acabamentos do painel, multimídia e tapeçaria premium. Garantia de procedência para reparo do seu veículo importado. Chame no WhatsApp e consulte peças específicas!"
    },
    {
        "id": 6,
        "title": "Sucata Discovery Sport R Dynamic 2021/2022 (Para Peças)",
        "price": 8500.00,
        "category": "Veículo Completo",
        "brand": "Land Rover",
        "model": "Discovery Sport",
        "image": "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_1_0e59580f0d4baf6484a2ba51368fc846.webp",
        "gallery": [
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_1_0e59580f0d4baf6484a2ba51368fc846.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_2_a5c21cee50020dd5d67e08d9fedc6c48.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_3_d47a55180de0dcf7fb4ee4a1fe6d818e.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_4_2354d2d48564b97d67808cb988edf314.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_5_bac86f029a2541408b06ab6ee4e6f6e2.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_6_02a77eff84c1abe64d81963bec869e77.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_7_337f83af6258478aa4bdc72bd688d465.webp",
            "images/carros/Discovery Sport R Dynamic/90_sucata_discovery_sport_r_dynamic_2021_2022_2_0_t_diesel_45758_8_e273ee07aa2eaf7335a87f337c195d6c.webp"
        ],
        "description": "Sucata da Land Rover Discovery Sport R Dynamic 2021/2022 2.0 Turbo Diesel. Excelente oportunidade para retirada de peças de altíssimo padrão. Mecânica diesel íntegra, painel, módulos eletrônicos, rodas, lataria e acabamentos internos impecáveis. Solução ideal com ótimo custo-benefício para reparo da sua Land Rover. Consulte a disponibilidade da sua peça!"
    },
    {
        "id": 7,
        "title": "Sucata Chevrolet S10 (Para Peças)",
        "price": 4960.02,
        "category": "Reposição",
        "brand": "Chevrolet",
        "model": "S10",
        "image": "images/chevrolet_s10.jpg"
    },
    {
        "id": 8,
        "title": "Peças Toyota Hilux",
        "price": 8313.7,
        "category": "Acessórios",
        "brand": "Toyota",
        "model": "Hilux",
        "image": "images/toyota_hilux.jpg"
    },
    {
        "id": 9,
        "title": "Sucata Peugeot 307 (Para Peças)",
        "price": 7863.67,
        "category": "Mecânica",
        "brand": "Peugeot",
        "model": "307",
        "image": "images/peugeot_307.jpg"
    },
    {
        "id": 10,
        "title": "Peças Renault Kwid",
        "price": 5123.94,
        "category": "Elétrica",
        "brand": "Renault",
        "model": "Kwid",
        "image": "images/renault_kwid.jpg"
    },
    {
        "id": 11,
        "title": "Sucata Ford Ranger (Para Peças)",
        "price": 8630.73,
        "category": "Reposição",
        "brand": "Ford",
        "model": "Ranger",
        "image": "images/ford_ranger.jpg"
    },
    {
        "id": 12,
        "title": "Sucata Mitsubishi L200 (Para Peças)",
        "price": 5117.73,
        "category": "Acessórios",
        "brand": "Mitsubishi",
        "model": "L200",
        "image": "images/mitsubishi_l200.jpg"
    },
    {
        "id": 13,
        "title": "Peças Jeep Compass",
        "price": 6050.01,
        "category": "Mecânica",
        "brand": "Jeep",
        "model": "Compass",
        "image": "images/jeep_compass.jpg"
    },
    {
        "id": 14,
        "title": "Sucata Fiat Toro (Para Peças)",
        "price": 4640.69,
        "category": "Elétrica",
        "brand": "Fiat",
        "model": "Toro",
        "image": "images/fiat_toro.jpg"
    },
    {
        "id": 15,
        "title": "Sucata Honda Civic G9 (Para Peças)",
        "price": 5983.33,
        "category": "Reposição",
        "brand": "Honda",
        "model": "Civic G9",
        "image": "images/honda_civic_g9.jpg"
    },
    {
        "id": 16,
        "title": "Sucata BMW 320i (Para Peças)",
        "price": 3353.44,
        "category": "Acessórios",
        "brand": "BMW",
        "model": "320i",
        "image": "images/bmw_320i.jpg"
    },
    {
        "id": 17,
        "title": "Sucata Mercedes C180 (Para Peças)",
        "price": 6635.92,
        "category": "Mecânica",
        "brand": "Mercedes-Benz",
        "model": "C180",
        "image": "images/mercedes_c180.jpg"
    },
    {
        "id": 18,
        "title": "Sucata Hyundai Creta (Para Peças)",
        "price": 4399.07,
        "category": "Elétrica",
        "brand": "Hyundai",
        "model": "Creta",
        "image": "images/hyundai_creta.jpg"
    },
    {
        "id": 19,
        "title": "Peças Volkswagen T-Cross",
        "price": 2710.23,
        "category": "Reposição",
        "brand": "Volkswagen",
        "model": "T-Cross",
        "image": "images/vw_tcross.jpg"
    },
    {
        "id": 20,
        "title": "Sucata Nissan Frontier (Para Peças)",
        "price": 1478.86,
        "category": "Acessórios",
        "brand": "Nissan",
        "model": "Frontier",
        "image": "images/nissan_frontier.jpg"
    },
    {
        "id": 21,
        "title": "Sucata Honda Civic G10 (Para Peças)",
        "price": 6098.48,
        "category": "Mecânica",
        "brand": "Honda",
        "model": "Civic G10",
        "image": "images/honda_civic_g10.jpg"
    },
    {
        "id": 22,
        "title": "Sucata Chevrolet S10 (Para Peças)",
        "price": 8560.82,
        "category": "Elétrica",
        "brand": "Chevrolet",
        "model": "S10",
        "image": "images/chevrolet_s10.jpg"
    },
    {
        "id": 23,
        "title": "Peças Toyota Hilux",
        "price": 3102.89,
        "category": "Reposição",
        "brand": "Toyota",
        "model": "Hilux",
        "image": "images/toyota_hilux.jpg"
    },
    {
        "id": 24,
        "title": "Sucata Peugeot 307 (Para Peças)",
        "price": 8365.08,
        "category": "Acessórios",
        "brand": "Peugeot",
        "model": "307",
        "image": "images/peugeot_307.jpg"
    },
    {
        "id": 25,
        "title": "Peças Renault Kwid",
        "price": 8924.97,
        "category": "Mecânica",
        "brand": "Renault",
        "model": "Kwid",
        "image": "images/renault_kwid.jpg"
    },
    {
        "id": 26,
        "title": "Sucata Ford Ranger (Para Peças)",
        "price": 7105.21,
        "category": "Elétrica",
        "brand": "Ford",
        "model": "Ranger",
        "image": "images/ford_ranger.jpg"
    },
    {
        "id": 27,
        "title": "Sucata Mitsubishi L200 (Para Peças)",
        "price": 1290.32,
        "category": "Reposição",
        "brand": "Mitsubishi",
        "model": "L200",
        "image": "images/mitsubishi_l200.jpg"
    },
    {
        "id": 28,
        "title": "Peças Jeep Compass",
        "price": 4540.63,
        "category": "Acessórios",
        "brand": "Jeep",
        "model": "Compass",
        "image": "images/jeep_compass.jpg"
    },
    {
        "id": 29,
        "title": "Sucata Fiat Toro (Para Peças)",
        "price": 5849.23,
        "category": "Mecânica",
        "brand": "Fiat",
        "model": "Toro",
        "image": "images/fiat_toro.jpg"
    },
    {
        "id": 30,
        "title": "Sucata Honda Civic G9 (Para Peças)",
        "price": 7798.97,
        "category": "Elétrica",
        "brand": "Honda",
        "model": "Civic G9",
        "image": "images/honda_civic_g9.jpg"
    },
    {
        "id": 31,
        "title": "Sucata BMW 320i (Para Peças)",
        "price": 3150.97,
        "category": "Reposição",
        "brand": "BMW",
        "model": "320i",
        "image": "images/bmw_320i.jpg"
    },
    {
        "id": 32,
        "title": "Sucata Mercedes C180 (Para Peças)",
        "price": 1284.16,
        "category": "Acessórios",
        "brand": "Mercedes-Benz",
        "model": "C180",
        "image": "images/mercedes_c180.jpg"
    },
    {
        "id": 33,
        "title": "Sucata Hyundai Creta (Para Peças)",
        "price": 2587.39,
        "category": "Mecânica",
        "brand": "Hyundai",
        "model": "Creta",
        "image": "images/hyundai_creta.jpg"
    },
    {
        "id": 34,
        "title": "Peças Volkswagen T-Cross",
        "price": 2309.13,
        "category": "Elétrica",
        "brand": "Volkswagen",
        "model": "T-Cross",
        "image": "images/vw_tcross.jpg"
    },
    {
        "id": 35,
        "title": "Sucata Nissan Frontier (Para Peças)",
        "price": 6663.36,
        "category": "Reposição",
        "brand": "Nissan",
        "model": "Frontier",
        "image": "images/nissan_frontier.jpg"
    },
    {
        "id": 36,
        "title": "Sucata Honda Civic G10 (Para Peças)",
        "price": 4680.47,
        "category": "Acessórios",
        "brand": "Honda",
        "model": "Civic G10",
        "image": "images/honda_civic_g10.jpg"
    },
    {
        "id": 37,
        "title": "Sucata Chevrolet S10 (Para Peças)",
        "price": 4840.36,
        "category": "Mecânica",
        "brand": "Chevrolet",
        "model": "S10",
        "image": "images/chevrolet_s10.jpg"
    },
    {
        "id": 38,
        "title": "Peças Toyota Hilux",
        "price": 6248.13,
        "category": "Elétrica",
        "brand": "Toyota",
        "model": "Hilux",
        "image": "images/toyota_hilux.jpg"
    },
    {
        "id": 39,
        "title": "Sucata Peugeot 307 (Para Peças)",
        "price": 5779.18,
        "category": "Reposição",
        "brand": "Peugeot",
        "model": "307",
        "image": "images/peugeot_307.jpg"
    },
    {
        "id": 40,
        "title": "Peças Renault Kwid",
        "price": 2095.4,
        "category": "Acessórios",
        "brand": "Renault",
        "model": "Kwid",
        "image": "images/renault_kwid.jpg"
    },
    {
        "id": 41,
        "title": "Sucata Ford Ranger (Para Peças)",
        "price": 8540.89,
        "category": "Mecânica",
        "brand": "Ford",
        "model": "Ranger",
        "image": "images/ford_ranger.jpg"
    },
    {
        "id": 42,
        "title": "Sucata Mitsubishi L200 (Para Peças)",
        "price": 8932.27,
        "category": "Elétrica",
        "brand": "Mitsubishi",
        "model": "L200",
        "image": "images/mitsubishi_l200.jpg"
    },
    {
        "id": 43,
        "title": "Peças Jeep Compass",
        "price": 4501.84,
        "category": "Reposição",
        "brand": "Jeep",
        "model": "Compass",
        "image": "images/jeep_compass.jpg"
    },
    {
        "id": 44,
        "title": "Sucata Fiat Toro (Para Peças)",
        "price": 3771.85,
        "category": "Acessórios",
        "brand": "Fiat",
        "model": "Toro",
        "image": "images/fiat_toro.jpg"
    },
    {
        "id": 45,
        "title": "Sucata Honda Civic G9 (Para Peças)",
        "price": 4184.35,
        "category": "Mecânica",
        "brand": "Honda",
        "model": "Civic G9",
        "image": "images/honda_civic_g9.jpg"
    },
    {
        "id": 46,
        "title": "Sucata BMW 320i (Para Peças)",
        "price": 5160.71,
        "category": "Elétrica",
        "brand": "BMW",
        "model": "320i",
        "image": "images/bmw_320i.jpg"
    },
    {
        "id": 47,
        "title": "Sucata Mercedes C180 (Para Peças)",
        "price": 2872.12,
        "category": "Reposição",
        "brand": "Mercedes-Benz",
        "model": "C180",
        "image": "images/mercedes_c180.jpg"
    },
    {
        "id": 48,
        "title": "Sucata Hyundai Creta (Para Peças)",
        "price": 7268.84,
        "category": "Acessórios",
        "brand": "Hyundai",
        "model": "Creta",
        "image": "images/hyundai_creta.jpg"
    }
];