// import DataUriParser from "datauri/parser.js"

import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file: any) => {
  // console.log("file: ", file)
  const parser = new DataUriParser();
  const extName = path.extname(file.name).toString();
  const extNameStr = extName.toString();
  //   console.log("extNameStr: ", typeof(extNameStr))
  return parser.format(extNameStr, "randomstring");
};

export default getDataUri;
