import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchCivilization} from "../../fetchers/CivilizationFetcher";

export const useCivilization = () => {
    const {id} = useParams()
    const [civilization, setCivilization] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect (()=> {
        setLoading(true)
            fetchCivilization(id)
                .then( civ => {
                    setCivilization(civ)
                    document.title = civ.name
                    setLoading(false)
                })
        }, [id, civilization.name]);

    return {civilization, loading}
}