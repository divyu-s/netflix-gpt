export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button
          type="button"
          className="bg-white text-black px-10 py-2 rounded-lg mr-1 text-xl hover:bg-opacity-80"
        >
          Play
        </button>
        <button
          type="button"
          className="bg-gray-500 text-black px-10 py-2 rounded-lg text-xl bg-opacity-50"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
