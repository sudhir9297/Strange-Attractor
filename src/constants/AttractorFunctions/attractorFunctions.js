export const lorenzAttractor = (data) => {
  const {
    rho = 28,
    sigma = 10,
    beta = 8 / 3,
    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (sigma * (y - x)),
        y + increment * (x * (rho - z)),
        z + increment * (x * y - beta * z),
      ]);
      return acc;
    },
    [start]
  );
};
//not working
export const AizawaAttractor = (data) => {
  const {
    epsilom = 0.25,
    alpha = 0.95,
    gamma = 0.6,
    delta = 3.5,
    sigma = 0.1,
    beta = 0.7,
    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * ((z - beta) * x) - delta * y,
        y + increment * (delta * x + (z - beta) * y),
        z +
          increment *
            (gamma +
              alpha * z -
              Math.pow(z, 3) / 3 -
              (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + epsilom * z) +
              sigma * z * Math.pow(x, 3)),
      ]);
      return acc;
    },
    [start]
  );
};

export const ArneodoAttractor = (data) => {
  const {
    alpha = -5.5,
    beta = 3.5,
    delta = -1,
    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * y,
        y + increment * z,
        z + increment * (-alpha * x - beta * y - z + delta * Math.pow(x, 3)),
      ]);
      return acc;
    },
    [start]
  );
};

export const BoualiAttractor = (data) => {
  const {
    alpha = 0.3,
    delta = 1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (x * (4 - y) + alpha * z),
        y + increment * -y * (1 - Math.pow(x, 2)),
        z + increment * (-x * (1.5 - delta * z) - 0.05 * z),
      ]);
      return acc;
    },
    [start]
  );
};

export const BurkeShawAttractor = (data) => {
  const {
    upsilon = 4.272,
    delta = 10,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (-delta * (x + y)),
        y + increment * (-y - delta * x * z),
        z + increment * (delta * x * y + upsilon),
      ]);
      return acc;
    },
    [start]
  );
};

export const ChenCelikovskyAttractor = (data) => {
  const {
    alpha = 36,
    beta = 3,
    delta = 20,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * (y - x)),
        y + increment * (-x * z + delta * y),
        z + increment * (x * y - beta * z),
      ]);
      return acc;
    },
    [start]
  );
};

export const ChenLeeAttractor = (data) => {
  const {
    alpha = 5,
    beta = -10,
    delta = 0.38,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * x - y * z),
        y + increment * (beta * y + x * z),
        z + increment * (delta * z + x * (y / 3)),
      ]);
      return acc;
    },
    [start]
  );
};

export const ChuaAttractor = (data) => {
  const {
    alpha = 15.6,
    beta = 1,
    sigma = 25.58,
    delta = -1,
    upsilon = 0,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  const g = (x) =>
    upsilon * x + (delta + upsilon) * (Math.abs(x + 1) - Math.abs(x - 1));

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * (y - x - g(x))),
        y + increment * (beta * (x - y + z)),
        z + increment * (-sigma * y),
      ]);
      return acc;
    },
    [start]
  );
};

export const CoulletAttractor = (data) => {
  const {
    alpha = 0.8,
    beta = -1.1,
    sigma = -0.45,
    delta = -1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * y,
        y + increment * z,
        z +
          increment *
            (alpha * x + beta * y + sigma * z + delta * Math.pow(x, 3)),
      ]);
      return acc;
    },
    [start]
  );
};

export const DadrasAttractor = (data) => {
  const {
    psi = 3,
    rho = 2.7,
    r = 1.7,
    sigma = 2,
    upsilon = 9,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (-psi * x + rho * y * z),
        y + increment * (r * y - x * z + z),
        z + increment * (sigma * x * y - upsilon * z),
      ]);
      return acc;
    },
    [start]
  );
};

export const DequanLiAttractor = (data) => {
  const {
    alpha = 40,
    beta = 1.833,
    delta = 0.16,
    rho = 55,
    upsilon = 0.65,
    sigma = 20,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * (y - x) + delta * x * z),
        y + increment * (rho * x + sigma * y - x * z),
        z + increment * (beta * z + x * y - upsilon * Math.pow(x, 2)),
      ]);
      return acc;
    },
    [start]
  );
};

export const FinanceAttractor = (data) => {
  const {
    alpha = 0.001,
    beta = 0.2,
    sigma = 1.1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * ((1 / beta - alpha) * x + z + x * y),
        y + increment * (-beta * y - Math.pow(x, 2)),
        z + increment * (-x - sigma * z),
      ]);
      return acc;
    },
    [start]
  );
};

//not working
export const FourWingAttractor = (data) => {
  const {
    alpha = 4,
    beta = 6,
    sigma = 10,
    delta = 5,
    k = 1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * x - beta * y * z),
        y + increment * (-sigma * y + x * z),
        z + increment * (k * x - delta * z + x * z),
      ]);
      return acc;
    },
    [start]
  );
};

export const GenesioTesiAttractor = (data) => {
  const {
    alpha = 0.44,
    beta = 1.1,
    delta = 1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * y,
        y + increment * z,
        z + increment * (-delta * x - beta * y - alpha * z + x * x),
      ]);
      return acc;
    },
    [start]
  );
};

export const HadleyAttractor = (data) => {
  const {
    alpha = 0.2,
    beta = 4,
    sigma = 8,
    delta = 1,

    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x +
          increment *
            (Math.pow(-y, 2) - Math.pow(z, 2) - alpha * x + alpha * sigma),
        y + increment * (x * y - beta * x * z - y + delta),
        z + increment * (beta * x * y + x * z - z),
      ]);
      return acc;
    },
    [start]
  );
};

//not working
export const HalvorsenAttractor = (data) => {
  const { alpha = 1.4, length = 1200, start = [0.01, 0.01, 0.01] } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (-alpha * x - 4 * y - 4 * z - Math.pow(y, 2)),
        y + increment * (-alpha * y - 4 * z - 4 * x - Math.pow(z, 2)),
        z + increment * (-alpha * z - 4 * x - 4 * y - Math.pow(x, 2)),
      ]);
      return acc;
    },
    [start]
  );
};
//not working
export const LiuChenAttractor = (data) => {
  const {
    alpha = 2.4,
    beta = -3.78,
    delta2 = 14,
    delta = -11,
    upsilon = 4,
    sigma = 5.58,
    rho = 1,
    length = 1200,
    start = [0.01, 0.01, 0.01],
  } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (alpha * y + beta * x + delta2 * y * z),
        y + increment * (delta * y - z + upsilon * x * z),
        z + increment * (sigma * z + rho * x * y),
      ]);
      return acc;
    },
    [start]
  );
};
//not working
export const ThomasAttractor = (data) => {
  const { beta = 0.19, length = 1200, start = [0.01, 0.01, 0.01] } = data;
  const POINTCAP = 20000;
  const arrayLength = Math.min(POINTCAP, length);
  const increment = data.increment / 1000;

  return new Array(arrayLength).fill([0, 0, 0]).reduce(
    (acc, val, i) => {
      const [x, y, z] = acc[i];
      acc.push([
        x + increment * (beta * x + Math.sin(y)),
        y + increment * (-beta * y + Math.sin(z)),
        z + increment * (-beta * z + Math.sin(x)),
      ]);
      return acc;
    },
    [start]
  );
};
