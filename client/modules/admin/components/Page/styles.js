export default ({ spacing, mixins }) => ({
  page: {
    display: 'flex',
  },
  content: {
    marginTop: spacing.unit * 8,
    paddingTop: spacing.unit * 2,
    ...mixins.gutters(),
  },
});
