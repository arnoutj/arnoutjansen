const artworkCloudinaryImagePath = "website/artwork";

export const upcomingRelease = {
  title: "Astray",
  cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`,
  url: "https://distrokid.com/hyperfollow/arnoutjansen/astray"
} as const;

export const releases = [
  {
    title: "Retrace",
    cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_2_ajqjof`,
    url: "https://tr.ee/iDi_Mqbwdy"
  }
  // {
  //   title: "Astray",
  //   cloudinaryImagePath: `${artworkCloudinaryImagePath}/Cover_4_vludhv`
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
