import { createRoot } from "react-dom/client";

import "./styles/index.css";
import { AppLayout } from "./components/layouts/AppLayout";

createRoot(document.getElementById("root")!).render(<AppLayout />);
