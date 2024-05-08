export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold lg:text-4xl xl:text-6xl">{title}</h1>
      <p className="hidden w-1/4 text-lg py-6 xl:block">{overview}</p>
      <div>
        <button
          type="button"
          className="bg-white text-black rounded-lg mr-1 text-xl hover:bg-opacity-80 px-4 py-1 mt-2 sm:px-10 sm:py-2 xl:mt-0"
        >
          Play
        </button>
        <button
          type="button"
          className="bg-gray-500 text-black px-10 py-2 rounded-lg text-xl bg-opacity-50 hidden xl:inline"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
