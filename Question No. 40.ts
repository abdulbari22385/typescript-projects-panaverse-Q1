function make_album(artist: string, album_title: string, tracks?: number): Record<string, string | number> {
  const album: Record<string, string | number> = {
    "artist": artist,
    "title": album_title,
  };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}
