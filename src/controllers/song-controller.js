import { statusFail, statusOk } from '../helpers/json-response'
import { getAllSongs, getSong } from '../services/song-service'

export const findAllSong = (req, res) => {
  const { playlistId } = req.query

  const songs = getAllSongs(playlistId)

  res.status(200).json(statusOk({ songs }))
}

export const findSong = (req, res) => {
  try {
    const { songId } = req.params

    if (!songId) {
      throw new Error("Param 'songId' is required")
    }

    const song = getSong(songId)

    res.status(200).json(statusOk({ song }))
  } catch (e) {
    res.status(500).json(statusFail(e.message))
  }
}

export const updateSong = (req, res) => {}
