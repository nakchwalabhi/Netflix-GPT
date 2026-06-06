import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constants";

const VideoTitle = ({ movieId }) => {
  const [movieKey, setMovieKey] = useState(null);

  const getTrailerVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTION
      );

      const json = await data.json();

      const trailers = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      const trailer = trailers.length ? trailers[0] : json.results[0];

      setMovieKey(trailer?.key);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getTrailerVideo();
    }
  }, [movieId]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {movieKey && (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieKey}&rel=0&modestbranding=1`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoTitle;