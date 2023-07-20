import {
  getAllSongs as modelGetAllSongs,
  getSong as modelGetSong,
  createSong as modelCreateSong,
} from '../models/song'

export const getAllSongs = (playlistId, sort = 'desc') =>
  modelGetAllSongs(playlistId).sort((a, b) =>
    sort === 'desc' ? b.playCount - a.playCount : a.playCount - b.playCount,
  )

export const getSong = (songId) => {
  try {
    return modelGetSong(songId)
  } catch (e) {
    throw new Error(e.message)
  }
}

export const createSong = (song) => {
  try {
    const requiredParam = ['title', 'artists', 'url']

    requiredParam.forEach((param) => {
      if (!Object.prototype.hasOwnProperty.call(song, param)) {
        throw new Error(`Param '${param}' is required`)
      }

      if (param === 'artists' && !song.artists.length) {
        throw new Error(`Param '${param}' is requires at least 1`)
      }
    })

    return modelCreateSong(song.title, song.artists, song.url)
  } catch (e) {
    throw new Error(e.message)
  }
}
