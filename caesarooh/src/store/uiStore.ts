import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface UIState {
  theme: Theme;
  isHeaderFixed: boolean;
  isDrawerOpen: boolean;
  activeModal: string | null;
  setTheme: (theme: Theme) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setHeaderFixed: (isFixed: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'system',
      isHeaderFixed: false,
      isDrawerOpen: false,
      activeModal: null,
      
      setTheme: (theme) => set({ theme }),
      
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
      
      setHeaderFixed: (isFixed) => set({ isHeaderFixed: isFixed }),
      
      openModal: (modalId) => set({ activeModal: modalId }),
      
      closeModal: () => set({ activeModal: null }),
    }),
    {
      name: 'ui-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }), // Only persist theme
    }
  )
);

export default useUIStore; 