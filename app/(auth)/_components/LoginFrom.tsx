"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { loginAction } from "../_actions/authActions"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

export default function LoginFrom() {
  const [state,action,pending]=useActionState(loginAction,false)
  useEffect(()=>{
    if (!state) return ;
if(state.success){
  toast.success(state.message || "login successfully !!")
}if (!state.success) {
  toast.error(state.message|| "login failed")
}
  },[state])

  
  return (
   <form action={action}>
    <Card className="p-6 space-y-6">
        <Input name="email"type="email" placeholder="example@mail.com" required ></Input>
        <Input name="password" type="password" placeholder="......" required></Input>
        <Button type="submit">Login</Button>
    </Card>
   </form>
  )
}
