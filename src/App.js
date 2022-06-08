import Router from "./routes";
import { UsuarioProvider } from "./common/context/Usuario";
import { CarrinhoProvider } from "./common/context/Carrinho";



const App = () => (
    <CarrinhoProvider>
     <UsuarioProvider>
        <Router/>
    </UsuarioProvider>
    </CarrinhoProvider> 
);

export default App;