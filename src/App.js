import './App.css'
import React, { Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

// 模型
import Creeper from './Component/Creeper.js'
import Chair from './Component/Chair.js'
import Flower from './Component/Flower.js'
import Gun from './Component/Gun.js'
import Witch from './Component/Witch.js'

// 草地
import Plane from './Plane.js'

function App() {
  const [select, setSelect] = useState(1)
  const Selector = () => {
    let Show = []
    if (select === 1) {
      Show.push(<Creeper />)
    }
    if (select === 2) {
      Show.push(<Chair />)
    }
    if (select === 3) {
      Show.push(<Gun />)
    }
    if (select === 4) {
      Show.push(<Flower />)
    }
    if (select === 5) {
      Show.push(<Witch />)
    }
    return Show
  }

  const Picker = () => {
    let list = []
    for (let i = 1; i <= 5; i++) {
      list.push(
        <li
          onClick={(e) => {
            setSelect(i)
            Selector()
          }}
        >
          <figure>
            <img src={`./images/model_${i}.png`} alt="" />
          </figure>
        </li>
      )
    }
    return list
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 2.5, 3.5], fov: 90 }}>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.5} castShadow />
        <spotLight position={[10, 15, 10]} angle={0.3} castShadow />
        <fog attach="fog" args={['white', 0, 30]} />
        <Suspense fallback={null}>{Selector()}</Suspense>
        <Plane />
      </Canvas>
      <div className="picker">{Picker()}</div>
    </>
  )
}

export default App
