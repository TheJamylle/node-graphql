function posts(parent, args, context, info) {
    return context.prisma.posts.findMany()
}

module.exports = {
    posts
}