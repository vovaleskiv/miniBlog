import NavigationService from '../navigators/action';
import {
    HOME,
    BLOG_POST,
    ADD_COMMENT,
} from "../constants/navigation";

export const goHome = () => {
    NavigationService.reset(HOME);
};

export const goPostDetail = () => {
    NavigationService.push(BLOG_POST);
};

export const goAddComment = () => {
    NavigationService.push(ADD_COMMENT);
};