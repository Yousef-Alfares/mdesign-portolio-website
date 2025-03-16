const LoadingAnimation = () => {
  return (
    <div className="flex w-full justify-center">
      <div id="loading-js" className="h-[100dvh] w-full relative">
        <div id="loadingTE" className="w-fit absolute top-1/2 left-1/2">
          <div
            data-te-loading-icon-ref
            className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-green border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
