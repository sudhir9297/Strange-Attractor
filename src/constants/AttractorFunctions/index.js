import {
  lorenzAttractorData,
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
  GenesioTesiAttractorData,
  HadleyAttractorData,
  // AizawaAttractorData,
  // HalvorsenAttractorData,
  // LiuChenAttractorData,
  // ThomasAttractorData,
  // FourWingAttractorData,
} from "./attractorDefaultValue.js";
import {
  lorenzAttractor,
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
  GenesioTesiAttractor,
  HadleyAttractor,
  // AizawaAttractor,
  // HalvorsenAttractor,
  // LiuChenAttractor,
  // ThomasAttractor,
  // FourWingAttractor,
} from "./attractorFunctions.js";

export const attractor = [
  {
    id: 1,
    name: "Dequan Li Attractor",
    data: DequanLiAttractorData,
    func: DequanLiAttractor,
    shadowPosition: [0, -5, 0],
    cameraPosition: [300, 200, 300],
    groupPosition: [0, -15, 0],
    structuredRotation: [1.57, 0, 1.57],
    structuredPosition: [0, 160, 0],
    shadowScale: 300,
    shadowFar: 30,
  },

  {
    id: 3,
    name: "Arneodo Attractor",
    data: ArneodoAttractorData,
    func: ArneodoAttractor,
    shadowPosition: [0, -7, 0],
    cameraPosition: [30, 0, 30],
    groupPosition: [0, 0, 0],
    structuredRotation: [0, 0, 1.57],
    structuredPosition: [0, 0, 0],
    shadowScale: 50,
  },

  {
    id: 4,
    name: "Bouali Attractor",
    data: BoualiAttractorData,
    func: BoualiAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [20, 10, 20],
    groupPosition: [0, -10, 0],
    structuredRotation: [0, 1.53, 0],
    structuredPosition: [0, 0, 0],
    shadowScale: 30,
  },
  {
    id: 5,
    name: "Burke - Shaw Attractor",
    data: BurkeShawAttractorData,
    func: BurkeShawAttractor,
    shadowPosition: [0, -4, 0],
    cameraPosition: [10, 5, 10],
    groupPosition: [0, 0, 0],
    structuredRotation: [-1.57, 0, 1.57],
    structuredPosition: [0, 0, 0],
    shadowScale: 10,
  },

  {
    id: 6,
    name: "Chen - Celikovsky Attractor",
    data: ChenCelikovskyAttractorData,
    func: ChenCelikovskyAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [70, 60, 70],
    groupPosition: [0, -10, 0],
    structuredRotation: [-1.57, 0, 0],
    structuredPosition: [0, 0, 0],
    shadowScale: 60,
  },

  {
    id: 7,
    name: "Chen-Lee Attractor",
    data: ChenLeeAttractorData,
    func: ChenLeeAttractor,
    shadowPosition: [0, -2, 0],
    cameraPosition: [30, 10, 30],
    groupPosition: [0, 0, 0],
    structuredRotation: [-1.57, 0, 0],
    structuredPosition: [0, 0, 0],
    shadowScale: 40,
  },

  {
    id: 8,
    name: "Chua Attractor",
    data: ChuaAttractorData,
    func: ChuaAttractor,
    shadowPosition: [0, -10, 0],
    cameraPosition: [30, 10, 30],
    groupPosition: [0, 0, 0],
    structuredRotation: [-1.57, 0, 0.785],
    structuredPosition: [0, 0, 0],
    shadowScale: 20,
  },

  {
    id: 9,
    name: "Coullet Attractor",
    data: CoulletAttractorData,
    func: CoulletAttractor,
    shadowPosition: [0, -5, 0],
    cameraPosition: [20, 5, 20],
    groupPosition: [0, 0, 0],
    structuredRotation: [0, 0, 1.57],
    structuredPosition: [0, 0, 0],
    shadowScale: 10,
  },

  {
    id: 10,
    name: "Dadras Attractor",
    data: DadrasAttractorData,
    func: DadrasAttractor,
    shadowPosition: [0, -4, 0],
    cameraPosition: [20, 5, 20],
    groupPosition: [0, 0, 0],
    structuredRotation: [0, 0, 0],
    structuredPosition: [0, 0, 0],
    shadowScale: 30,
  },

  {
    id: 11,
    name: "Lorenz Attractor",
    data: lorenzAttractorData,
    func: lorenzAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [40, 30, 40],
    groupPosition: [0, -10, 0],
    structuredRotation: [-1.573, 0, 0],
    structuredPosition: [0, 0, 0],
    shadowScale: 60,
  },

  {
    id: 12,
    name: "Finance Attractor",
    data: FinanceAttractorData,
    func: FinanceAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [10, 5, 10],
    groupPosition: [0, -4, 0],
    structuredRotation: [1.573, 1.573, 0],
    structuredPosition: [0, 3, 4],
    shadowScale: 10,
  },

  {
    id: 14,
    name: "Genesio-Tesi Attractor",
    data: GenesioTesiAttractorData,
    func: GenesioTesiAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [3, 1, 3],
    groupPosition: [0, -1, 0],
    structuredRotation: [0, 0, 0],
    structuredPosition: [0, 0.7, 0],
    shadowScale: 5,
    shadowFar: 1,
  },
  {
    id: 15,
    name: "Hadley Attractor",
    data: HadleyAttractorData,
    func: HadleyAttractor,
    shadowPosition: [0, 0, 0],
    cameraPosition: [40, 20, 40],
    groupPosition: [0, -10, 0],
    structuredRotation: [0, 0, 0],
    structuredPosition: [0, 11, 0],
    shadowScale: 50,
  },

  // {
  //   id: 2,
  //   name: "Aizawa Attractor",
  //   data: AizawaAttractorData,
  //   func: AizawaAttractor,
  //   shadowPosition: [0, 0, 0],
  //   cameraPosition: [40, 50, 40],
  //   groupPosition: [0, 0, 0],
  //   structuredPosition: [0, 0, 0],
  //   structuredRotation: [0, 0, 0],
  // },

  // {
  //   id: 13,
  //   name: "Four Wing Attractor",
  //   data: FourWingAttractorData,
  //   func: FourWingAttractor,
  //   shadowPosition: [0, 0, 0],
  //   cameraPosition: [40, 50, 40],
  //   groupPosition: [0, 0, 0],
  //   structuredRotation: [0, 0, 0],
  //   structuredPosition: [0, 0, 0],
  // },

  // {
  //   id: 16,
  //   name: "Halvorsen Attractor",
  //   data: HalvorsenAttractorData,
  //   func: HalvorsenAttractor,
  //   shadowPosition: [0, 0, 0],
  //   cameraPosition: [40, 50, 40],
  //   groupPosition: [0, 0, 0],
  //   structuredRotation: [0, 0, 0],
  //   structuredPosition: [0, 0, 0],
  // },

  // {
  //   id: 17,
  //   name: "Liu Chen Attractor",
  //   data: LiuChenAttractorData,
  //   func: LiuChenAttractor,
  //   shadowPosition: [0, 0, 0],
  //   cameraPosition: [40, 50, 40],
  //   groupPosition: [0, 0, 0],
  //   structuredRotation: [0, 0, 0],
  //   structuredPosition: [0, 0, 0],
  // },

  // {
  //   id: 18,
  //   name: "Thomas Attractor",
  //   data: ThomasAttractorData,
  //   func: ThomasAttractor,
  //   shadowPosition: [0, 0, 0],
  //   cameraPosition: [40, 50, 40],
  //   groupPosition: [0, 0, 0],
  //   structuredRotation: [0, 0, 0],
  //   structuredPosition: [0, 0, 0],
  // },
];
