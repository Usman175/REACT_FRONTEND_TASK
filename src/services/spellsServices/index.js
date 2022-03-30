import { GetAsync } from "../../constants/api";

export async function spellsDataGet() {
    return await GetAsync(`https://www.dnd5eapi.co/api/spells`, false);
}

export async function spellDataGetByName(url) {
    return await GetAsync(`${process.env.REACT_APP_BASE_URL}${url}`, false);
}