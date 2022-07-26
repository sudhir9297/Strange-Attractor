export const colorList = [
  {
    id: 1,
    name: "Cod Gray",
    color: "#0C0C0C",
  },
  {
    id: 2,
    name: "Oxford Blue",
    color: "#394458",
  },

  {
    id: 3,
    name: "Woodsmoke",
    color: "#0A0C0B",
  },
  {
    id: 4,
    name: "Friar Gray",
    color: "#807c74",
  },

  {
    id: 5,
    name: "Mine Shaft",
    color: "#303030",
  },
  {
    id: 6,
    name: "Silver Sand",
    color: "#C9CACC",
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
