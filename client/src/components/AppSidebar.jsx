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

const AppSidebar = () => {
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
                    <Link to="">Categories</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <GrBlog />
                    <Link to="">Blogs</Link>
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
        <SidebarGroupLabel>Categories</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton>
                    <GoDot />
                    <Link to="">Category Item</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>

    </Sidebar>
  );
};

export default AppSidebar;
