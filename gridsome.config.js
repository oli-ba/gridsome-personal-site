// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Olivier Balaguer',
  siteUrl: 'https://www.olivierbalaguer.com',
  siteDescription: 'Remote User Interface and User Experience Designer based in London.',
  resolveAbsolutePaths: true,
  plugins: [
    {use: 'gridsome-plugin-tailwindcss'},
    {use: 'vue-clipboard2'},
    {use: 'gridsome-plugin-svg'},
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work', // Required
        baseDir: './content/work', // Where .md files are located
        pathPrefix: '/portfolio', // Add route prefix. Optional
        template: './src/templates/tplWork.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog', // Required
        baseDir: './content/blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/tplBlog.vue' // Optional
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@projects', '@/assets/images/projects')
  },
}
