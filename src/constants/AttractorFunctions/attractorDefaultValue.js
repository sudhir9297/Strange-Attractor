export const lorenzAttractorData = {
  menuData: {
    rho: {
      value: 28,
      min: 1,
      max: 28 * 2,
      step: 1,
    },
    sigma: {
      value: 10,
      min: 1,
      max: 20,
      step: 0.5,
    },
    beta: {
      value: 8 / 3,
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
    rho: 28,
    sigma: 10,
    beta: 8 / 3,
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
