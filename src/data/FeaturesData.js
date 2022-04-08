import React from "react";

import { FaDog } from "react-icons/fa";
//import { IoIosOptions } from "react-icons/io";
//import { AiOutlineCloudUpload } from "react-icons/ai";
//import { BiSupport, BiDollar } from "react-icons/bi";
//import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Pitbull",
    description:
      "Pit bulls are regularly cited as one of the most dangerous dog breeds. Between 2005 and 2016, Pit bull attacks led to 64.8 percent of all dog-related deaths. Over this decade, this type of dog caused 254 deaths",
    icon: iconStyle(FaDog),
    imgClass: "one"
  },
  {
    name: "Shih Tzu",
    description:
      "This breed is considered very happy-go-lucky and is typically not an aggressive dog. However, some Shih Tzu may show unwanted behavior including growling.",
    icon: iconStyle(FaDog),
    imgClass: "two"
  },
  {
    name: "Chihuahua",
    description:
      "Chihuahuas appear aggressive because they are inherently protective of their territory and highly protective of their owners. Being aggressive by showing their teeth, growling, barking, and biting is a way to defend themselves when they feel scared and need to protect themselves",
    icon: iconStyle(FaDog),
    imgClass: "three"
  },
  {
    name: "German Shepherd",
    description:
      "Most aggressive German Shepherds are aggressive because of their owners. German Shepherds need to be socialized and trained so that their territorial instincts can be harnessed. Otherwise, they may become territorial towards individuals that you don't want them to, like family friends.",
    icon: iconStyle(FaDog),
    imgClass: "four"
  },

  {
    name: "American Pit Bull Terrier	",
    description:
      "American pitbulls act up because of the lack of human contact. Pit bulls don't do well spending a lot of time alone. Being alone more than usual can cause a pit bull to misbehave.",
    icon: iconStyle(FaDog),
    imgClass: "five"
  },

  {
    name: "Yorkshire Terrier	",
    description:
      "In the case of acting out due to injury or illness, a Yorkie may bite, nip at, bark at or otherwise act aggressive particularly when his owner attempts to pick him up, touch him, or approaches him.",
    icon: iconStyle(FaDog),
    imgClass: "six"
  },

  {
    name: "Rottweilers	",
    description:
      "They say that poor owners, neglect, and abuse result in aggressive Rotweilers, not genetics. Without proper exercise, Rottweilers have a tendency to become destructive and extremely excited. These are not sedentary dogs. If an owner cannot give the dog attention and exercise, he should not own a Rottweiler. ",
    icon: iconStyle(FaDog),
    imgClass: "seven"
  },
  // {
  //name: "Yorkshire Terrier 	",
  //   description:
  //  "Our servers are located all over the world, therefore improving scalability and speed "
  // icon: iconStyle(FaDog),
  //   imgClass: "six"
  // },
  {
    name: "Mixed Breed	",
    description:
      "Most often a dog's aggression is motivated by fear, anxiety, conflict about what to expect and what to do and the anticipation of possible punishment.",
    icon: iconStyle(FaDog),
    imgClass: "eight"
  },

  {
    name: "Maltese	",
    description:
      "The Maltese can become aggressive when they feel threatened. It is easy for these tiny dogs to feel intimidated, even if you don't mean to be. When the Maltese feel threatened, they usually resort to barking, growling, and biting.",
    icon: iconStyle(FaDog),
    imgClass: "nine"
  }
];
