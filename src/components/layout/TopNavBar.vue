<script setup lang="ts">
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
    <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
        <form class="search-box w-full h-fit max-w-96 relative">
            <iconify-icon icon="lucide:search" class="absolute top-[50%] translate-y-[-50%] left-2.5"></iconify-icon>
            <Input id="search" name="search" class="search-box__input w-full pl-8 bg-background" type="search" placeholder="Search..." />
        </form>

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </nav>
</template>