
const dbUri = "mongodb+srv://dbuser:<db_password>@cluster0.aybaufr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ytClientSecret = "null";

const titleVideoId = "null";
const thumbnailVideoId = "yourOtherVideoId";
const wsAuthToken = process.env.WS_AUTH_TOKEN || "abcdtest321";

export default {dbUri, ytClientSecret, titleVideoId, thumbnailVideoId};