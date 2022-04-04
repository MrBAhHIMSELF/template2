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
      "Pit bulls are regularly cited as one of the most dangerous dog breeds. Between 2005 and 2016, Pit bull attacks led to 64.8 percent of all dog-related deaths. Over this decade, this type of dog caused 254 deaths",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one"
  },
  {
    name: "Shih Tzu",
    description:
      "This breed is considered very happy-go-lucky and is typically not an aggressive dog. However, some Shih Tzu may show unwanted behavior including growling.",
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
