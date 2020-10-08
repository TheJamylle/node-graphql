async function posts(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description: { contains: args.filter } }
    ]
  } : {}
  const posts = await context.prisma.post.findMany({ where })

  return posts
}

module.exports = {
  posts
}