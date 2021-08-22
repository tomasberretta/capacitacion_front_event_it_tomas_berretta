export const fetchCivilizations = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const dataJSON = await data.json()
    return dataJSON.civilizations
};

export async function fetchCivilization (id){
    if(id < 1){
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1`)
        return await data.json()
    } else if (id > 32){
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/32`)
        return await data.json()
    }else{
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        return await data.json()
    }
}