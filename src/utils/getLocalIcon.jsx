// src/utils/iconUtils.js
import Icon1 from '../assets/icons/icon-1.svg';
import Icon2 from '../assets/icons/icon-2.svg';
import Icon3 from '../assets/icons/icon-3.svg';
import Icon4 from '../assets/icons/icon-4.svg';
import Icon5 from '../assets/icons/icon-5.svg';
import Icon6 from '../assets/icons/icon-6.svg';
import Icon7 from '../assets/icons/icon-7.svg';

const icons = {
    icon1: Icon1,
    icon2: Icon2,
    icon3: Icon3,
    icon4: Icon4,
    icon5: Icon5,
    icon6: Icon6,
    icon7: Icon7,
};

export const getLocalIcon = (iconName) => {
    const IconPath = icons[iconName.toLowerCase()];

    // Return the icon path or null if not found
    return IconPath ? <img src={IconPath} alt={iconName} /> : null;
};

