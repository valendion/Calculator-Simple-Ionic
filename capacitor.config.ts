import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.dion.calSimp",
  appName: "CalSimp",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
