import generateId from '../utils/uuid'

export const playlists = []

export const getAllPlaylists = (playlistId = null) => {
  if (!playlistId) {
    return playlists
  }

  return playlists.filter((playlist) => playlist.id === playlistId)
}

export const getPlaylist = (playlistId) => {
  const playist = playlists.find((playlist) => playlist.id === playlistId)

  if (!playist) {
    throw new Error('Playlist data not found')
  }

  return playist
}

export const createPlaylist = (userId, name) => {
  if (!userId) {
    throw new Error("Param 'userId' is required")
  }

  if (!name) {
    throw new Error("Param 'name' is required")
  }

  playlists.push({ id: generateId(), userId, name })
}

export const updatePlaylist = (playlist) => {
  const playlistIndex = playlists.findIndex((p) => p.id === playlist.id)

  if (playlistIndex === -1) {
    throw new Error('Playlist data not found')
  }

  playlists[playlistIndex] = playlist
}
