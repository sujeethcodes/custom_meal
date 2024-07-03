const helperUtils = {};

helperUtils.getTrueValues = (obj) => {
    return Object.entries(obj).filter(([key, value]) => value === true).map(([key, value]) => key);
};

export default helperUtils;
