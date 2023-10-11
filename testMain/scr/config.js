export const endpoint = "https://pokeapi.co/api/v2";
export const baseArray = ({ path, limit}) => 
    `${endpoint}${path}?limit=${limit}`;
export const buscarPokemon = id_or_name => fetch(`${endpoint}/pokemon/${id_or_name}`).then(resp => resp.json())

       