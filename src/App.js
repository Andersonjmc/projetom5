import Router from "./routes";
import { UsuarioProvider } from "./common/context/Usuario";
import { CarrinhoProvider } from "./common/context/Carrinho";

const App = () => (
    <div >
    <CarrinhoProvider>
     <UsuarioProvider>
        <Router/>
    </UsuarioProvider>
    </CarrinhoProvider> 
    </div>
);

export default App;