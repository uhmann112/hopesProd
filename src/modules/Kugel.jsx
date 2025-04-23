import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { TextureLoader } from 'three'
import { Environment } from '@react-three/drei'

const Kugel = () => {
  const texture = new TextureLoader().load('prodHopes/src/assets/BlackMarble.jpg')

  return (
    <div className='w-full h-full'>
      <Canvas>
        <Environment preset="city" background={false} />
        <Float>
          <ambientLight intensity={10.5} />
          <pointLight position={[10, 10, 10]} intensity={3} />
          <mesh>
            <sphereGeometry args={[3.5, 64, 64]} />
            <meshStandardMaterial 
              map={texture}
              roughness={0.4}  // Increased roughness for more natural look
              metalness={0.3} // Reduced metalness for earth-like appearance
              
              toneMapped={true} // Keep tone mapping for more realistic colors
              color="#ffffff" // Add base color
            />
          </mesh>
          <OrbitControls enableZoom={false} enablePan={true} autoRotate autoRotateSpeed={1} />
        </Float>
      </Canvas>
    </div>
  )
}

export default Kugel