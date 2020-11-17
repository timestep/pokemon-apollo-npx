export default {
  Query: {
    allPokemonTypes: async (_: any, { lang }: { lang: string }, { dataSources }: any) => {
      return dataSources.pokemonAPI.getTypes(lang);
    },
    pokemonByType: async (_: any, { type }: { type: string }, { dataSources }: any) => {
      return dataSources.pokemonAPI.getPokemonByType(type);
    }
  }
};
