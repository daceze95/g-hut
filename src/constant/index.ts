import { FaEllipsisH } from 'react-icons/fa';
import { IconType } from 'react-icons';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaAndroid,
    FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';


export const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    'Apple Macintosh': FaApple,
    iOS: MdPhoneIphone,
    Android: FaAndroid,
    Nintendo: SiNintendo,
    Linux: FaLinux,
    Web: BsGlobe,
};



export const navItems = [
    {
        id: 1,
        label: 'LOG IN',
    },
    {
        id: 2,
        label: 'SIGN UP',
    },
    {
        id: 3,
        label: FaEllipsisH,
    },
];

