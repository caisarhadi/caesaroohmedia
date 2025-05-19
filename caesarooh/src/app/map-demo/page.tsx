'use client'

import MapWrapper from '@/components/maps/MapWrapper'
import { useState } from 'react'
import useMapStore from '@/store/mapStore'

export default function MapDemo() {
  const { center, zoom } = useMapStore()
  const [clickedCoords, setClickedCoords] = useState<[number, number] | null>(null)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Map Demo</h1>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Current Center: [{center[0].toFixed(6)}, {center[1].toFixed(6)}]
        </p>
        <p className="text-sm text-gray-600">
          Current Zoom: {zoom.toFixed(2)}
        </p>
        {clickedCoords && (
          <p className="text-sm text-gray-600">
            Last Clicked: [{clickedCoords[0].toFixed(6)}, {clickedCoords[1].toFixed(6)}]
          </p>
        )}
      </div>

      <div className="h-[600px] rounded-lg overflow-hidden border border-gray-200">
        <MapWrapper
          initialCenter={[107.247013,-6.559377]}
          initialZoom={8}
          onMapClick={(e) => setClickedCoords([e.lngLat.lng, e.lngLat.lat])}
        />
      </div>
    </div>
  )
} 