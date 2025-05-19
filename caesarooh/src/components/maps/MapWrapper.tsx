import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import useMapStore from '@/store/mapStore'
import 'mapbox-gl/dist/mapbox-gl.css'

// Initialize Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fpc2FyaGFkaSIsImEiOiJjbWF1b3p5N2cwenc3MmtzNG9lbnN3MGJjIn0.ZgUTg8sfWrObCZw4sx325w'

interface MapWrapperProps {
  className?: string
  initialCenter?: [number, number]
  initialZoom?: number
  initialStyle?: string
  onMapClick?: (event: mapboxgl.MapMouseEvent) => void
  onMapLoad?: (map: mapboxgl.Map) => void
}

const MapWrapper: React.FC<MapWrapperProps> = ({
  className = '',
  initialCenter,
  initialZoom,
  initialStyle,
  onMapClick,
  onMapLoad,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapInitialized, setMapInitialized] = useState(false)
  
  const {
    center: storeCenter,
    zoom: storeZoom,
    style: mapStyle,
    setCenter,
    setZoom,
    setBounds,
    setIsLoaded,
  } = useMapStore()

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const initCenter = initialCenter || storeCenter
    const initZoom = initialZoom || storeZoom
    const initStyle = initialStyle || mapStyle

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: initStyle,
      center: initCenter,
      zoom: initZoom,
    })

    const mapInstance = map.current

    mapInstance.on('load', () => {
      setIsLoaded(true)
      setMapInitialized(true)
      if (onMapLoad) onMapLoad(mapInstance)
    })

    mapInstance.on('move', () => {
      if (!mapInitialized) return
      const center = mapInstance.getCenter().toArray() as [number, number]
      setCenter(center)
    })

    mapInstance.on('zoom', () => {
      if (!mapInitialized) return
      setZoom(mapInstance.getZoom())
    })

    mapInstance.on('moveend', () => {
      if (!mapInitialized) return
      const bounds = mapInstance.getBounds()
      if (bounds) {
        setBounds({
          north: bounds.getNorth(),
          south: bounds.getSouth(),
          east: bounds.getEast(),
          west: bounds.getWest(),
        })
      }
    })

    if (onMapClick) {
      mapInstance.on('click', onMapClick)
    }

    // Ensure the map resizes when the window resizes
    const handleResize = () => {
      mapInstance.resize()
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mapInstance.remove()
    }
    // We only want to initialize once, ignoring dependency changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle updates from props without causing circular dependencies
  useEffect(() => {
    if (!map.current || !mapInitialized) return

    // Only update if values are explicitly provided in props
    // and different from current map values
    if (initialCenter) {
      const currentCenter = map.current.getCenter().toArray()
      if (initialCenter[0] !== currentCenter[0] || initialCenter[1] !== currentCenter[1]) {
        map.current.setCenter(initialCenter)
      }
    }
    
    if (initialZoom !== undefined) {
      const currentZoom = map.current.getZoom()
      if (initialZoom !== currentZoom) {
        map.current.setZoom(initialZoom)
      }
    }
    
    if (initialStyle && initialStyle !== map.current.getStyle().name) {
      map.current.setStyle(initialStyle)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCenter, initialZoom, initialStyle, mapInitialized])

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[400px] ${className}`}
    />
  )
}

export default MapWrapper 