import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ name }) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className=" text-xl font-semibold text-ExtraDarkColor pt-4">
          {name}
        </h1>
      </div>
      <p>
        [Jai Kumar] demonstrated an impressive level of creativity in designing my website.
         The visual appeal, color scheme, and overall layout exceeded my expectations.
          They have a keen eye for design and paid meticulous attention to every
         detail.
      </p>
    </div>
  );
};

export default ReviewCard;
