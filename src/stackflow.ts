import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import {
  HomeScreen,
  TodoScreen,
  SettingsScreen,
  AddPlanScreen,
  PlanScreen,
} from "screens";

export const activities = {
  AddPlanScreen,
  HomeScreen,
  PlanScreen,
  SettingsScreen,
  TodoScreen,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [basicRendererPlugin()],
  initialActivity: () => "HomeScreen",
});
