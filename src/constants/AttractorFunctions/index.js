import {
  lorenzAttractorData,
  AizawaAttractorData,
  ArneodoAttractorData,
  BoualiAttractorData,
  BurkeShawAttractorData,
  ChenCelikovskyAttractorData,
  ChenLeeAttractorData,
  ChuaAttractorData,
  CoulletAttractorData,
  DadrasAttractorData,
  DequanLiAttractorData,
  FinanceAttractorData,
  FourWingAttractorData,
  GenesioTesiAttractorData,
  HadleyAttractorData,
  HalvorsenAttractorData,
  LiuChenAttractorData,
  ThomasAttractorData,
} from "./attractorDefaultValue.js";
import {
  lorenzAttractor,
  AizawaAttractor,
  ArneodoAttractor,
  BoualiAttractor,
  BurkeShawAttractor,
  ChenCelikovskyAttractor,
  ChenLeeAttractor,
  ChuaAttractor,
  CoulletAttractor,
  DadrasAttractor,
  DequanLiAttractor,
  FinanceAttractor,
  FourWingAttractor,
  GenesioTesiAttractor,
  HadleyAttractor,
  HalvorsenAttractor,
  LiuChenAttractor,
  ThomasAttractor,
} from "./attractorFunctions.js";

export const attractor = [
  {
    id: 1,
    name: "Lorenz Attractor",
    data: lorenzAttractorData,
    func: lorenzAttractor,
  },
  // {
  //   id: 2,
  //   name: "Aizawa Attractor",
  //   data: AizawaAttractorData,
  //   func: AizawaAttractor,
  // },
  {
    id: 3,
    name: "Arneodo Attractor",
    data: ArneodoAttractorData,
    func: ArneodoAttractor,
  },

  {
    id: 4,
    name: "Bouali Attractor",
    data: BoualiAttractorData,
    func: BoualiAttractor,
  },
  {
    id: 5,
    name: "Burke - Shaw Attractor",
    data: BurkeShawAttractorData,
    func: BurkeShawAttractor,
  },

  {
    id: 6,
    name: "Chen - Celikovsky Attractor",
    data: ChenCelikovskyAttractorData,
    func: ChenCelikovskyAttractor,
  },

  {
    id: 7,
    name: "Chen-Lee Attractor",
    data: ChenLeeAttractorData,
    func: ChenLeeAttractor,
  },

  {
    id: 8,
    name: "Chua Attractor",
    data: ChuaAttractorData,
    func: ChuaAttractor,
  },

  {
    id: 9,
    name: "Coullet Attractor",
    data: CoulletAttractorData,
    func: CoulletAttractor,
  },

  {
    id: 10,
    name: "Dadras Attractor",
    data: DadrasAttractorData,
    func: DadrasAttractor,
  },

  {
    id: 11,
    name: "Dequan Li Attractor",
    data: DequanLiAttractorData,
    func: DequanLiAttractor,
  },

  {
    id: 12,
    name: "Finance Attractor",
    data: FinanceAttractorData,
    func: FinanceAttractor,
  },
  // {
  //   id: 13,
  //   name: "Four Wing Attractor",
  //   data: FourWingAttractorData,
  //   func: FourWingAttractor,
  // },

  // {
  //   id: 14,
  //   name: "Genesio-Tesi Attractor",
  //   data: GenesioTesiAttractorData,
  //   func: GenesioTesiAttractor,
  // },
  {
    id: 15,
    name: "Hadley Attractor",
    data: HadleyAttractorData,
    func: HadleyAttractor,
  },

  // {
  //   id: 16,
  //   name: "Halvorsen Attractor",
  //   data: HalvorsenAttractorData,
  //   func: HalvorsenAttractor,
  // },

  // {
  //   id: 17,
  //   name: "Liu Chen Attractor",
  //   data: LiuChenAttractorData,
  //   func: LiuChenAttractor,
  // },

  // {
  //   id: 18,
  //   name: "Liu Chen Attractor",
  //   data: ThomasAttractorData,
  //   func: ThomasAttractor,
  // },
];
