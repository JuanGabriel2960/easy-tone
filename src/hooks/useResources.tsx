import { useState } from "react"
import http from "../api/http";
import { SongResp } from '../interfaces/index';

export const useResources = () => {
    const [songs, setSongs] = useState<SongResp[] | null>(null)

    const getSongs = async () => {
        try {
            const resp = await http.get<SongResp[]>(`/api/resources/songs`)
            setSongs(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        songs,
        getSongs
    }
}
