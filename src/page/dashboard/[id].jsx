import React, { useEffect, useState } from "react";
import { pdf, xlsx, docx, jpeg } from "../../assets";
import noImage from "../../assets/applications/companyImage.png";
import buImage from "../../assets/applications/businessImage.png";
import tuImage from "../../assets/applications/trusteeImage.png";
// import horizontalLine from "../../assets/applications/horizontal-color-line.png";
// import download from "../../assets/applications/download.svg";
// import kebabMenu from "../../assets/applications/kebab-menu.svg";
// import SummaryCard from "../../components/summary/SummaryCard";
import { useGetAllEntityQuery } from "../../service/allEntity.service";
import { useParams } from "react-router-dom";
import { ShimmerPostDetails } from "react-shimmer-effects";

const ApplicationDetails = () => {
  // const { params } = useParams();
  const { id } = useParams();
  const { data: entity } = useGetAllEntityQuery();
  console.log(entity?.data?.allEntity);
  const detail = entity?.data?.allEntity?.filter((d) => d._id == id);

  let proposedNames = null;
  let add = null;
  let imageIcon = buImage;

  if (detail && detail.length == 1) {
    proposedNames = detail[0]?.business_names?.split("\n");
    add = detail[0]?.business_contact_address?.split("\n");
    if (detail[0].entity_type?.toLowerCase().includes("company")) {
      imageIcon = noImage;
    } else if (
      detail[0].entity_type?.toLowerCase().includes("trustee" || "incorporated")
    ) {
      imageIcon = tuImage;
    }
  }

  return detail ? (
    <div className="bg-white p-5">
      <div className=" border-r borer-solid border-project-gray md:grid md:grid-cols-2 gap-4 lg:flex justify-between flex-wrap min-h-[298px]">
        <div className="">
          <img src={imageIcon} className="w-[200px] m-auto" />
        </div>
        {detail[0].entity_type?.toLowerCase().includes("company") && (
          <div className="w-[350px] px-3 flex-1  text-project-light-black">
            <div className="">
              {/* <p className="text-sm font-medium">{detail[0]?.name}</p> */}
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application Status:</p>
                <p className=" leading-5 w-1/2">{}</p>
              </div>
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application No.:</p>
                <p className=" leading-5 w-1/2">{detail[0]?._id}</p>
              </div>
              <div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Application Name:</p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.entity_type !== "criminal"}
                  </p>
                </div>
                <>
                  <div className="mb-3 mt-5 w-full ">
                    <p className=" font-semibold leading-5 border-b-2 pb-1 w-full">
                      Business Contact and Address:
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Email Address:</p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          .filter((ad) => ad.toLowerCase().includes("email"))[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">
                      Applicant Phone Number?
                    </p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          .filter((ad) => ad.toLowerCase().includes("phone"))[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Address:</p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          .filter((ad) =>
                            ad.toLowerCase().includes("principal place")
                          )[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Branch Address:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">
                      Nature of Business:
                    </p>
                    <p className=" leading-5 w-1/2">
                      {detail[0]?.business_nature}
                    </p>
                  </div>
                </>
                <>
                  <div className="mb-3 mt-5 w-full ">
                    <p className=" font-semibold leading-5 border-b-2 pb-1 w-full">
                      Proposed Names:
                    </p>
                  </div>
                  {proposedNames?.map((name, id) => (
                    <div className="mb-3 flex justify-between items-start">
                      <p key={id} className=" font-semibold mb-2 leading-5">
                        {`Option ${id + 1}`}
                      </p>
                      <p className=" leading-5 w-1/2">{name.split(":")[1]}</p>
                    </div>
                  ))}
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">
                      Number of Director:
                    </p>
                    <p className=" leading-5 w-1/2">
                      {detail[0]?.no_of_directors}
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Director 1:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Director 2:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                </>
                <>
                  <div className="mb-3 mt-5 w-full ">
                    <p className=" font-semibold leading-5 border-b-2 pb-1 w-full">
                      Witnesses to the Articles of Incorporation
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Witness 1:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Witness 2:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                </>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Is there Secretary:
                  </p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.has_secretary ? "Yes" : "No"}
                  </p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    No of ShareHolders:
                  </p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.no_of_shareholders}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {detail[0].entity_type?.toLowerCase().includes("business") && (
          <div className="w-[350px] px-3 flex-1  text-project-light-black">
            <div className="">
              {/* <p className="text-sm font-medium">{detail[0]?.name}</p> */}
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application Status:</p>
                <p className=" leading-5 w-1/2">{detail[0]?.entity_id}</p>
              </div>
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application No.:</p>
                <p className=" leading-5 w-1/2">{detail[0]?.entity_type}</p>
              </div>
              <div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Application Name:</p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.entity_type !== "criminal"}
                  </p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Email Address:</p>
                  <p className=" leading-5 w-1/2">{detail[0]?.entity_reason}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Applicant Phone Number?
                  </p>
                  <p className=" leading-5 w-1/2">{}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    What date did business commence
                  </p>
                  <p className=" leading-5 w-1/2">{}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Has the business commence:
                  </p>
                  <p className=" leading-5 w-1/2">{"Yes"}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    New/Existing Business
                  </p>
                  <p className=" leading-5 w-1/2">{"New"}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Nature of Business:
                  </p>
                  <p className=" leading-5 w-1/2">{"New"}</p>
                </div>

                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Branch Address:</p>
                  <p className=" leading-5 w-1/2">{"Ojuelegba"}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Number of Proprietors:
                  </p>
                  <p className=" leading-5 w-1/2">{"2"}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Proprietor 1:</p>
                  <p className=" leading-5 w-1/2">{"Okon Okoi"}</p>
                </div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Proprietor 2:</p>
                  <p className=" leading-5 w-1/2">{"Akpan Edet"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {detail[0].entity_type
          ?.toLowerCase()
          .includes("trustee" || "incorporate") && (
          <div className="w-[350px] px-3 flex-1  text-project-light-black">
            <div className="">
              {/* <p className="text-sm font-medium">{detail[0]?.name}</p> */}
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application Status:</p>
                <p className=" leading-5 w-1/2">{}</p>
              </div>
              <div className="mb-3 flex justify-between items-start">
                <p className=" font-semibold leading-5">Application No.:</p>
                <p className=" leading-5 w-1/2">{detail[0]?._id}</p>
              </div>
              <div>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">Application Name:</p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.entity_type !== "criminal"}
                  </p>
                </div>
                <>
                  <div className="mb-3 mt-5 w-full ">
                    <p className=" font-semibold leading-5 border-b-2 pb-1 w-full">
                      Business Contact and Address:
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Email Address:</p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          ?.filter((ad) =>
                            ad.toLowerCase().includes("email")
                          )[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">
                      Applicant Phone Number?
                    </p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          ?.filter((ad) =>
                            ad.toLowerCase().includes("phone")
                          )[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Address:</p>
                    <p className=" leading-5 w-1/2">
                      {
                        add
                          ?.filter((ad) =>
                            ad.toLowerCase().includes("principal place")
                          )[0]
                          .split(":")[1]
                      }
                    </p>
                  </div>
                  <div className="mb-3 flex justify-between items-start">
                    <p className=" font-semibold leading-5">Branch Address:</p>
                    <p className=" leading-5 w-1/2">{}</p>
                  </div>
                </>
                <>
                  <div className="mb-3 mt-5 w-full ">
                    <p className=" font-semibold leading-5 border-b-2 pb-1 w-full">
                      Proposed Names:
                    </p>
                  </div>
                  {proposedNames?.map((name, id) => (
                    <div className="mb-3 flex justify-between items-start">
                      <p key={id} className=" font-semibold mb-2 leading-5">
                        {`Option ${id + 1}`}
                      </p>
                      <p className=" leading-5 w-1/2">{name.split(":")[1]}</p>
                    </div>
                  ))}
                </>
                <div className="mb-3 flex justify-between items-start">
                  <p className=" font-semibold leading-5">
                    Nature of Business:
                  </p>
                  <p className=" leading-5 w-1/2">
                    {detail[0]?.business_nature}
                  </p>
                </div>
                <></>
              </div>
            </div>
          </div>
        )}

        <div className="">
          <h2 className="font-semibold mb-2">Uploaded Documents</h2>
          {detail[0]?.documents.length > 0 && (
            <div className="bg-gray-200 p-4">
              {detail[0]?.documents.map((doc, id) => {
                let imageIcon = jpeg;
                let title = "Document FIle";
                if (doc.document_type.includes("pdf")) {
                  imageIcon = pdf;
                  title = "Pdf Document";
                } else if (doc.document_type.includes("doc")) {
                  title = "Word Document";
                  imageIcon = docx;
                } else if (doc.document_type.includes("xls")) {
                  title = "Excel Document";
                  imageIcon = xlsx;
                } else if (doc.document_type.includes("jp" || "png" || "gif")) {
                  title = "Image File";
                  imageIcon = jpeg;
                }
                return (
                  <div key={id} className=" flex gap-10 mb-3 justify-between">
                    <div className="flex gap-5">
                      <img width={50} src={imageIcon} alt="" />
                      <div className="text-sm">
                        <h3 className="font-semibold">{doc.document_name}</h3>
                        {/* <p>Courney Henry</p> */}
                      </div>
                    </div>
                    <div className="text-xs flex gap-5">
                      {/* <p>1.4 MB</p> */}
                      <a href={doc.document_url} target="_blank">
                        <p className="text-project-blue">Download</p>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <>
      <ShimmerPostDetails card cta variant="SIMPLE" />
      <ShimmerPostDetails card cta variant="EDITOR" />
    </>
  );
};

export default ApplicationDetails;
