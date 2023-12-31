import { useContext } from "react";
import { AuthContext } from "../components/contexts/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }
    return context;
};
