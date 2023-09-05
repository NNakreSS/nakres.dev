import { createContext, useState } from "react";

export const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState();

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};
