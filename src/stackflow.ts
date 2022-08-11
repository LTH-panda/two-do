import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { HomeScreen, TodoScreen, SettingsScreen } from "screens";

export const activities = {
  HomeScreen,
  TodoScreen,
  SettingsScreen,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [basicRendererPlugin()],
  initialActivity: () => "HomeScreen",
});
