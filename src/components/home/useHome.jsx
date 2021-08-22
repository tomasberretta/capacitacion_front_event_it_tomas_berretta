import {useEffect, useState} from "react";
import { fetchCivilizations} from "../../fetchers/CivilizationFetcher";
import {useHistory} from "react-router-dom";

export const useHome = () => {
    const [civilizations, setCivilizations] = useState([]);
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const history = useHistory();

    function onClick(id) {
        history.push("/civilization/" + id);
    }

    useEffect (()=> {
        document.title = 'Home'
        setLoading(true)
        fetchCivilizations()
            .then( civs => {
                setCivilizations(civs)
                setLoading(false)
            })
    }, []);

    return {civilizations, loading, page, handleChangePage, onClick}
}