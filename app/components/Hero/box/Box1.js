import React from "react";

const Box1 = (props) => {
  return (
    <div className=" ml-[147px]   h-[140px] w-[140px] sm:h-[30vh] sm:w-[15vw]  sm:ml-[16vw] rounded-[10px] items-center border-[1px] pb-6 ">
      <div className="ml-[-8%] mt-[-5%] w-[90%] rounded-tr-lg  rounded-bl-lg bg-[#F303CB] sm:py-2 px-[20px]">
        <p className="text-lg font-lato  text-[#F5FAFF] text-end dark:text-[#F5FAFF] lg:text-2xl">
          {props.box1Text}
        </p>
      </div>
      <img src={props.img1Url} className="h-[90%] w-[90%] p-[20px]" alt="" />
    </div>
  );
};

export default Box1;
