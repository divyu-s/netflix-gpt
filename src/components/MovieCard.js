import { Image_URLs } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return;
  }

  return (
    <div className="pr-4 w-36">
      <img src={Image_URLs.IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
