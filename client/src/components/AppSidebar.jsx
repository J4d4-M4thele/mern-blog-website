import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-white.png";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { RouteCategoryDetails, RouteBlogDetails } from "@/helpers/RouteName";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";

const AppSidebar = () => {
  const { data: categoryData } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/category/all-categories`,
    {
      method: "get",
      credentials: "include",
    },
  );

  const categories = Array.isArray(categoryData)
    ? categoryData
    : (categoryData?.category ?? categoryData?.categories ?? []);

  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} alt="Logo" width={120} />
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IoHomeOutline />
              <Link to="">Home</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <BiCategoryAlt />
              <Link to={RouteCategoryDetails}>Categories</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <GrBlog />
              <Link to={RouteBlogDetails}>Blogs</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <FaRegComments />
              <Link to="">Comments</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <FiUsers />
              <Link to="">Users</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />

        <SidebarGroup />
        <SidebarGroupLabel>
          <BiCategoryAlt />
          Categories
        </SidebarGroupLabel>
        <SidebarMenu>
          {categories.map((category) => (
              <SidebarMenuItem key={category._id}>
                <SidebarMenuButton>
                  <GoDot />
                  <Link to="">{category.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
