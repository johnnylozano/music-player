import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";

Amplify.configure(config);
const client = generateClient();

export { client };
