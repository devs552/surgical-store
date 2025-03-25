import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Users, Smartphone, MessageSquare } from "lucide-react"
import { accessories, users, contactMessages } from "@/lib/data"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Surgical Item</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accessories.length}</div>
            <p className="text-xs text-muted-foreground">+{Math.floor(Math.random() * 10)}% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">+{Math.floor(Math.random() * 15)}% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactMessages.length}</div>
            <p className="text-xs text-muted-foreground">+{Math.floor(Math.random() * 20)}% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted-foreground">+{Math.floor(Math.random() * 18)}% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="accessories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="accessories">Recent Surfical Items</TabsTrigger>
          <TabsTrigger value="users">Recent Users</TabsTrigger>
          <TabsTrigger value="messages">Recent Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="accessories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Added Surgical Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {accessories.slice(0, 5).map((accessory) => (
                  <div key={accessory.id} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center">
                        <Smartphone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{accessory.name}</p>
                        <p className="text-sm text-muted-foreground">${accessory.price}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Stock: {accessory.stock}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recently Registered Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {users.slice(0, 5).map((user) => (
                  <div key={user.id} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">Joined: {user.joinDate}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Contact Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {contactMessages.slice(0, 5).map((message) => (
                  <div key={message.id} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{message.name}</p>
                        <p className="text-sm text-muted-foreground">{message.subject}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{message.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

