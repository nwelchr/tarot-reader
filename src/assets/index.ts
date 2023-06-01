import requireContext from "require-context.macro";

declare type ImageType = {
  default: string;
};

const imageContext = requireContext("./", false, /\.(png|jpe?g|svg)$/);

console.log({ imageContext });
const images: { [key: string]: string } = imageContext
  .keys()
  .reduce((acc: any, key: string) => {
    acc[key] = imageContext(key);
    return acc;
  }, {});

export default images;
