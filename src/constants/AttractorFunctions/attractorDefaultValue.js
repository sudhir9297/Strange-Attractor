export const lorenzAttractorData = {
  menuData: {
    rho: {
      value: 17,
      min: 1,
      max: 28 * 2,
      step: 1,
    },
    sigma: {
      value: 7,
      min: 1,
      max: 10,
      step: 0.5,
    },
    beta: {
      value: 2.2,
      min: 0.5,
      max: 4,
      step: 0.1,
    },
    size: {
      value: 0.2,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 5,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 10000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    rho: 17,
    sigma: 7,
    beta: 2.2,
    length: 10000,
    increment: 5,
    size: 0.2,
  },
};

export const AizawaAttractorData = {
  menuData: {
    epsilom: {
      value: 0.25,
      min: -10,
      max: 10,
      step: 0.01,
    },
    alpha: {
      value: 0.95,
      min: -10,
      max: 10,
      step: 0.01,
    },
    gamma: {
      value: 0.6,
      min: -2,
      max: 10,
      step: 0.01,
    },
    delta: {
      value: 3.5,
      min: 1,
      max: 6,
      step: 0.1,
    },
    sigma: {
      value: 0.1,
      min: -2,
      max: 10,
      step: 0.01,
    },
    beta: {
      value: 0.7,
      min: 0.01,
      max: 10,
      step: 0.1,
    },

    increment: {
      value: 5,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 10000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    epsilom: 0.25,
    alpha: 0.95,
    gamma: 0.6,
    delta: 3.5,
    sigma: 0.1,
    beta: 0.7,
    length: 10000,
    increment: 5,
  },
};

export const ArneodoAttractorData = {
  menuData: {
    alpha: {
      value: -5.5,
      min: -10,
      max: 3,
      step: 0.01,
    },
    beta: {
      value: 4.1,
      min: 1,
      max: 6,
      step: 0.01,
    },
    delta: {
      value: -0.5,
      min: -10,
      max: 1,
      step: 0.01,
    },
    size: {
      value: 0.17,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: -5.5,
    beta: 4.1,
    delta: -0.5,
    length: 20000,
    increment: 25,
    size: 0.17,
  },
};

export const BoualiAttractorData = {
  menuData: {
    alpha: {
      value: 0.31,
      min: 0,
      max: 1,
      step: 0.0001,
    },
    delta: {
      value: 1.04,
      min: -1,
      max: 2,
      step: 0.0001,
    },

    size: {
      value: 0.11,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.33,
    delta: 1.04,
    length: 20000,
    increment: 25,
    size: 0.11,
  },
};

export const BurkeShawAttractorData = {
  menuData: {
    upsilon: {
      value: 4.272,
      min: 1,
      max: 5,
      step: 0.001,
    },
    delta: {
      value: 10,
      min: -10,
      max: 20,
      step: 0.01,
    },
    increment: {
      value: 7,
      min: 1,
      max: 25,
      step: 1,
    },
    size: {
      value: 0.06,
      min: 0,
      max: 2,
      step: 0.01,
    },
    length: {
      value: 12000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    upsilon: 4.272,
    delta: 10,
    size: 0.06,
    length: 12000,
    increment: 7,
  },
};

export const ChenCelikovskyAttractorData = {
  menuData: {
    alpha: {
      value: 36,
      min: 1,
      max: 40,
      step: 0.1,
    },
    beta: {
      value: 3,
      min: -5,
      max: 10,
      step: 0.01,
    },
    delta: {
      value: 20,
      min: -10,
      max: 30,
      step: 0.1,
    },
    increment: {
      value: 3,
      min: 1,
      max: 25,
      step: 1,
    },
    size: {
      value: 0.25,
      min: 0,
      max: 2,
      step: 0.01,
    },

    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 36,
    beta: 3,
    delta: 20,
    length: 20000,
    increment: 3,
    size: 0.25,
  },
};

export const ChenLeeAttractorData = {
  menuData: {
    alpha: {
      value: 0.57,
      min: -3,
      max: 3,
      step: 0.001,
    },
    beta: {
      value: -2.96,
      min: -10,
      max: 1,
      step: 0.001,
    },
    delta: {
      value: -0.35,
      min: -2,
      max: 2,
      step: 0.001,
    },
    increment: {
      value: 19,
      min: 1,
      max: 25,
      step: 1,
    },
    size: {
      value: 0.11,
      min: 0,
      max: 2,
      step: 0.01,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.57,
    beta: -2.96,
    delta: -0.35,
    length: 20000,
    increment: 19,
    size: 0.11,
  },
};

export const ChuaAttractorData = {
  menuData: {
    alpha: {
      value: 15.6,
      min: 1,
      max: 30,
      step: 0.1,
    },
    beta: {
      value: 1,
      min: -5,
      max: 5,
      step: 0.1,
    },
    sigma: {
      value: 25.58,
      min: 1,
      max: 30,
      step: 0.1,
    },
    delta: {
      value: -1,
      min: -5,
      max: 5,
      step: 0.1,
    },
    upsilon: {
      value: 0,
      min: -5,
      max: 5,
      step: 0.01,
    },
    size: {
      value: 0.11,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 11,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 10000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 15.6,
    beta: 1,
    sigma: 25.58,
    delta: -1,
    upsilon: 0,
    length: 10000,
    increment: 11,
    size: 0.11,
  },
};

export const CoulletAttractorData = {
  menuData: {
    alpha: {
      value: 0.52,
      min: -1,
      max: 1,
      step: 0.001,
    },
    beta: {
      value: -0.9,
      min: -1,
      max: 1,
      step: 0.001,
    },
    sigma: {
      value: -0.45,
      min: -1,
      max: 1,
      step: 0.001,
    },
    delta: {
      value: -0.06,
      min: -1,
      max: 1,
      step: 0.001,
    },

    size: {
      value: 0.07,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.52,
    beta: -0.9,
    sigma: -0.45,
    delta: -0.06,

    size: 0.07,
    length: 20000,
    increment: 25,
  },
};

export const DadrasAttractorData = {
  menuData: {
    psi: {
      value: 2.82,
      min: 1,
      max: 5,
      step: 0.001,
    },
    rho: {
      value: 7.6,
      min: 1,
      max: 10,
      step: 0.001,
    },
    r: {
      value: 1.83,
      min: 1,
      max: 3,
      step: 0.001,
    },
    sigma: {
      value: 4.94,
      min: 2,
      max: 10,
      step: 0.01,
    },
    upsilon: {
      value: 7.9,
      min: 1,
      max: 14,
      step: 0.01,
    },

    size: {
      value: 0.09,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 8,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    psi: 2.82,
    rho: 7.6,
    r: 1.83,
    sigma: 4.94,
    upsilon: 7.9,

    size: 0.09,
    length: 20000,
    increment: 8,
  },
};

export const DequanLiAttractorData = {
  menuData: {
    alpha: {
      value: 39.9,
      min: 35,
      max: 45,
      step: 0.1,
    },
    beta: {
      value: 0.53,
      min: -1,
      max: 2,
      step: 0.001,
    },
    delta: {
      value: 0.16,
      min: -1,
      max: 1,
      step: 0.01,
    },
    rho: {
      value: 53.8,
      min: 50,
      max: 60,
      step: 0.1,
    },
    upsilon: {
      value: 0.58,
      min: 0,
      max: 1,
      step: 0.001,
    },
    sigma: {
      value: 19.1,
      min: 18,
      max: 21,
      step: 0.01,
    },

    size: {
      value: 1,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 1,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 39.9,
    beta: 0.53,
    delta: 0.16,
    rho: 53.8,
    upsilon: 0.58,
    sigma: 19.1,

    size: 1,
    length: 20000,
    increment: 1,
  },
};

export const FinanceAttractorData = {
  menuData: {
    alpha: {
      value: 0.001,
      min: -1,
      max: 1,
      step: 0.0001,
    },
    beta: {
      value: 0.2,
      min: -1,
      max: 1,
      step: 0.001,
    },
    sigma: {
      value: 1.1,
      min: 0,
      max: 3,
      step: 0.01,
    },

    size: {
      value: 0.07,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 16,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.001,
    beta: 0.2,
    sigma: 1.1,

    size: 0.03,
    length: 20000,
    increment: 16,
  },
};

export const FourWingAttractorData = {
  menuData: {
    alpha: {
      value: 4,
      min: -10,
      max: 55,
      step: 0.001,
    },
    beta: {
      value: 6,
      min: -10,
      max: 10,
      step: 0.001,
    },
    sigma: {
      value: 10,
      min: 8,
      max: 40,
      step: 0.001,
    },
    delta: {
      value: 5,
      min: 0,
      max: 30,
      step: 0.001,
    },
    k: {
      value: 1,
      min: -5,
      max: 5,
      step: 0.001,
    },

    size: {
      value: 0.11,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 20,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 4,
    beta: 6,
    sigma: 10,
    delta: 5,
    k: 1,

    size: 0.11,
    length: 20000,
    increment: 20,
  },
};

export const GenesioTesiAttractorData = {
  menuData: {
    alpha: {
      value: 0.444,
      min: -2,
      max: 2,
      step: 0.001,
    },
    beta: {
      value: 1.1,
      min: -1,
      max: 2,
      step: 0.001,
    },
    delta: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.001,
    },

    size: {
      value: 0.02,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 20,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.444,
    beta: 1.1,
    delta: 1,

    size: 0.02,
    length: 20000,
    increment: 20,
  },
};

export const HadleyAttractorData = {
  menuData: {
    alpha: {
      value: 0.43,
      min: -2,
      max: 2,
      step: 0.001,
    },
    beta: {
      value: 5.18,
      min: 1,
      max: 8,
      step: 0.001,
    },
    sigma: {
      value: 6.23,
      min: 4,
      max: 12,
      step: 0.01,
    },
    delta: {
      value: 0.57,
      min: -2,
      max: 2,
      step: 0.01,
    },

    size: {
      value: 0.25,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 4,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.43,
    beta: 5.18,
    sigma: 6.23,
    delta: 0.57,

    size: 0.25,
    length: 20000,
    increment: 4,
  },
};

export const HalvorsenAttractorData = {
  menuData: {
    alpha: {
      value: 1.4,
      min: -2,
      max: 5,
      step: 0.001,
    },
    size: {
      value: 0.22,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 1,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 1.4,

    size: 0.22,
    length: 20000,
    increment: 1,
  },
};

export const LiuChenAttractorData = {
  menuData: {
    alpha: {
      value: 2.4,
      min: -2,
      max: 3,
      step: 0.001,
    },
    beta: {
      value: -3.78,
      min: -6,
      max: 2,
      step: 0.001,
    },
    delta2: {
      value: 14,
      min: 7,
      max: 20,
      step: 0.01,
    },
    delta: {
      value: -11,
      min: -15,
      max: 1,
      step: 0.01,
    },
    upsilon: {
      value: 4,
      min: 1,
      max: 7,
      step: 0.001,
    },
    sigma: {
      value: 5.58,
      min: 1,
      max: 8,
      step: 0.001,
    },
    rho: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.001,
    },
    size: {
      value: 0.22,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 1,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 2.4,
    beta: -3.78,
    delta2: 14,
    delta: 11,
    upsilon: 4,
    sigma: 5.58,
    rho: 1,
    size: 0.22,
    length: 20000,
    increment: 1,
  },
};

export const ThomasAttractorData = {
  menuData: {
    beta: {
      value: 0.19,
      min: -5,
      max: 5,
      step: 0.001,
    },
    size: {
      value: 0.22,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 20000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    beta: 0.19,
    size: 0.22,
    length: 20000,
    increment: 25,
  },
};
