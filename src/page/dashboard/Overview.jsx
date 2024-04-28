import { useState } from "react";
import { CaseCard } from "../../components/applications";
// import { cases } from "../../constants";

// import DatePicker from "react-datepicker";

import allApp from "../../assets/overview/totalApplications.png";
import business from "../../assets/overview/businessName.png";
import companies from "../../assets/overview/companies.png";
import trustees from "../../assets/overview/trustees.png";
// import chevron from "../../assets/titlebar/chevron.svg";
import search from "../../assets/applications/search.svg";
import filter from "../../assets/applications/filter.svg";
import arrow from "../../assets/applications/arrow.svg";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
import CaseHead from "./../../components/applications/CaseHead";
import { useGetAllEntityQuery } from "../../service/allEntity.service";
import { ShimmerCategoryItem } from "react-shimmer-effects";

const Overview = () => {
  const { data: entity } = useGetAllEntityQuery();
  console.log("All Entity:", entity?.data);

  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      {/* {entity?.data ? ( */}
      {show ? (
        // <div className="px-4">
        //   {/* First Section */}
        //   <div className="rounded-xl font-poppins mb-4 flex flex-wrap gap-5">
        //     {/* first card */}
        //     <CaseHead
        //       icon={allApp}
        //       count={entity?.data?.totalEntityCount}
        //       title={"Total Applications"}
        //     />
        //     <CaseHead
        //       icon={business}
        //       count={entity?.data?.totalBusinessCount}
        //       title={"Business Names"}
        //     />
        //     <CaseHead
        //       icon={companies}
        //       count={entity?.data?.totalCompanyCount}
        //       title={"Companies"}
        //     />
        //     <CaseHead
        //       icon={trustees}
        //       count={entity?.data?.totalTrustCount}
        //       title={"Incorporated Trustees"}
        //     />
        //   </div>

        //   {/* Third Section */}
        //   <div className="p-5 bg-white font-poppins mt-2">
        //     <div className="sm:flex sm:flex-wrap lg:grid lg:grid-cols-3 pt-4 gap-4">
        //       {entity?.data?.allEntity.map((item, id) => (
        //         <CaseCard key={id} details={item} />
        //       ))}
        //     </div>
        //   </div>

        //   {/* Pagination */}
        //   {/* <div className="w-full font-poppins font-semibold text-[#626C70] flex justify-end bg-white mb-10 p-5 gap-3 transition-all">
        //     <button
        //       aria-label="Previous page"
        //       className="h-8 w-8 group rounded-full flex items-center justify-center bg-[#F0F6FF] hover:bg-[#005CE8]"
        //     >
        //       <img
        //         src={arrow}
        //         className="group-hover:brightness-0 group-hover:invert"
        //       />
        //     </button>

        //     <div className="flex gap-1 items-center justify-center text-sm">
        //       <button
        //         aria-label="Page 1"
        //         className={`h-8 w-8 group rounded-full flex items-center justify-center hover:bg-[#005CE8] ${
        //           currentPage === 1 ? "bg-gray-100" : ""
        //         }`}
        //         onClick={() => setCurrentPage(1)}
        //       >
        //         <span
        //           className={`group-hover:text-white ${
        //             currentPage === 1 ? "text-black" : ""
        //           }`}
        //         >
        //           1
        //         </span>
        //       </button>
        //       <button
        //         aria-label="Page 2"
        //         className={`h-8 w-8 group rounded-full flex items-center justify-center hover:bg-[#005CE8] ${
        //           currentPage === 2 ? "bg-gray-100" : ""
        //         }`}
        //         onClick={() => setCurrentPage(2)}
        //       >
        //         <span
        //           className={`group-hover:text-white ${
        //             currentPage === 2 ? "text-black" : ""
        //           }`}
        //         >
        //           2
        //         </span>
        //       </button>
        //       <button
        //         aria-label="Page 3"
        //         className={`h-8 w-8 group rounded-full flex items-center justify-center hover:bg-[#005CE8] ${
        //           currentPage === 3 ? "bg-gray-100" : ""
        //         }`}
        //         onClick={() => setCurrentPage(3)}
        //       >
        //         <span
        //           className={`group-hover:text-white ${
        //             currentPage === 3 ? "text-black" : ""
        //           }`}
        //         >
        //           3
        //         </span>
        //       </button>
        //       <button
        //         aria-label="Page 4"
        //         className={`h-8 w-8 group rounded-full flex items-center justify-center hover:bg-[#005CE8] ${
        //           currentPage === 4 ? "bg-gray-100" : ""
        //         }`}
        //         onClick={() => setCurrentPage(4)}
        //       >
        //         <span
        //           className={`group-hover:text-white ${
        //             currentPage === 4 ? "text-black" : ""
        //           }`}
        //         >
        //           4
        //         </span>
        //       </button>
        //       <button
        //         aria-label="Page 5"
        //         className={`h-8 w-8 group rounded-full flex items-center justify-center hover:bg-[#005CE8] ${
        //           currentPage === 5 ? "bg-gray-100" : ""
        //         }`}
        //         onClick={() => setCurrentPage(5)}
        //       >
        //         <span
        //           className={`group-hover:text-white ${
        //             currentPage === 5 ? "text-black" : ""
        //           }`}
        //         >
        //           5
        //         </span>
        //       </button>
        //     </div>

        //     <button
        //       aria-label="Next page"
        //       className="h-8 w-8 group rounded-full flex items-center justify-center bg-[#F0F6FF] hover:bg-[#005CE8]"
        //     >
        //       <img
        //         src={arrow}
        //         className="rotate-180 group-hover:brightness-0 group-hover:invert"
        //       />
        //     </button>
        //   </div> */}

        // </div>
        <div>Loading</div>
      ) : (
        <>
          <ShimmerCategoryItem />
          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            title
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            title
          />

          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            text
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            text
          />

          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            text
            cta
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            text
            cta
          />
        </>
      )}
    </>
  );
};

export default Overview;
