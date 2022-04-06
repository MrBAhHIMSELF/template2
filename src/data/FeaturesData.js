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
      "Most aggressive German Shepherds are aggressive because of their owners. German Shepherds need to be socialized and trained so that their territorial instincts can be harnessed.",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three"
  },
  {
    name: "German Shepherd",
    description:
      "Most aggressive German Shepherds are aggressive because of their owners. German Shepherds need to be socialized and trained so that their territorial instincts can be harnessed.",
    icon: iconStyle(BiSupport),
    imgClass: "four"
  },

  {
    name: "American Pit Bull Terrier	",
    description:
      "Another reason for pit bulls acting up is the lack of human contact. Pit bulls don't do well spending a lot of time alone. Being alone more than usual can cause a pit bull to misbehave. If your pit bull is acting unusually aggressive out of nowhere, they may have a physical issue bothering them.",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  },

  {
    name: "Yorkshire Terrier 	",
    description:
      "In the case of acting out due to injury or illness, a Yorkie may bite, nip at, bark at or otherwise act aggressive particularly when his owner attempts to pick him up, touch him, or when approached. "
    //	icon: iconStyle(AiOutlineCloudUpload),
    //	imgClass: 'six',
  },
  {
    name: "Mixed Breed	",
    description:
      "Most often a dog's aggression is motivated by fear, anxiety, conflict about what to expect and what to do and the anticipation of possible punishment.",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  },

  {
    name: "Maltese	",
    description:
      "The Maltese can become aggressive when they feel threatened. It is easy for these tiny dogs to feel intimidated, even if you don't mean to be. When the Maltese feel threatened, they usually resort to barking, growling, and biting.",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six"
  }
];
