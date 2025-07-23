import SpaceScene from "./components/SpaceScene";
import { motion } from "framer-motion";

function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                width: "100vw",
                height: "100vh",
                background: "#000",
                overflow: "hidden",
            }}
        >
            <SpaceScene />
        </motion.div>
    );
}

export default App;
