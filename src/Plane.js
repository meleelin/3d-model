import * as THREE from 'three'
import grass from './img/grass.png'

function Plane() {
  const base = new THREE.TextureLoader().load(grass)
  base.wrapS = THREE.RepeatWrapping
  base.wrapT = THREE.RepeatWrapping
  base.repeat.set(80, 80)

  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[150, 150]} />
      <meshLambertMaterial attach="material" color="lightblue" map={base} />
    </mesh>
  )
}

export default Plane
