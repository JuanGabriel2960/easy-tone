import { useState } from "react"
import http from "../api/http";
import { TheoryResp, ValidDegree } from '../interfaces/index';

export const useDegree = () => {
    const [theory, setTheory] = useState<TheoryResp | null>(null)

    const getTheory = async (degree: ValidDegree) => {
        try {
            const resp = await http.get<any>(`/api/degree/theory/${degree}`)
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
