function newPostSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("new_post")
}

const newPost = {
  subscribe: newPostSubscribe,
  resolve: payload => {
    return payload
  }
}

module.exports = {
  newPost
}