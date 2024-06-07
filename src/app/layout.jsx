import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import styles from "./styles.module.css"
import NavLinks from "@/components/NavLinks";
import { NameContextProvider } from "@/contexts/NameContext";
import Toast from "@/components/Toast";


const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SpinWheel - Lucky Draw APP",
  description: "This website helps you to perform the task of finding the lucky person who wins in the Lucky Draw",
};

export default function RootLayout({ children }) {
  
 
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="sticky top-0" />
        <div className="absolute h-screen top-0 z-[-2] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
                <NameContextProvider>
          <main className="flex min-h-screen items-center  justify-center p-4 md:p-24  w-full">
          <div className={`${styles.glassyEffect} w-full md:w-[70%] h-[80vh] md:h-[70vh] relative flex flex-col  flex-wrap mt-20`}>


              <div className="opacity-100 overflow-auto">
                <NavLinks />
                {children}
              </div>
            </div>
            
        <Toast />
          </main>
                </NameContextProvider>
        </div>
      </body>
    </html>
  );
}
