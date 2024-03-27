import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUrl)

      setLoading(true);

      let options = {
        headers: {
          "X-RapidAPI-Key": "4a3edce89amsh5538f6a6838dbd4p198be2jsndb853089ae75",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
        }
      };

      const [artistRes, songRes] = await Promise.all([
        fetch(artistUrl, options).then(res => res.json()),
        helpHttp().get(songUrl)
      ]);

      console.log(artistRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;