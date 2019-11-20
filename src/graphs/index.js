import oauthFetch from "../oauth/index";

const params = {
    "api-version":"5.1-preview"
};

export const getDescriptor = async(id) => (await oauthFetch({
    "url": `https://vssps.dev.azure.com/axafrance/_apis/graph/descriptors/${id}`,
    params
})).value;
