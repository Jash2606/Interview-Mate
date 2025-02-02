import { mutation,query } from "./_generated/server";
import { v } from "convex/values";
export const addComment = mutation({
    args: {
        content: v.string(),
        interviewId: v.id("interviews"),
        rating: v.number()
    },

    handler: async(ctx,args) =>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity){
            throw new Error("User is not authenticated");
        }

        const comment = await ctx.db.insert("comments",{
            interviewId: args.interviewId,
            content: args.content,
            rating: args.rating,
            interviewerId: identity.subject,
        });
        return comment;
    }
});

export const getComments= query({
    args: {
        interviewId: v.id("interviews")
    },
    handler: async(ctx,args) =>{
        const comments = await ctx.db
         .query("comments")
         .withIndex("by_interviewId", (q) => q.eq("interviewId", args.interviewId))
         .collect();
        return comments;
    }
}) 