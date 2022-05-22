const Home = () => {
  return (
    <div
      className="  flex min-h-screen flex-col items-center justify-center bg-[#19A1AD] "
      id="container"
    >
      <div className="rounded-xl bg-white pb-6">
        <img
          className=" rounded-t-xl object-contain"
          src="/images/bg-pattern-card.svg"
          alt="pattern svg"
        />
        <div className="flex flex-col items-center bg-white  text-[#2F3140]">
          <img
            className="-mt-12 h-24 w-24 rounded-full border-4 border-white"
            src="images/image-victor.jpg"
            alt="avatar image"
          />
          <div className="w-full border-b-[1px] py-5">
            <div className="mb-2 flex justify-center gap-3 text-xl">
              <p className=" text-xl font-bold">Victor Crest</p>
              <p className="font-normal text-[#8A8B90]">26</p>
            </div>
            <p className="text-center text-[#8A8B90]">London</p>
          </div>
          <div className="flex  w-full justify-around pt-6">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">80K</p>
              <p className="text-xs tracking-widest text-[#8A8B90]">
                Followers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">803K</p>
              <p className="text-xs tracking-widest text-[#8A8B90]">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">1.4K</p>
              <p className="text-xs tracking-widest text-[#8A8B90]">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
