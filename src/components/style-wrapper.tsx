"use client";

import * as React from "react";

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: "default";
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  if (!styleName || "default" === styleName) {
    return <>{children}</>;
  }

  return null;
}
