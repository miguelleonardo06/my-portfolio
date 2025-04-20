import myPicture from "@/assets/miguel_reshape.png";
import myPicture2 from "@/assets/migz1 (1).jpg";
const pictures = {
  myPicture: myPicture, // which is just a string
  myPicture2: myPicture2,
};

export type pictureKeys = keyof typeof pictures;

type picturesType = {
  [key in pictureKeys]: string;
};

export const Pictures: picturesType = pictures;
