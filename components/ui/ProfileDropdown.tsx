import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Mail } from "lucide-react";
import { authClient } from "@/app/lib/auth-client";
import { User } from "@/app/types/user";
import { getUserInitials } from "@/app/lib/helper";
import { toast } from "sonner"

const ProfileDropdown = ({ userData }: { userData: User | null }) => {
  
  // Sign out the user
  const handleSignOut = async (): Promise<void> => {
    try {
      await authClient.signOut();
      toast.success("You have been successfully logged out");
     window.location.href = '/';
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  if (!userData) {
  return null; // or a loading/fallback UI
}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-10 w-10 ring-2 ring-gray-300">
          <AvatarImage src={userData.image || undefined} alt="Profile" />
          <AvatarFallback className="text-lg">
            {getUserInitials(userData.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-4 ">
        <div className="flex flex-col items-center justify-center gap-2">
          <Avatar className="h-16 w-16 ring-2 ring-gray-300">
            <AvatarImage src={userData.image || undefined} alt="Profile" />
            <AvatarFallback className="text-2xl">
              {getUserInitials(userData.name)}
            </AvatarFallback>
          </Avatar>
          <DropdownMenuLabel className="text-lg font-semibold text-center">
            Welcome, {userData.name || "User"}!
          </DropdownMenuLabel>
          <DropdownMenuItem className="flex items-center gap-2 text-sm text-gray-600 cursor-default">
            <Mail className="h-4 w-4" />
            {userData.email}
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          className="flex items-center justify-center gap-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
