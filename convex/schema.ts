import { defineSchema , defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role : v.union(v.literal("admin"), v.literal("candidate")),
        clerkId : v.string(),
    }).index("by_clerkId", ["clerkId"]),

    interviews: defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        startTime : v.number(),
        endTime: v.optional(v.number()),
        status: v.string(),
        streamCallId: v.string(),
        candidateId: v.string(),
        interviewerId: v.array(v.string())
    })
     .index("by_candidateId", ["candidateId"])
     .index("by_streamCallId", ["streamCallId"]),

    comments: defineTable({
        content: v.string(),
        interviewId: v.id("interviews"),
        interviewerId: v.string(),
        rating: v.number()
    })
     .index("by_interviewId", ["interviewId"])
});