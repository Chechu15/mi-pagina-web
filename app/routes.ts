// src/welcome/routes.ts
import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("ubuntu", "routes/ubuntu.tsx"), 
  route("debian", "routes/debian.tsx"),  
  route("linux-mint", "routes/linux-mint.tsx"), 
  route("fedora", "routes/fedora.tsx"), 
  route("arch-linux", "routes/arch-linux.tsx"),
  route("kali-linux", "routes/kali-linux.tsx"),
  route("manjaro", "routes/manjaro.tsx"),
  route("zorin", "routes/zorin.tsx"),
  route("garuda", "routes/garuda.tsx"),
  route("alpine", "routes/alpine.tsx"),
  route("centos", "routes/centos.tsx"),
  route("redhat", "routes/redhat.tsx"),
  route("quebesos", "routes/quebesos.tsx"),
  route("tails", "routes/tails.tsx"),
  route("whonix", "routes/whonix.tsx"),
  route("about-me", "routes/about-me.tsx"),
  route("faq", "routes/faq.tsx")
] satisfies RouteConfig;