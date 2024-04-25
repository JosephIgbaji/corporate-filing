/* eslint-disable react/prop-types */
import noImage from "../../assets/applications/companyImage.png";
import buImage from "../../assets/applications/businessImage.png";
import tuImage from "../../assets/applications/trusteeImage.png";
import download from "../../assets/applications/download.svg";
import kebabMenu from "../../assets/applications/kebab-menu.svg";
import { Link, useLocation } from "react-router-dom";
import { extractDate } from "../../utils/extractDate";
import { useState } from "react";

const CaseCard = ({ details }) => {
  const { pathname } = useLocation();

  const seeMore = `/dashboard/aplications/${details._id}`;

  // const [caseType, setCaseType] = useState("Nil");

  let imageIcon = buImage;

  if (details.entity_type?.toLowerCase().includes("company")) {
    imageIcon = noImage;
  } else if (
    details.entity_type?.toLowerCase().includes("trustees" || "incorporated")
  ) {
    imageIcon = tuImage;
  }

  // const casetype = details.case_type == "Civil" ? "Civil" : "Criminal"
  return (
    <>
      <div className="border-r borer-solid border-project-gray flex min-h-[298px]">
        <div className="w-3/6 h-full bg-[#D9D9D9] flex items-center">
          <img src={imageIcon} className="w-full m-auto" />
          {/* <div className="absolute bottom-0 bg-gray-500 p-2 text-2xl rounded-lg w-full text-center">
          {caseType}
        </div> */}
        </div>
        <div className="px-3 flex-1  text-project-light-black">
          {/* <div className="flex justify-between text-[0.625rem] w-full">
          <p>{extractDate(details.createdAt)}</p>
        </div> */}
          <div className="pt-4">
            <p className="text-sm font-medium">{details.name}</p>
            <div>
              <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                Application Name
              </p>
              <p className="text-[0.625rem] leading-5">{details.case_id}</p>
            </div>
            <div>
              <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                Applicant Phone Number
              </p>
              <p className="text-[0.625rem] leading-5">{details.case_area}</p>
            </div>
          </div>
          <div className="mt-6">
            {details.entity_type?.toLowerCase().includes("company") && (
              <>
                <div>
                  <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                    Number of directors:
                  </p>
                  <p className="text-[0.625rem] leading-5">
                    {details.no_of_directors}
                  </p>
                </div>
                <div>
                  <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                    Number of shareholders:
                  </p>
                  <p className="text-[0.625rem] leading-5">
                    {details.no_of_shareholders}
                  </p>
                </div>
                <div>
                  <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                    Secretary:
                  </p>
                  <p className="text-[0.625rem] leading-5">
                    {details.has_secretary ? "Yes" : "No"}
                  </p>
                </div>
              </>
            )}
            {details.entity_type?.toLowerCase().includes("trustees") && (
              <>
                <div className=" border-y-2">
                  <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                    Proposed Names:
                  </p>
                  <p className="text-[0.625rem] leading-5">
                    {details.business_names}
                  </p>
                </div>
              </>
            )}
            <div>
              <p className="text-[0.625rem] mt-1 font-semibold leading-5">
                Address of Entity:
              </p>
              <p className="text-[0.625rem] leading-5">
                {details.business_contact_address}
              </p>
            </div>
          </div>
          {/* action buttons */}
          <div className="flex mt-2 justify-between">
            {!pathname.includes("overview") ? (
              <button
                aria-label="Download"
                className="flex h-7 px-3 items-center justify-center gap-x-2 bg-project-green bg-opacity-40 hover:bg-opacity-20 transition-all rounded-full"
              >
                <img src={download} />
                <span className="text-[0.625rem] text-project-dark-green font-medium">
                  Download
                </span>
              </button>
            ) : (
              <Link to={seeMore}>
                <button
                  aria-label="Download"
                  className="flex h-7 px-3 items-center justify-center gap-x-2 bg-project-green bg-opacity-40 hover:bg-opacity-20 transition-all rounded-full"
                >
                  <span className="text-[0.625rem] text-project-dark-green font-medium">
                    See more
                  </span>
                </button>
              </Link>
            )}
            <button
              aria-label="Actions"
              className="flex h-7 w-7 items-center justify-center bg-[#F5F6F7] hover:bg-[#ebecec] transition-all rounded-full"
            >
              <img src={kebabMenu} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseCard;
