export const fetchCivilizations = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const dataJSON = await data.json()
    return dataJSON.civilizations
};

export async function fetchCivilization (id){
    const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
    return await data.json()
}