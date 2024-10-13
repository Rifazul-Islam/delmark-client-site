import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Shop.css";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useCategory from "../../../../hooks/useCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllProducts from "./AllProducts";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(21 / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // if (count > 0 && itemsPerPage > 0) {
  //   const numberOfPages = Math.ceil(count / itemsPerPage);
  //   const pages = [...Array(numberOfPages).keys()];

  //   setPages(pages);
  // } else {
  //   console.log("Data Nai boss");
  // }

  const handlerPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlerNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  //  all Product Get
  useEffect(() => {
    axiosSecure
      .get(`/allCategory/pagination?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        setProducts(res?.data);
      });
  }, [currentPage, itemsPerPage]);

  // Count Length get
  useEffect(() => {
    axiosSecure.get("/shopCount").then((res) => {
      return setCount(res?.data?.count);
    });
  }, [axiosSecure]);

  // const { data: counts } = useQuery({
  //   queryKey: ["count"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/shopCount");

  //     return res.data.count;
  //   },
  // });

  // if (counts) {
  //   setCount(counts);
  // }
  // const { data: reviewDataed } = useQuery({
  //   queryKey: ["reviewsess", modelId],
  //   enabled: !!modelId,
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/category/${modelId}`);
  //     return res?.data;
  //   },
  // });

  // console.log("shope card", applicationId);

  // console.log(products);

  const [category] = useCategory();

  const categories = [
    "All Products Show",
    "Fish & Original",
    "Vegetables",
    "Meat & Dairy",
    "Fruits",
    "Milk",
  ];

  const fish = category.filter((item) => item.category === "Fish");
  const vegetables = category.filter((item) => item.category === "Vegetables");
  const meat = category.filter((item) => item.category === "Meat");
  const fruits = category.filter((item) => item.category === "Fruits");
  const milk = category.filter((item) => item.category === "Milk");

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  // console.log("Selected tab:", selectedIndex);

  return (
    <div className={`${selectedIndex > 0 && "mb-16"}`}>
      <h2 className="text-2xl font-semibold pl-4 font-serif mt-12"> Shop</h2>

      <div>
        <div>
          <h2 className="text-black mt-2 pl-3  font-serif font-bold text-xl">
            Categories
          </h2>

          <div>
            {/* React taps used */}
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={handleSelect}
              className="grid md:grid-cols-5"
            >
              <TabList className="md:col-span-1 cursor-pointer">
                <TabList className="md:border-t-[2px] md:border-b-[2px] border-green-600 p-2 space-y-1">
                  {categories?.map((item, index) => {
                    return (
                      <Tab
                        key={index}
                        className={`block 
                          ${
                            selectedIndex === index
                              ? " text-green-600"
                              : "bg-white"
                          }
                          text-md font-serif font-medium `}
                      >
                        {item}
                      </Tab>
                    );
                  })}
                </TabList>
              </TabList>

              <div className="md:col-span-4">
                {/* All Product Show  */}
                <TabPanel>
                  {/* grid system  */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {products?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>

                {/* Fish & Original  */}
                <TabPanel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {fish?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>

                {/* Vegetables  */}
                <TabPanel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {vegetables?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>

                {/*Meat & Dairy  */}
                <TabPanel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {meat?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>
                {/*Fruits Product */}
                <TabPanel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {fruits?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>

                {/*Milk Product */}
                <TabPanel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2  px-2">
                    {milk?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* pagination  */}
      {selectedIndex === 0 && (
        <div className="my-24 flex justify-center ">
          {currentPage === 0 ? (
            <>
              <button
                disabled
                className="ml-3 px-5 h-10 btn bg-gray-400 btn-sm"
              >
                <FaArrowLeft />
              </button>
            </>
          ) : (
            <button
              className=" ml-3 px-5 h-10 btn bg-gray-300 btn-sm"
              onClick={handlerPrevPage}
            >
              <FaArrowLeft />
            </button>
          )}
          {pages?.map((page, idx) => (
            <button
              className={`${
                currentPage === page ? "selected" : "def"
              } btn rounded-lg text-lg ml-2 text-center `}
              onClick={() => setCurrentPage(page)}
              key={idx}
            >
              {page}
            </button>
          ))}

          {currentPage < pages.length - 1 ? (
            <>
              <button
                className="ml-3 px-5 h-10 btn bg-gray-300 btn-sm"
                onClick={handlerNextPage}
              >
                <FaArrowRight />
              </button>
            </>
          ) : (
            <button disabled className=" ml-3 px-5 h-10 btn bg-gray-300 btn-sm">
              <FaArrowRight />
            </button>
          )}

          {/* <select
     value={itemsPerPage}
     onChange={handlerItemsPerPage}
     name=""
     id=""
   >
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
   </select> */}
        </div>
      )}
    </div>
  );
};

export default Shop;
