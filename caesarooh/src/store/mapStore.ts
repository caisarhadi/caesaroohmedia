import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface MapState {
  center: [number, number]
  zoom: number
  bounds: {
    north: number
    south: number
    east: number
    west: number
  } | null
  style: string
  isLoaded: boolean
  // Actions
  setCenter: (center: [number, number]) => void
  setZoom: (zoom: number) => void
  setBounds: (bounds: { north: number; south: number; east: number; west: number }) => void
  setStyle: (style: string) => void
  setIsLoaded: (isLoaded: boolean) => void
}

const useMapStore = create<MapState>()(
  devtools(
    (set) => ({
      // Initial state
      center: [107.247013,-6.559377], // London coordinates as default
      zoom: 8,
      bounds: null,
      style: 'mapbox://styles/caisarhadi/cj40e3o5l355i2rlcfycxo1ay', // Default Mapbox style
      isLoaded: false,

      // Actions
      setCenter: (center) => set({ center }),
      setZoom: (zoom) => set({ zoom }),
      setBounds: (bounds) => set({ bounds }),
      setStyle: (style) => set({ style }),
      setIsLoaded: (isLoaded) => set({ isLoaded }),
    }),
    {
      name: 'map-store',
    }
  )
)

export default useMapStore 