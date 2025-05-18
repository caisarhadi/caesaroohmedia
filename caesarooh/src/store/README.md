# Store

This directory contains Zustand stores for state management in the CAESAR OOH MEDIA website.

## Structure

- `uiStore.ts` - UI-related state (theme, navigation, etc.)
- `mapStore.ts` - Map-related state (coordinates, POIs, etc.)
- `inventoryStore.ts` - Inventory-related state (filters, selected items, etc.)

## Guidelines

- Use Zustand for state management as specified in the project requirements
- Keep stores focused on specific domains
- Implement appropriate actions and selectors
- Document store structure and usage
- Ensure type safety with TypeScript 