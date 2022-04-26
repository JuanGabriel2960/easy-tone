import { useState } from "react"
import http from "../api/http";
import { ExerciseResp, PieceResp, TheoryResp, ValidDegree } from '../interfaces/index';

export const useDegree = () => {
    const [theory, setTheory] = useState<TheoryResp | null>(null)
    const [exercise, setExercise] = useState<ExerciseResp | null>(null)
    const [piece, setPiece] = useState<PieceResp | null>(null)

    const getTheory = async (degree: ValidDegree) => {
        try {
            const resp = await http.get<TheoryResp>(`/api/degree/theory/${degree}`)
            setTheory(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getExercise = async (degree: ValidDegree) => {
        try {
            const resp = await http.get<ExerciseResp>(`/api/degree/exercise/${degree}`)
            setExercise(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getPiece = async (degree: ValidDegree) => {
        try {
            const resp = await http.get<PieceResp>(`/api/degree/piece/${degree}`)
            setPiece(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        theory,
        exercise,
        piece,
        getTheory,
        getExercise,
        getPiece
    }
}
