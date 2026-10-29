export const RouteIndex = "/";
export const RouteSignIn = "/sign-in";
export const RouteSignUp = "/sign-up";

export const RouteProfile = "/profile";

export const RouteCategoryDetails = "/all-categories";
export const RouteAddCategory = "/category/add";
export const RouteEditCategory = (category_id) => {
  if (category_id) {
    return `/category/update/${category_id}`;
  } else {
    return "/category/update/:category_id";
  }
};

export const RouteBlogDetails = "/all-blogs";
export const RouteAddBlog = "/blog/add";
export const RouteEditBlog = (blog_id) => {
  if (blog_id) {
    return `/blog/update/${blog_id}`;
  } else {
    return "/blog/update/:blog_id";
  }
};

export const RouteBlog = (category, blog) => {
  if (!category || !blog) {
    return "/blog/:category/:blog";
  } else {
    return `/blog/${category}/${blog}`;
  }
};

export const RouteBlogByCategory = (category) => {
  if (!category) {
    return "/blog/:category";
  } else {
    return `/blog/${category}`;
  }
};

export const RouteSearch = (q) => {
  if(q) {
    return `/search?q=${q}`;
  }else {
    return '/search'
  }
  
};