import CheckBoutOutline from '../assets/icons/check_box_outline.png';
import CheckBox from '../assets/icons/check_box.png';
import DeleteForever from '../assets/icons/delete_forever.png';
import Edit from '../assets/icons/edit.png';

export const images = {
  uncompleted: CheckBoutOutline,
  completed: CheckBox,
  delete: DeleteForever,
  update: Edit,
};

export type Images = typeof images;
