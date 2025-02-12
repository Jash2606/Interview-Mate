"use client"

import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import  useUserRole  from "./hooks/useUserRole";

function DashboardBtn  () {

  const { isCandidate, isInterviewer , isLoading } = useUserRole();

  if(isCandidate || isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <SparklesIcon className="w-8 h-8" />
        DashBoard
      </Button>
    </Link>
  )
}

export default DashboardBtn
