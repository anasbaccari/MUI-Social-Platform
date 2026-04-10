export const experienceConfig = {
  messages: {
    title: "Messages Hub",
    subtitle: "Conversation flow ready for backend message threads.",
    cta: "Open Inbox API",
    checklist: [
      "Thread list endpoint",
      "Unread counter sync",
      "Real-time socket delivery",
    ],
  },
  notifications: {
    title: "Notification Center",
    subtitle: "All activity alerts routed here for backend event feeds.",
    cta: "Connect Event Stream",
    checklist: [
      "Notification feed endpoint",
      "Read/unread mutation",
      "Push delivery settings",
    ],
  },
  search: {
    title: "Smart Search",
    subtitle: "Unified search experience for users, pages, and posts.",
    cta: "Integrate Search API",
    checklist: [
      "Keyword search endpoint",
      "Ranking and highlighting",
      "Pagination cursor support",
    ],
  },
  profile: {
    title: "Profile Experience",
    subtitle: "Ready for profile detail, stats, and editable sections.",
    cta: "Attach Profile API",
    checklist: [
      "Profile detail endpoint",
      "Avatar/media upload",
      "Follow/unfollow mutation",
    ],
  },
  post: {
    title: "Post Detail",
    subtitle: "Thread-ready post detail page for comments and reactions.",
    cta: "Connect Post API",
    checklist: [
      "Post detail endpoint",
      "Comment write/read",
      "Reaction mutation",
    ],
  },
  share: {
    title: "Share Flow",
    subtitle: "Share action pipeline with destinations and tracking.",
    cta: "Enable Share Service",
    checklist: [
      "Share target endpoint",
      "Deep-link generation",
      "Analytics event tracking",
    ],
  },
  group: {
    title: "Group Workspace",
    subtitle: "Community detail and membership handling entry point.",
    cta: "Attach Group API",
    checklist: [
      "Group detail endpoint",
      "Join/leave mutation",
      "Group post feed",
    ],
  },
  marketplace: {
    title: "Product Detail",
    subtitle: "Commerce-ready page for catalog and checkout integration.",
    cta: "Connect Commerce API",
    checklist: [
      "Product detail endpoint",
      "Inventory sync",
      "Cart/checkout mutation",
    ],
  },
  friend: {
    title: "Friend Connection",
    subtitle: "Relationship state and messaging hooks can plug in here.",
    cta: "Integrate Social Graph API",
    checklist: [
      "Friend status endpoint",
      "Add/remove mutation",
      "Mutual friend lookup",
    ],
  },
  settings: {
    title: "Settings Action",
    subtitle: "Backend configuration and account-control handoff screen.",
    cta: "Save Settings Backend",
    checklist: [
      "User preferences endpoint",
      "Sensitive action confirmation",
      "Audit log events",
    ],
  },
  media: {
    title: "Media Viewer",
    subtitle: "Dedicated destination for uploaded and featured media.",
    cta: "Connect Media CDN",
    checklist: [
      "Media metadata endpoint",
      "Image transform variants",
      "Access-control rules",
    ],
  },
  create: {
    title: "Create Flow",
    subtitle: "Post creation handoff with draft and publish states.",
    cta: "Integrate Create API",
    checklist: [
      "Draft save endpoint",
      "Publish mutation",
      "Attachment upload flow",
    ],
  },
};

export const getExperienceConfig = (actionId) =>
  experienceConfig[actionId] || {
    title: "Action Workspace",
    subtitle: "This route is ready for backend integration.",
    cta: "Attach Backend Endpoint",
    checklist: [
      "Read endpoint",
      "Write mutation",
      "Telemetry event",
    ],
  };
