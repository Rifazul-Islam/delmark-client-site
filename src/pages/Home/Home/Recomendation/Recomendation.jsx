import SelectTitle from "../../../../components/SelectTitle";

const Recomendation = () => {
  return (
    <div className="my-10">
      <SelectTitle subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 01 */}
        <div className="card  p-1.5 card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1663040083845-9e7910bb3ae2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-black font-semibold text-2xl mt-1.5">
              Blue Begun
            </h3>
            <p className="text-sm py-3 pb-5">
              This a planting is try is best time well Time Check people well
              Time Check people.
            </p>
            <div className="overflow-hidden">
              <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* 02 */}
        <div className="card p-1.5 card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1663050704421-15a8eaa3f216?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-black font-semibold text-2xl mt-1.5">
              Blue Begun
            </h3>
            <p className="text-sm py-3 pb-5">
              This a planting is try is best time well Time Check people well
              Time Check people.
            </p>
            <div className="overflow-hidden">
              <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* 03 */}
        <div className="card p-1.5 card-compact bg-base-100  shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1661774644841-d1a04da3c4d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-black font-semibold text-2xl mt-1.5">
              Blue Begun
            </h3>
            <p className="text-sm py-3 pb-5">
              This a planting is try is best time well Time Check people well
              Time Check people.
            </p>
            <div className="overflow-hidden">
              <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* 04 */}
        <div className="card p-1.5 card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1663047196934-d8a9a0cc4f11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </figure>
          <div className="p-4">
            <h3 className="text-black font-semibold text-2xl mt-1.5">
              Blue Begun
            </h3>
            <p className="text-sm py-3 pb-5">
              This a planting is try is best time well Time Check people well
              Time Check people.
            </p>
            <div className="overflow-hidden">
              <button className="bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:border-transparent shadow-lg text-[#BB8506] rounded-lg hover:bg-[#1F2937]  transition-all duration-300 px-[30px] py-3">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
