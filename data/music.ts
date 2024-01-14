const artworkCloudinaryImagePath = "website/artwork";

export const upcomingRelease = {
  title: "Astray",
  cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`,
  url: "https://tr.ee/6ji_kEWS4T"
} as const;

export const releases = [
  {
    title: "Astray",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`,
    url: "https://tr.ee/6ji_kEWS4T"
  },
  {
    title: "Retrace",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`,
    url: "https://tr.ee/iDi_Mqbwdy"
  }
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
