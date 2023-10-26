const artworkCloudinaryImagePath = "website/artwork";

export const upcomingRelease = {
  title: "UPCOMING RELEASE",
  cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`,
  url: "#"
} as const;

export const releases = [
  {
    title: "Release 1",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_1_jllseq`
  },
  {
    title: "Release 2",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`
  },
  {
    title: "Release 3",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_3_f22qdj`
  },
  {
    title: "Release 4",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`
  }
] as const;
