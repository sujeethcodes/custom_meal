const helperUtils = {};

helperUtils.getTrueValues = (obj) => {
    return Object.entries(JSON.parse(obj)).filter(([key, value]) => value === true).map(([key, value]) => key);
};

export default helperUtils;
