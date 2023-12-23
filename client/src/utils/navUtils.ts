import { Resolution } from "../components/Navbar";

export const getResolution = () => {
    const resolution = { width: window.innerWidth, height: window.innerHeight };
    return resolution;
}

export const isMobileHandle = (resolution: Resolution ) => {
    if(resolution.width <= 1024) {
        return true
      } else {
        return false
      }
}
