import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const ehNovoFavorito = !favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (ehNovoFavorito) {
      novaLista.push(novoFavorito);
    } else {
      const indexDoFavoritoExistente = novaLista.findIndex(
        (x) => x.id == novoFavorito.id
      );
      novaLista.splice(indexDoFavoritoExistente, 1);
    }

    return setFavorito(novaLista);
  }
  return {
    favorito,
    adicionarFavorito,
  };
}
