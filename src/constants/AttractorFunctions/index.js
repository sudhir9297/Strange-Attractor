import {
  lorenzAttractorData,
  AizawaAttractorData,
  ArneodoAttractorData,
  BoualiAttractorData,
  BurkeShawAttractorData,
} from "./attractorDefaultValue.js";
import {
  lorenzAttractor,
  AizawaAttractor,
  ArneodoAttractor,
  BoualiAttractor,
  BurkeShawAttractor,
} from "./attractorFunctions.js";

export const attractor = [
  {
    id: 1,
    name: "Lorenz Attractor",
    data: lorenzAttractorData,
    func: lorenzAttractor,
  },
  {
    id: 2,
    name: "Aizawa Attractor",
    data: AizawaAttractorData,
    func: AizawaAttractor,
  },
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
];
