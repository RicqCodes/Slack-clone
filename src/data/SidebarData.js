import MessageIcon from "@mui/icons-material/Message";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    text: "Thread",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions & Reactions",
  },
  {
    icon: <BookmarkBorderIcon />,
    text: "Save Items",
  },
  {
    icon: <PeopleAltIcon />,
    text: "Peoples & Groups",
  },
  {
    icon: <AppsIcon />,
    text: "More",
  },
];
