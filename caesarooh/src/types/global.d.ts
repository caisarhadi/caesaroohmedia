import { StoreApi } from 'zustand';
import { MockUIState } from '@/components/layout/Header.stories';

declare global {
  interface Window {
    useUIStore: StoreApi<MockUIState>;
  }
} 