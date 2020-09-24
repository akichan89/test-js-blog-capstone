export default {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'capstone-blog',
      read_key: process.env.COSMIC_READ_KEY || 'eqxJtZDfcekkFtMnKSdcHeQIygLTUIROsfqN4ZLAqsUU5rAZzl',
      write_key: process.env.COSMIC_WRITE_KEY || 'lNYEZSB3eZHEvHoFUg9xItKpdHeMssINr2kqF5RqSOFc3E4vik',
      port: process.env.PORT || '',  
    }
  }
