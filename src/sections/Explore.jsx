import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { getData } from '../data/dataBase.js/dataBase'
import { Environment } from '@react-three/drei'

function getPointOnSphere(radius, index, total) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // Goldener Winkel für gleichmäßige Verteilung
  const y = 1 - (index / (total - 1)) * 2
  const radiusAtY = Math.sqrt(1 - y * y)
  const theta = goldenAngle * index
  const x = Math.cos(theta) * radiusAtY
  const z = Math.sin(theta) * radiusAtY
  return [x * radius, y * radius, z * radius]
}

const Explore = () => {
  const [data, setData] = useState([])
  const [hoveredData, setHoveredData] = useState(null)
  const [showCard, setShowCard] = useState(false)

  // Daten laden, wenn die Komponente gemountet wird
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result)
    }
    fetchData()
  }, [])

  const handleHover = (entry) => {
    setHoveredData(entry)
  }

  const handleClick = (entry) => {
    setHoveredData(entry)
    setShowCard(true)
  }

  const handleCloseCard = () => {
    setShowCard(false)
  }

  return (
    <div id='Explore' className='w-screen h-screen'>
      <Canvas>
        <Environment preset="city" background={false} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} />

        <mesh>
          <sphereGeometry args={[3.5, 64, 64]} />
          <meshStandardMaterial color="#1e1b4b" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Hier iterieren wir über die geladenen Daten und erzeugen für jeden Eintrag einen Punkt */}
        {data.map((entry, index) => {
          const position = getPointOnSphere(3.5, index, data.length)
          return (
            <mesh
              key={index}
              position={position}
              onPointerOver={() => handleHover(entry)} // Hover-Event
              onClick={() => handleClick(entry)} // Klick-Event
            >
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial
                color="#a855f7"
                emissive={hoveredData === entry ? "#ffffff" : "#a855f7"} // Leuchten bei Hover
                emissiveIntensity={hoveredData === entry ? 2 : 1.5}
              />
            </mesh>
          )
        })}

        <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Hier wird die Karte angezeigt, wenn showCard true ist */}
      {showCard && hoveredData && (
        <div
          className="fixed w-64 min-h-120 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-50 p-4 rounded-lg shadow-lg"
          style={{ zIndex: 100 }}
        >
          <h2 className="text-3xl text-center mb-6 text-purple-500 font-bold underline mt-3.5 "  >{hoveredData.title}</h2>
            <p className="text-sm" style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {hoveredData.content}
            </p>
          <button
            onClick={handleCloseCard}
            className="mt-4 p-2 bg-purple-500 text-purple-50 rounded hover:bg-purple-500 hover:text-purple-100 hover:border-purple-500 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default Explore
