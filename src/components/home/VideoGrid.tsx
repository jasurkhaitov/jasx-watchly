
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { MyGlobalContext } from '@/hooks/useContext'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PlayCircle, Clock, User } from 'lucide-react'
import { VideoSkeleton } from './VideoSkeleton'
import { motion } from 'framer-motion'

export default function VideoGrid() {
  const { video, selectedCategory } = useContext(MyGlobalContext)

  const isLoading = video.length === 0

  return (
    <div className="mt-24 mb-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {selectedCategory} Videos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))
          : video.map((item, idx) => {
              const isVideo = item.id.kind === 'youtube#video'
              const { snippet } = item

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative aspect-video cursor-pointer">
                      <img
                        src={isVideo ? snippet.thumbnails.high.url : snippet.thumbnails.medium.url}
                        alt={snippet.title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          isVideo ? 'group-hover:scale-105' : ''
                        }`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isVideo ? (
                          <PlayCircle className="w-16 h-16 text-white" />
                        ) : (
                          <User className="w-16 h-16 text-white" />
                        )}
                      </div>
                    </div>

                    <CardContent className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold line-clamp-2 mb-2 text-lg h-14">{snippet.title}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${snippet.channelTitle}`} />
                          <AvatarFallback>{snippet.channelTitle[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-muted-foreground">{snippet.channelTitle}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-grow">{snippet.description}</p>
                      <div className="flex items-center space-x-2 text-xs mt-auto">
                        {isVideo && (
                          <Badge variant="secondary" className="px-2 py-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {formatDistanceToNow(new Date(snippet.publishedAt), { addSuffix: true })}
                          </Badge>
                        )}
                        <Badge variant="outline" className={`px-2 py-1 ${isVideo ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                          {isVideo ? 'Video' : 'Channel'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
      </div>
    </div>
  )
}
