function getSubstringAfterColon(inputString) {
  const parts = inputString.split(":");
  if (parts.length > 1) {
    return parts[1];
  } else {
    return "";
  }
}

export { getSubstringAfterColon };
