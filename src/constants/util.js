export const colorList = [
  {
    id: 1,
    name: "Swans Down",
    color: "#D7F0EF",
  },

  {
    id: 2,
    name: "Mercury",
    color: "#E7E7E7",
  },
  {
    id: 3,
    name: "Pearl Bush",
    color: "#E2D7C6",
  },

  {
    id: 4,
    name: "Silver Rust",
    color: "#D0C3BD",
  },

  {
    id: 5,
    name: "Oxley",
    color: "#6F9F87",
  },
  {
    id: 6,
    name: "Logan",
    color: "#A6A8CD",
  },
];

// const Attractor = ({
//   attractorData: {
//     data: { menuData, state },
//     func,
//   },
//   useUiMenu,
// }) => {
//   let data = useControls({ ...menuData }, [menuData]);
//   // data = useControls({ ...menuData }, [menuData]);

//   // if (!useUiMenu) {
//   //   const useStore = createStrore(() => state);
//   //   data = useStore.getState();
//   // }

//   const points = func(data);

//   var newPoints = [];
//   for (var i = 0; i < points.length; i++) {
//     newPoints.push(new THREE.Vector3(points[i][0], points[i][1], points[i][2]));
//   }

//   var curve = new THREE.CatmullRomCurve3(newPoints);

//   const { segment, radius, crossSection, ...argsVal } = useControls({
//     segment: { value: 20000, min: 1000, max: 50000 },
//     radius: { value: 0.1, min: 0, max: 5, step: 0.1 },
//     crossSection: { value: 10, min: 0, max: 20 },
//     color: "#FFD700",
//     metalness: { value: 0.93, min: 0, max: 1 },
//     roughness: { value: 0.1, min: 0, max: 1 },
//   });

//   return (
//     <Tube args={[curve, segment, radius, crossSection, false]}>
//       <meshStandardMaterial {...argsVal} attach="material" />
//     </Tube>
//   );

//   let meshList = [...new Array(points.length)].map(() => new THREE.Object3D());
//   meshList.forEach((mesh, i) => {
//     mesh.position.set(points[i][0], points[i][1], points[i][2]);
//   });
//   const instance = useRef();

//   useEffect(() => {
//     let id = 0;
//     for (let i = 0; i < meshList.length; i++) {
//       meshList[id].updateMatrix();
//       instance.current.setMatrixAt(id, meshList[id++].matrix);
//     }
//     instance.current.instanceMatrix.needsUpdate = true;
//   });

//   const { size, ...props } = useControls({
//     size: { value: 0.5, min: 0, max: 1, step: 0.01 },
//     color: "#FFD700",
//     metalness: { value: 0.93, min: 0, max: 1 },
//     roughness: { value: 0.1, min: 0, max: 1 },
//   });

//   const s = 1 + Math.sin(2 * 10) / 10;
//   return (
//     <instancedMesh
//       ref={instance}
//       args={[null, null, meshList.length]}
//       receiveShadow
//       castShadow
//     >
//       <roundedBoxGeometry
//         receiveShadow
//         args={[size * s, size * s, size * s, 1, 0.075]}
//       />
//       {/* <sphereBufferGeometry args={[size]} castShadow receiveShadow>
//         <instancedBufferAttribute />
//       </sphereBufferGeometry> */}
//       <meshStandardMaterial {...props} attach="material" />
//     </instancedMesh>
//   );
// };
