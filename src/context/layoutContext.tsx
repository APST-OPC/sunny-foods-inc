import type { PropsWithChildren } from 'react';

import { createContext, useState } from 'react';

export interface ILayoutContext {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  isShowFab: boolean;
  setShowFab: (isOpen: boolean) => void;
}

export const LayoutContext = createContext<ILayoutContext | undefined>(undefined);

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isShowFab, setShowFab] = useState<boolean>(false);

  const value: ILayoutContext = { isSidebarOpen, setSidebarOpen, isShowFab, setShowFab };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
