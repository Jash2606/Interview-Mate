import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import React, { useState } from 'react'
import { api } from "../../convex/_generated/api"

function useUserRole(){
    const { user } = useUser();
    // console.log("User : ",user)

    const userData = useQuery(api.users.getUserByClerkId, {
        clerkId: user?.id || ""
    });

    const isLoading  = userData === undefined;

    return {
        isLoading,
        isCandidate : userData?.role === "candidate",
        isInterviewer : userData?.role === "admin"
    }
}

export default useUserRole