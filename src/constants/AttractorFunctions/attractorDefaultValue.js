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
      value: -4.5,
      min: -10,
      max: 3,
      step: 0.01,
    },
    beta: {
      value: 4.0,
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
    alpha: -4.5,
    beta: 4.0,
    delta: -0.5,
    length: 20000,
    increment: 25,
  },
};

export const BoualiAttractorData = {
  menuData: {
    alpha: {
      value: 0.3,
      min: -1,
      max: 3,
      step: 0.001,
    },
    delta: {
      value: 1,
      min: -2,
      max: 2,
      step: 0.001,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 9000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 0.3,
    delta: 1,
    length: 20000,
    increment: 25,
  },
};

export const BurkeShawAttractorData = {
  menuData: {
    upsilon: {
      value: 3.94,
      min: 1,
      max: 5,
      step: 0.001,
    },
    delta: {
      value: 2,
      min: -10,
      max: 20,
      step: 0.001,
    },
    increment: {
      value: 25,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 9000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    upsilon: 3.94,
    delta: 2,
    length: 20000,
    increment: 25,
  },
};

export const ChenCelikovskyAttractorData = {
  menuData: {
    alpha: {
      value: 19,
      min: 1,
      max: 40,
      step: 0.1,
    },
    beta: {
      value: 2.85,
      min: -5,
      max: 10,
      step: 0.01,
    },
    delta: {
      value: 9.9,
      min: -10,
      max: 30,
      step: 0.1,
    },
    increment: {
      value: 6,
      min: 1,
      max: 25,
      step: 1,
    },
    length: {
      value: 6000,
      min: 1000,
      max: 20000,
      step: 1000,
    },
  },
  state: {
    alpha: 19,
    beta: 2.85,
    delta: 9.9,
    length: 60000,
    increment: 6,
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
      value: 0.8,
      min: -5,
      max: 5,
      step: 0.1,
    },
    sigma: {
      value: 24.8,
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
      value: 0.1,
      min: -5,
      max: 5,
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
    beta: 0.8,
    sigma: 24.8,
    delta: -1,
    upsilon: 0.1,
    length: 10000,
    increment: 11,
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
    alpha: 0.52,
    beta: -0.9,
    sigma: -0.45,
    delta: -0.06,

    size: 0.1,
    length: 20000,
    increment: 25,
  },
};

export const DadrasAttractorData = {
  menuData: {
    psi: {
      value: 3.77,
      min: 1,
      max: 5,
      step: 0.001,
    },
    rho: {
      value: 4,
      min: 1,
      max: 10,
      step: 0.001,
    },
    r: {
      value: 1.38,
      min: 1,
      max: 3,
      step: 0.001,
    },
    sigma: {
      value: 5,
      min: 2,
      max: 10,
      step: 0.01,
    },
    upsilon: {
      value: 8.17,
      min: 1,
      max: 14,
      step: 0.01,
    },

    size: {
      value: 0.11,
      min: 0,
      max: 2,
      step: 0.01,
    },
    increment: {
      value: 4,
      min: 1,
      max: 8,
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
    psi: 3.77,
    rho: 4.0,
    r: 1.38,
    sigma: 5.0,
    upsilon: 8.17,

    size: 0.1,
    length: 20000,
    increment: 4,
  },
};

export const DequanLiAttractorData = {
  menuData: {
    alpha: {
      value: 40.2,
      min: 35,
      max: 45,
      step: 0.1,
    },
    beta: {
      value: 0.29,
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
      value: 54.4,
      min: 50,
      max: 60,
      step: 0.1,
    },
    upsilon: {
      value: 0.63,
      min: 0,
      max: 1,
      step: 0.001,
    },
    sigma: {
      value: 20.4,
      min: 18,
      max: 21,
      step: 0.01,
    },

    size: {
      value: 0.41,
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
    alpha: 40.2,
    beta: 0.29,
    delta: 0.16,
    rho: 54.4,
    upsilon: 0.63,
    sigma: 20.4,

    size: 0.1,
    length: 20000,
    increment: 1,
  },
};
