import { AppScreen } from "@stackflow/basic-ui";
import platte from "commons/styles/platte";
import { Toast } from "components/@modules";
import React from "react";

type LayoutProps = {
  screenTheme?: "android" | "cupertino";
  children: React.ReactNode;
};

function Layout({ screenTheme = undefined, children }: LayoutProps) {
  return (
    <AppScreen backgroundColor={platte.color.bg} theme={screenTheme}>
      <Toast />
      <main className="absolute inset-0 flex flex-col">{children}</main>
    </AppScreen>
  );
}

export default Layout;
