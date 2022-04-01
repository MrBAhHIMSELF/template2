import React from "react";

import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Pitbull",
    description:
      "We offer the best data security to our clients, which makes us stand out",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one"
  },
  {
    name: "Shih Tzu",
    description: "Our system is easy to use and integrate",
    icon: iconStyle(IoIosOptions),
    imgClass: "two"
  },
  {
    name: "Chihuahua",
    description:
      "Our code is written in highest standards, which makes it highly sustainable",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three"
  },
  {
    name: "German Shepherd",
    description: "Our team is available at all times in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four"
  },
  {
    name: "Pitbull Mix",
    description: "We offer the highest value/cost ratio",
    icon: iconStyle(BiDollar),
    imgClass: "five"
  },
  {
    name: "American Pit Bull Terrier	",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  },

  {
    name: "Yorkshire Terrier 	",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed "
    //	icon: iconStyle(AiOutlineCloudUpload),
    //	imgClass: 'six',
  },
  {
    name: "Mixed Breed	",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  },

  {
    name: "Maltese	",
    description:
      "Our servers are located all over the world, therefore improving scalability and speed ",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  }
];
