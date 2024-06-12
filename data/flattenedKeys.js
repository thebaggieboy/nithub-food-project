function flattenKeys(obj, parentKey = '') {
    let flattenedKeys = {};
    for (let key in obj) {
        const nestedKey = parentKey ? `${parentKey} > ${key}` : key;
        if (typeof obj[key] === 'object') {
            flattenedKeys = {...flattenedKeys, ...flattenKeys(obj[key], nestedKey)};
        } else {
            flattenedKeys[nestedKey] = obj[key];
        }
    }
    return flattenedKeys;
}

const flattenedKeys = flattenKeys(NBS_DASHBOARD[0]);
console.log("flattenedKeys: ", flattenedKeys)

