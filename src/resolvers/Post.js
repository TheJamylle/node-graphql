function user(parent, args, context) {
  return context.prisma.post.findOne({ where: { id: parent.id } }).user()
}

module.exports = {
  user,
}