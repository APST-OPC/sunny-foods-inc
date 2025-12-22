import type { ILayoutContext } from '~/context/layoutContext';
import type { PropsWithChildren } from 'react';

import { useState } from 'react';

import { LayoutContext } from '~/context/layoutContext';

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isShowFab, setShowFab] = useState<boolean>(false);

  const value: ILayoutContext = { isSidebarOpen, setSidebarOpen, isShowFab, setShowFab };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
