import * as React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { categories } from '@/util/data'
import { MyGlobalContext } from '@/hooks/useContext'

export default function ScrollNav() {
  const {selectedCategory, setSelectedCategory} = React.useContext(MyGlobalContext);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex w-full items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="w-full whitespace-nowrap px-3">
        <div
          ref={scrollContainerRef}
          className="flex w-max space-x-2 py-2 overflow-x-auto mb-1"
        >
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "ghost"}
              className="rounded-sm h-auto py-2 px-5 w-auto"
              onClick={() => setSelectedCategory(category.name)}
            >
              <category.icons/>
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-[6px]" />
      </ScrollArea>
    </div>
  );
}
