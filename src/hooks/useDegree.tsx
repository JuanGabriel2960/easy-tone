import { useState } from "react"
import http from "../api/http";
import { ValidDegree } from '../interfaces/index';

export const useDegree = () => {
    const [theory, setTheory] = useState<any>({})

    const getTheory = async (degree: ValidDegree) => {
        try {
            const resp = await http.get<any>(`/api/degree/${degree}`)
            setTheory(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        theory,
        getTheory
    }
}
