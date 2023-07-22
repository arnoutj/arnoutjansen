const STATIC_ASSETS_URL = 'https://arnoutj-website.s3.eu-central-1.amazonaws.com/assets';

export default function getStaticFileUrl(filename: string) {
  return `${STATIC_ASSETS_URL}/${filename}`;
}
