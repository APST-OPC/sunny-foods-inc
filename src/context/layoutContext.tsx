import { createContext } from 'react';

export interface ILayoutContext {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  isShowFab: boolean;
  setShowFab: (isOpen: boolean) => void;
}

export const LayoutContext = createContext<ILayoutContext | undefined>(undefined);
