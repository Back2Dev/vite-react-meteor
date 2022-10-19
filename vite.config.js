import { defineConfig } from "vite"
// Example with React
import react from "@vitejs/plugin-react"

react({ fastRefresh: false })

export default defineConfig({
  plugins: [
    react({
      // Disabling refresh stops the error, but that's kind of pointless
      // include: "**/*.disabled",
    }),
  ],
  // We need to define the UI entry point for Meteor here
  meteor: {
    clientEntry: "imports/ui/main.jsx",
  },
})
