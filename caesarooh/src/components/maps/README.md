# Map Components

This directory contains reusable mapping components for the Caesarooh application.

## MapWrapper

The `MapWrapper` component is a flexible wrapper around Mapbox GL JS that handles map initialization, state management, and event handling.

### Usage

```tsx
import MapWrapper from '@/components/maps/MapWrapper'

// Basic usage
<MapWrapper />

// With custom props
<MapWrapper 
  initialCenter={[-0.118092, 51.509865]} // London coordinates
  initialZoom={12}
  initialStyle="mapbox://styles/mapbox/streets-v12"
  className="h-96 rounded-lg" 
  onMapClick={(e) => console.log('Clicked at:', e.lngLat)}
  onMapLoad={(map) => console.log('Map loaded:', map)}
/>
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | string | Additional CSS classes for the map container |
| `initialCenter` | [number, number] | Initial center coordinates [longitude, latitude] |
| `initialZoom` | number | Initial zoom level |
| `initialStyle` | string | Initial map style URL |
| `onMapClick` | (event: mapboxgl.MapMouseEvent) => void | Click event handler |
| `onMapLoad` | (map: mapboxgl.Map) => void | Map load event handler |

### State Management

The map state is managed using Zustand in `@/store/mapStore.ts`. The store includes:

- `center`: Current map center coordinates
- `zoom`: Current zoom level
- `bounds`: Current map bounds
- `style`: Current map style
- `isLoaded`: Whether the map has loaded

You can access the map state from anywhere in your application:

```tsx
import useMapStore from '@/store/mapStore'

function MyComponent() {
  const { center, zoom, setCenter, setZoom } = useMapStore()
  
  return (
    <div>
      <p>Current center: {center[0]}, {center[1]}</p>
      <p>Current zoom: {zoom}</p>
      <button onClick={() => setCenter([-0.118092, 51.509865])}>
        Center on London
      </button>
    </div>
  )
}
```

### Environment Variables

The MapWrapper component requires a Mapbox access token. 

```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### Demo

A demo page is available at `/map-demo` to showcase the map functionality. 