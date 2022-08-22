import "@stackflow/basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import {
  AddDueScreen,
  AddTodoScreen,
  HomeScreen,
  ResultScreen,
  SettingsScreen,
  MenualScreen,
} from "screens";

export const activities = {
  AddDueScreen,
  AddTodoScreen,
  HomeScreen,
  MenualScreen,
  ResultScreen,
  SettingsScreen,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        AddDueScreen: "/add/due",
        AddTodoScreen: "/add/todo",
        HomeScreen: "/",
        MenualScreen: "/menual",
        ResultScreen: "/result",
        SettingsScreen: "/settings",
      },
      fallbackActivity: () => "HomeScreen",
    }),
  ],
  initialActivity: () => "HomeScreen",
});
