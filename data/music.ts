const artworkCloudinaryImagePath = "website/artwork";

export const upcomingRelease = {
  title: "Retrace",
  cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`,
  url: "https://distrokid.com/hyperfollow/arnoutjansen/retrace"
} as const;

export const releases = [
  {
    title: "Retrace",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`,
    url: "https://koji.to/k/9RYw"
  }
  // {
  //   title: "Release 1",
  //   cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_1_jllseq`
  // }
  // {
  //   title: "Release 2",
  //   cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`
  // },
  // {
  //   title: "Release 3",
  //   cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_3_f22qdj`
  // },
  // {
  //   title: "Release 4",
  //   cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`
  // }
] as const;
