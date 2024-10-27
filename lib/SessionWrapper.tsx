"use client";
//
//import { Theme-provider } from "./components/Theme-provider";
import { SessionProvider } from "next-auth/react";

const SessionWrapper = ({ children }:{children:React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionWrapper