import store from "../store";
import {idIncrement} from "../actions";

export default class ApiService {

  _apiBase = 'https://randomuser.me/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}` +
          `, received ${res.status}`)
    }
    return await res.json();
  };

  async getPeople() {
    const res = await this.getResource(`/?results=20`);
    return res.results.map(this._transformPerson);
  }

  _transformPerson = (person) => {

    store.dispatch(idIncrement());
    const id = store.getState();
    return {
        id: id.id,
        name: person.name,
        gender: person.gender,
        dob: person.dob['date'],
        avatar:person.picture,
        checked: false
      }
  }
}
