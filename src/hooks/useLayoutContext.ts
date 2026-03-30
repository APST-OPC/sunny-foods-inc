import { useContext } from "react";

import { type ILayoutContext, LayoutContext } from "~/context/layoutContext";

export const useLayoutContext = (): ILayoutContext => {
  const layoutContext = useContext<ILayoutContext | undefined>(LayoutContext);

  if (layoutContext === undefined) {
    throw new Error("useLayoutContext must be used within an LayoutProvider");
  }

  return layoutContext;
};
