import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Mail } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import { User } from "@/app/types/user";
import { getUserInitials } from "@/app/lib/helper";
import { toast } from "sonner";

const ProfileDropdown = ({ userData }: { userData: User | null }) => {
  // Sign out the user
  const handleSignOut = async (): Promise<void> => {
    try {
      await authClient.signOut();
      toast.success("You have been successfully logged out");
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  if (!userData) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 rounded-full">
          <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-700">
            <AvatarImage src={userData.image || undefined} alt="Profile" />
            <AvatarFallback className="text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              {getUserInitials(userData.name)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
        align="end"
        sideOffset={8}
      >
        {/* Profile Header */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-gray-200 dark:border-gray-700">
              <AvatarImage src={userData.image || undefined} alt="Profile" />
              <AvatarFallback className="text-lg font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                {getUserInitials(userData.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {userData.name || "User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {userData.email}
              </p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-2">
          <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 cursor-default hover:bg-transparent focus:bg-transparent">
            <Mail className="h-4 w-4" />
            <span className="truncate">{userData.email}</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

        {/* Sign Out */}
        <div className="p-2">
          <DropdownMenuItem
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
