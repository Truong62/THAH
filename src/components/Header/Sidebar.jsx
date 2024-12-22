import PropTypes from 'prop-types';
import { Sidebar } from 'primereact/sidebar';

/**
 *
 * @param visibleRight
 * @param setVisibleRight
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarContainer = ({ visibleRight, setVisibleRight }) => {
  return (
    <div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <h2>Right Sidebar</h2>
        <p>dawdawdawdawd</p>
      </Sidebar>
    </div>
  );
};

export default SidebarContainer;

SidebarContainer.propTypes = {
  setVisibleRight: PropTypes.func,
  visibleRight: PropTypes.bool,
};
