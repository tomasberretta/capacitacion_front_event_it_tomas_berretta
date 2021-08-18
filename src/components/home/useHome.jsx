import {useEffect, useState} from "react";
import { fetchCivilizations} from "../../fetchers/CivilizationFetcher";

export const useHome = () => {
    const [civilizations, setCivilizations] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect (()=> {
        document.title = 'Home'
        setLoading(true)
        fetchCivilizations()
            .then( civs => {
                setCivilizations(civs)
                setLoading(false)
            })
    }, []);

    return {civilizations, loading}
}