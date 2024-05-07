interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'LXF Running Page',
  siteUrl: 'https://lihsiaofei.github.io/lxf_running/',
  description: 'Personal site and blog',
  navLinks: [],
};

export default data;
