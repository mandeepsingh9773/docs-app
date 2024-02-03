const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute w-full top-[5%] py-4 flex justify-center text-zinc-900 font-semibold text-lg">
          Made by MSK
        </div>
        <h1 className="absolute text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-9xl leading-none tracking-tighter">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
