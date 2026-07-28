"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { loginAction } from "../_actions/authActions"

export default function LoginFrom() {
  return (
   <form action={loginAction}>
    <Card className="p-6 space-y-6">
        <Input name="email"type="email" placeholder="example@mail.com" required ></Input>
        <Input name="password" type="password" placeholder="......" required></Input>
        <Button type="submit">Login</Button>
    </Card>
   </form>
  )
}
