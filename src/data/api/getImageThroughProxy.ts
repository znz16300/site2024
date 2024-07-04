/* eslint-disable import/prefer-default-export */
function getGoogleDriveDirectLink(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

export async function getImageThroughProxy(fileId: string): Promise<string | null> {
  const directLink = getGoogleDriveDirectLink(fileId);
  const proxyUrl = `https://cors-anywhere.herokuapp.com/${directLink}`;

  try {
    const response = await fetch(proxyUrl);
    if (response.ok) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
    console.error('Failed to fetch image through proxy:', response.statusText);
    return null;
  } catch (error) {
    console.error('Error fetching image through proxy:', error);
    return null;
  }
}
