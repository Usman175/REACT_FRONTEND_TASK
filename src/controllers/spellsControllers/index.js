import { spellsDataGet, spellDataGetByName } from "../../services/spellsServices";


export async function getSpellsData() {
    return await spellsDataGet();
}
export async function getSpellByName(url) {
    return await spellDataGetByName(url);
}