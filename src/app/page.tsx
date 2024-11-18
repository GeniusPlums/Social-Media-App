"use client"

import { Bell, Calendar, Crown, Heart, Home, MessageCircle, MoreHorizontal, Plus, Search, Users } from 'lucide-react'
import Link from "next/link"
import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid h-screen grid-cols-[240px_1fr_320px]">
      {/* Left Sidebar */}
      <div className="border-r">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <span className="text-xl">🍽️</span>
            <span>Mingle Eat Talk</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <Link
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-colors hover:text-gray-900"
            href="#"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900"
            href="#"
          >
            <Users className="h-4 w-4" />
            Members
          </Link>
          <Link
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900"
            href="#"
          >
            <Calendar className="h-4 w-4" />
            Events
          </Link>
          <Link
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900"
            href="#"
          >
            <MessageCircle className="h-4 w-4" />
            Discussions
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b px-6">
          <form className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                className="w-full bg-gray-50 pl-8"
                placeholder="Search posts, recipes..."
                type="search"
              />
            </div>
          </form>
          <Button size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage alt="User" src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <Card>
              <CardHeader>
                <Textarea placeholder="What's cooking, good looking?" />
              </CardHeader>
              <CardFooter>
                <Button>Post</Button>
              </CardFooter>
            </Card>
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage alt={`User ${post}`} src="/placeholder.svg" />
                      <AvatarFallback>U{post}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">User Name</div>
                      <div className="text-sm text-gray-500">2 hours ago</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Just made the most amazing homemade pizza! 🍕 The secret is in the dough - let it rise for at least 24 hours for that perfect crust. Who wants the recipe?</p>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-center gap-4">
                    <Button size="sm" variant="ghost">
                      <Heart className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button size="sm" variant="ghost">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Comment
                    </Button>
                    <div className="ml-auto text-sm text-gray-500">15 likes • 3 comments</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="border-l">
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="font-semibold">Community</div>
          <Button size="icon" variant="ghost">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
        </div>
        <div className="flex flex-col">
          {/* Rewards Section */}
          <div className="border-b p-4">
            <h3 className="mb-4 font-semibold">Your Rewards</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪙</span>
                <div>
                  <div className="font-semibold">Gold Coins</div>
                  <div className="text-sm text-gray-500">1,234</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div>
                  <div className="font-semibold">Points</div>
                  <div className="text-sm text-gray-500">5,678</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="border-b p-4">
            <div className="mb-4 flex items-center gap-2">
              <Crown className="h-4 w-4 text-yellow-500" />
              <h3 className="font-semibold">Event Attendance Leaders</h3>
            </div>
            <ScrollArea className="h-48">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="font-bold text-gray-500">{i}</div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt={`User ${i}`} src="/placeholder.svg" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold">User Name</div>
                      <div className="text-sm text-gray-500">{20 - i} events</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Messages Section */}
          <div className="flex-1 p-4">
            <h3 className="mb-4 font-semibold">Messages</h3>
            <ScrollArea className="h-[calc(100vh-400px)]">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt={`User ${i}`} src="/placeholder.svg" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold">User Name</div>
                        <div className="text-xs text-gray-500">2m ago</div>
                      </div>
                      <div className="text-sm text-gray-500">Latest message preview...</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator className="my-4" />
            <form className="flex gap-2">
              <Input placeholder="Type a message..." />
              <Button>Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}