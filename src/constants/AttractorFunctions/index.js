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
];
