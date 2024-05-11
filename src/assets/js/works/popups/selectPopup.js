/* eslint-disable */
import active from './activePopup.js';

const selectPopup = () => {
  const button = document.querySelectorAll('.btn-card');
  button.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-bs-target');
      const targetUpdated = target.substring(1);
      switch (targetUpdated) {
        case 'pdf':
          active(targetUpdated);
          break;
        case 'shop':
          active(targetUpdated);
          break;
        case 'quote':
          active(targetUpdated);
          break;
        case 'budget':
          active(targetUpdated);
          break;
        case 'coin':
          active(targetUpdated);
          break;
        case 'todo':
          active(targetUpdated);
          break;
        case 'math':
          active(targetUpdated);
          break;
        case 'enterprise':
          active(targetUpdated);
          break;
        case 'book':
          active(targetUpdated);
          break;
        case 'leader':
          active(targetUpdated);
          break;
        case 'responsive':
          active(targetUpdated);
          break;
        default:
          return 'anyone selected';
      }
    });
  });
};

export default selectPopup;