"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Trash2, Eye } from "lucide-react"
import { contactMessages as initialMessages } from "@/lib/data"

export default function AdminContactMessages() {
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message)
    setIsViewDialogOpen(true)
  }

  const handleDeleteMessage = (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages((prev) => prev.filter((message) => message.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact Messages</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{message.subject}</CardTitle>
                  <CardDescription>
                    {message.name} • {message.date}
                  </CardDescription>
                </div>
                <Badge variant={message.status === "New" ? "default" : "outline"}>{message.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{message.message}</p>
              <div className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => handleViewMessage(message)}>
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteMessage(message.id)}>
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{selectedMessage?.name}</p>
                <p className="text-sm text-muted-foreground">{selectedMessage?.email}</p>
              </div>
              <p className="text-sm text-muted-foreground">{selectedMessage?.date}</p>
            </div>

            <div className="py-2">
              <p className="whitespace-pre-line">{selectedMessage?.message}</p>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button onClick={() => setIsViewDialogOpen(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

