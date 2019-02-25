import { connect } from 'react-redux';

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps);
