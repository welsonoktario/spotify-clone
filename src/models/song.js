import generateId from '../utils/uuid'

const songs = []

export const getAllSongs = (playlistId = null) => {
  if (!playlistId) {
    return songs
  }

  return songs.filter((song) => song.playlistId === playlistId)
}

export const getSong = (songId) => {
  const song = songs.find((s) => s.songId === songId)

  if (!song) {
    throw new Error('Song data not found')
  }

  return song
}

export const createSong = (title, artists, url) => {
  const song = { id: generateId(), title, artists, url, playCount: 0 }
  songs.push(song)

  return song
}
