**State Management In-Depth**

This section expands on the State Management strategy chosen (Zustand) and outlines conventions for its implementation. While the overall approach and core store setup are defined here, detailed state slices, selectors, and actions for specific features will generally be developed emergently, adhering to these established patterns.

  - **Chosen Solution:** Zustand.
  - **Rationale (briefly, if not fully covered in main arch doc):** Zustand is chosen for its lightweight nature, simplicity (minimal boilerplate compared to Redux), direct store creation and usage, and its performance characteristics (components only re-render if the subscribed part of the state changes). It fits well with React's functional component model using hooks and is flexible enough for both global state and feature-specific complex state, while also being compatible with Next.js's server-side rendering and client-side hydration needs.
  - **Store Structure / Slices:**
    Zustand stores will be defined in the `src/store/` directory. Each store will typically manage a distinct domain or feature set of the application's state. This promotes modularity and separation of concerns.
      - **Core Slice Example: `uiStore.ts`**
          - **Purpose:** Manages global UI states such as theme preference, navigation drawer visibility, and active modal dialogs.
          - **State Shape:**
            ```typescript
            // src/store/uiStore.ts
            import { create } from 'zustand';
            import { persist, createJSONStorage } from 'zustand/middleware';

            type Theme = 'light' | 'dark' | 'system';

            interface UIState {
              isDrawerNavOpen: boolean;
              currentTheme: Theme;
              activeModalId: string | null;
            }

            interface UIActions {
              toggleDrawerNav: () => void;
              openDrawerNav: () => void;
              closeDrawerNav: () => void;
              setTheme: (theme: Theme) => void;
              openModal: (modalId: string) => void;
              closeModal: () => void;
            }

            export const useUIStore = create<UIState & UIActions>()(
              persist(
                (set, get) => ({
                  isDrawerNavOpen: false,
                  currentTheme: 'system', // Initial default, client-side effect updates based on localStorage/system
                  activeModalId: null,

                  toggleDrawerNav: () => set((state) => ({ isDrawerNavOpen: !state.isDrawerNavOpen })),
                  openDrawerNav: () => set({ isDrawerNavOpen: true }),
                  closeDrawerNav: () => set({ isDrawerNavOpen: false }),

                  setTheme: (theme) => {
                    set({ currentTheme: theme });
                    // Client-side effect to update DOM and localStorage
                    if (typeof window !== 'undefined') {
                      document.documentElement.classList.remove('light', 'dark');
                      if (theme === 'system') {
                        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                        document.documentElement.classList.add(systemPrefersDark ? 'dark' : 'light');
                      } else {
                        document.documentElement.classList.add(theme);
                      }
                    }
                  },
                  openModal: (modalId) => set({ activeModalId: modalId }),
                  closeModal: () => set({ activeModalId: null }),
                }),
                {
                  name: 'ui-settings-storage', // name of item in localStorage
                  storage: createJSONStorage(() => localStorage),
                  partialize: (state) => ({ currentTheme: state.currentTheme }), // Only persist theme
                }
              )
            );
            ```
      - **Feature Slice Example: `mapStore.ts`**
          - **Purpose:** Manages state related to the Mapping page, such as current map filters, details of a selected OOH site, POI visibility settings, and current map viewport.
          - **State Shape (Example):**
            ```typescript
            // src/store/mapStore.ts
            import { create } from 'zustand';
            // Assuming types are defined in src/types/map.d.ts
            // import { OOHSiteFilterCriteria, MapViewport } from '@/types/map';

            interface MapState {
              filters: Partial<any>; // Replace 'any' with OOHSiteFilterCriteria type
              selectedOOHSiteId: string | null;
              isPOIVisible: boolean;
              activePOICategories: string[];
              currentViewport: any | null; // Replace 'any' with MapViewport type
              isLoadingMapData: boolean;
            }

            interface MapActions {
              setMapFilters: (newFilters: Partial<any>) => void; // Replace 'any'
              clearMapFilters: () => void;
              selectOOHSite: (siteId: string | null) => void;
              togglePOIVisibility: () => void;
              setPOICategories: (categories: string[]) => void;
              setCurrentViewport: (viewport: any) => void; // Replace 'any'
              setLoadingMapData: (isLoading: boolean) => void;
            }

            export const useMapStore = create<MapState & MapActions>()((set) => ({
              filters: {},
              selectedOOHSiteId: null,
              isPOIVisible: true,
              activePOICategories: [],
              currentViewport: null,
              isLoadingMapData: false,

              setMapFilters: (newFilters) => set((state) => ({
                filters: { ...state.filters, ...newFilters }
              })),
              clearMapFilters: () => set({ filters: {} }),
              selectOOHSite: (siteId) => set({ selectedOOHSiteId: siteId }),
              togglePOIVisibility: () => set((state) => ({ isPOIVisible: !state.isPOIVisible })),
              setPOICategories: (categories) => set({ activePOICategories: categories }),
              setCurrentViewport: (viewport) => set({ currentViewport: viewport }),
              setLoadingMapData: (isLoading) => set({ isLoadingMapData: isLoading }),
            }));
            ```
  - **Key Selectors:**
    Zustand promotes direct state access within components (e.g., `const count = useCounterStore(state => state.count)`). For performance optimization with object/array selections, use shallow equality checks (e.g., `import { shallow } from 'zustand/shallow'; const { items, total } = useCartStore(state => ({ items: state.items, total: state.total }), shallow);`).
  - **Key Actions / Reducers / Thunks:**
    Actions are functions within the store that use `set` to update state. Asynchronous operations (like API calls) can be handled directly within these actions or by calling service functions and then updating the store.
      - **Core Action Example (from `uiStore.ts`):** (Already shown in `uiStore.ts` example above for `setTheme`)
      - **Async Action Example (conceptual):**
        ```typescript
        // Conceptual example within a store
        // import { someService } from '@/services/someService';
        //
        // fetchDataAndUpdateStore: async (params) => {
        //   set({ isLoading: true, error: null });
        //   try {
        //     const data = await someService.fetchData(params);
        //     set({ data, isLoading: false });
        //   } catch (error) {
        //     set({ error: (error as Error).message, isLoading: false });
        //   }
        // },
        