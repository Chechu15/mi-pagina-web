import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mi pagina web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
 return (

  <div>
    
    <h1>Hola</h1>
    <h2>Aduososdsd</h2>
  </div>
  
 )


}


//export default function Home() {
 // return <Welcome />;
//}


