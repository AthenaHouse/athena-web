export const formatName = (str) => {
    return str.replace(/([A-Z])/g, ' $1')
              .trim()
              .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const formatLocale = (str) => {
    const prefix = "software_";
    return prefix + str;
}