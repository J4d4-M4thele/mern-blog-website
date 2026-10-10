export const RouteIndex = '/';
export const RouteSignIn = '/sign-in';
export const RouteSignUp = '/sign-up';

export const RouteProfile = '/profile';

export const RouteCategoryDetails = '/all-categories';
export const RouteAddCategory = '/category/add';
export const RouteEditCategory = (category_id) => {
    if (category_id) {
        return `/category/update/${category_id}`;
    }else {
        return '/category/update/:category_id';
    }
};