import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useCategory from "../../../../hooks/useCategory";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Shop.css";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [category] = useCategory();
  const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  let numberOfPages;
  if (count) {
    numberOfPages = Math.ceil(count / itemsPerPage);
  } else {
    console.log("data Nai");
  }
  const pages = [...Array(numberOfPages).keys()];

  console.log(count, numberOfPages);
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
      .get(
        `/allCategory/pagination?page=${currentPage}&size=${itemsPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`
      )
      .then((res) => {
        setProducts(res?.data);
      });
  }, [currentPage, itemsPerPage, sortField, sortOrder]);

  // Count Length get
  useEffect(() => {
    axiosSecure.get("/shopCount").then((res) => {
      return setCount(res?.data?.count);
    });
  }, [axiosSecure]);

  const categories = [
    "All Products Show",
    "Fish & Original",
    "Vegetables",
    "Meat & Dairy",
    "Fruits",
    "Milk",
  ];
  //  one sistem data load  my need this
  useEffect(() => {
    axiosSecure
      .get(
        `/allCategory/pagination?page=${currentPage}&size=${itemsPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`
      )
      .then((res) => {
        setProducts(res?.data);
      });
  }, [currentPage, itemsPerPage, sortField, sortOrder]);

  const fish = category?.filter((item) => item.category === "Fish");
  const vegetables = category?.filter((item) => item.category === "Vegetables");
  const meat = category?.filter((item) => item.category === "Meat");
  const fruits = category?.filter((item) => item.category === "Fruits");
  const milk = category?.filter((item) => item.category === "Milk");

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value === "Low") {
      setSortField("price");
      setSortOrder("asc");
    } else if (value === "High") {
      setSortField("price");
      setSortOrder("desc");
    } else {
      setSortField("price");
      setSortOrder("asc");
    }
  };

  // console.log(products);
  return (
    <div className={`${selectedIndex > 0 && "mb-16"}`}>
      <h2 className="text-3xl font-semibold  font-serif mt-12"> Shop</h2>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold  font-serif ">Price Filter</h2>
        </div>
        <div className="flex justify-center items-center gap-3">
          {/* Sorting Form */}
          <form
            className="w-72 border-[1px] border-green-600 rounded-lg"
            onSubmit={handleSortChange}
          >
            <label className="form-control w-full">
              <select
                defaultValue="default"
                className="select select-bordered w-full"
                onChange={handleSortChange}
              >
                <option disabled value="default">
                  Select Sorting Order
                </option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
                <option value="Normal">Normal</option>
              </select>
            </label>
          </form>
        </div>
      </div>

      <div>
        <h2 className="text-black mt-2  font-serif font-bold text-xl">
          Categories
        </h2>

        <div>
          {/* React taps used */}
          <Tabs
            selectedIndex={selectedIndex}
            onSelect={handleSelect}
            className="grid md:grid-cols-5"
          >
            <TabList className="md:col-span-1 ">
              <TabList className="md:border-t-[2px] cursor-pointer  border-green-600 p-2 space-y-1">
                {categories?.map((item, index) => {
                  return (
                    <Tab
                      key={index}
                      className={`block
                          ${
                            selectedIndex === index
                              ? " text-[#bb8506]"
                              : "bg-white"
                          }
                          text-md font-serif font-medium `}
                    >
                      {item}
                    </Tab>
                  );
                })}
              </TabList>

              {/* Branding Part */}
              <div className="mt-4">
                <h3 className="text-lg font-poppins font-semibold">
                  Popular Brands
                </h3>

                <div className="mt-1.5 space-y-3">
                  <button className="btn btn-outline btn-sm">
                    Original Vagitable
                  </button>
                  <button className="btn btn-outline btn-sm ml-2">Frash</button>
                  <button className="btn btn-outline btn-sm">Fresh Food</button>

                  <button className="btn btn-outline btn-sm ml-2">
                    Original Milk
                  </button>
                  <button className="btn btn-outline btn-sm">
                    Original Jusce
                  </button>
                </div>
              </div>

              {/* Top read Product  */}

              <div>
                <h3 className="text-lg font-poppins font-semibold my-2.5">
                  Top buy Products
                </h3>
                <div>
                  {vegetables?.slice(0, 3).map((item) => (
                    <div className=" pt-2" key={item?._id}>
                      <Link to={`/shopDetails/${item?._id}`}>
                        <div className="flex gap-3 border p-1 rounded-lg">
                          <img
                            src={item?.image}
                            alt=""
                            className="w-16 h-16 rounded-lg"
                          />
                          <div className="space-y-1">
                            <h3 className="text-sm font-inter font-medium ">
                              {item?.name?.length > 20
                                ? `${item?.name.slice(0, 20)}`
                                : `${item?.name}`}
                            </h3>
                            <p className="flex items-center gap-2">
                              <span>
                                <Rating
                                  style={{ maxWidth: 50 }}
                                  value={item?.reviews}
                                  readOnly
                                />
                              </span>
                              <span className="text-[11px] ">
                                ({item?.reviews} Views)
                              </span>
                            </p>

                            <p className="text-[11px] "> ${item?.price}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
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
