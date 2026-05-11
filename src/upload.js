export const getUploadUrl = async (token, fileName, contentType) => {
  const res = await fetch("YOUR_API_GATEWAY_URL/getUploadUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ fileName, contentType }),
  });

  return await res.json();
};

export const uploadFileToS3 = async (url, file) => {
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });
};