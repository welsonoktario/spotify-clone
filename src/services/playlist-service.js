import {
  getPlaylist as modelGetPlaylist,
  updatePlaylist,
} from '../models/playlist'
import { getSong } from '../models/song'

export const getPlaylist = (playlistId) => {
  try {
    if (!playlistId) {
      throw new Error("Param 'playlistId' is required")
    }

    return modelGetPlaylist(playlistId)
  } catch (e) {
    throw new Error(e.message)
  }
}

export const addSongToPlaylist = (playlistId, songId) => {
  try {
    if (!playlistId) {
      throw new Error("Param 'playlistId' is required")
    }

    if (!songId) {
      throw new Error("Param 'songId' is required")
    }

    const song = getSong(songId)
    const playlist = modelGetPlaylist(playlistId)
    playlist.songs = [...playlist.songs, song]

    updatePlaylist(playlist)
  } catch (e) {
    throw new Error(e.message)
  }
}
