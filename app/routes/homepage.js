import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    return [{
      title: 'Post 1 Title'
    },
    {
      title: 'Post 2 Title'
    },
    {
      title: 'Post 3 Title'
    }]
  }
})
