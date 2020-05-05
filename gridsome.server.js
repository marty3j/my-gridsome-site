// const axios = require('axios')

// module.exports = function (api) {
//   api.loadSource(async store => {
//     const { data } = await axios.get('https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=dog,cat,car&tagmode=any&nojsoncallback=1')

//     const contentType = store.addContentType(
//       {
//         typeName: 'FlickrPost',
//         route: `/:id` // optional
//       })
//     var i
//     for (const post of data.items) {
//       i++
//       contentType.addNode({
//         title: post.title,
//         tags: post.tags,
//         path: post.path,
//         context: {
//           description: post.description,
//           author: post.author,
//           media: post.media
//         }
//       })
//     }
//   })
// }

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'FlickrPost'
    })

    const { data } = await axios.get('https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=dog,cat,car&tagmode=any&nojsoncallback=1')

    for (const item of data.items) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.content,
        path: item.id,
        tags:item.tags,
        context:{
          author:item.author,
          media:item.media
        }
      })
    }
  })
}