declare module "@tsparticles/react" {
  import { ComponentType } from "react";
  
  interface ParticlesProps {
    id: string;
    init: (container: any) => void;
    options: any;
  }

  const Particles: ComponentType<ParticlesProps>;
  export default Particles;

  export function initParticlesEngine(callback: (engine: any) => Promise<void>): Promise<void>;
}

declare module "@tsparticles/slim" {
  export function loadSlim(engine: any): Promise<void>;
}