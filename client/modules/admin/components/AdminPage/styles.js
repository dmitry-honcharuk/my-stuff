export default ({ spacing, mixins }) => ({
  content: {
    // header height
    marginTop: spacing.unit * 8,
    paddingTop: spacing.unit * 2,
    ...mixins.gutters(),
  },
});
