import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function VideoSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardHeader className="p-4">
        <Skeleton className="h-4 w-2/3 mb-2" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Skeleton className="h-3 w-full mb-2" />
        <Skeleton className="h-3 w-4/5" />
        <div className="flex items-center space-x-2 mt-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>
      </CardContent>
    </Card>
  )
}