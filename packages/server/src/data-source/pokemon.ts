import { RESTDataSource } from 'apollo-datasource-rest';

export default class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/';
  }

  public async getTypes(lang = 'english'): Promise<[string]> {
    const result = await this.get(`types.json`);
    return JSON.parse(result).map((x: string[]) => x[lang]);
  }

  public async getPokedex(lang = 'english') {
    const result = await this.get('pokedex.json');
    return JSON.parse(result).map(({ id, name, type, base }: any) => ({
      id,
      name: name[lang],
      type,
      base: {
        HP: base.HP,
        Attack: base.Attack,
        Defense: base.Defense,
        Speed: base.Speed
      }
    }));
  }

  public async getPokemonByType(type: string) {
    const pokemon = await this.getPokedex();
    return pokemon.filter((p: any) => p.type.some((t: string) => t === type));
  }
}
