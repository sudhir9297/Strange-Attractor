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
// TODO : Need to Fix Aizaawa Attractor
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
        x + increment * (z - beta) * x - y,
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
