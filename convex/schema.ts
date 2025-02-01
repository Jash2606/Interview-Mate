import { defineSchema , defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role : v.union(v.literal("admin"), v.literal("user")),
        clerkId : v.string(),
    }).index("by_clerkId", ["clerkId"]),
});