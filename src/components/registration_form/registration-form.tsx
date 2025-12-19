"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Users, Shield, Smartphone, Server, MapPin, Hash, UserCircle, Phone } from "lucide-react";


const memberSchema = z.object({
    name: z.string().min(2, "Min 2 chars"),
    ign: z.string().min(2, "Min 2 chars"),
    game_id: z.string().min(5, "Required"),
    server_id: z.string().min(2, "Required"),
    device_name: z.string().min(2, "Required"),
    role: z.string(),
    phone: z.string().optional(), // Made optional in base schema, refined later
});

const formSchema = z.object({
    university_name: z.string().min(2, "Required"),
    university_city: z.string().min(2, "Required"),
    university_state: z.string().min(2, "Required"),
    // university_logo: z.instanceof(File).optional(), // File input is tricky with simple Zod, using any or skipping validation for now for UI demo

    team_name: z.string().min(2, "Required"),

    // Fixed array structure for simplified UI handling as per requirement
    members: z.array(memberSchema).refine((items) => {
        // Validate Captain Phone
        if (!items[0].phone || items[0].phone.length < 10) return false;
        return true;
    }, {
        message: "Invalid Phone",
        path: ["0", "phone"] // Attempt to attach error to first item
    }).refine((items) => {
        // Validate Manager Phone if Manager exists (index 6, which is 7th item)
        // Note: The prompt says Manager is 7th. Captain(1) + 4 Members(2-5) + Sub(6) + Manager(7)
        if (items[6] && items[6].name && (!items[6].phone || items[6].phone.length < 10)) {
            return false;
        }
        return true;
    }, {
        message: "Invalid Phone",
        path: ["6", "phone"]
    })
});

type FormValues = z.infer<typeof formSchema>;

// Default values to pre-populate the structure
const defaultValues: FormValues = {
    university_name: "",
    university_city: "",
    university_state: "",
    team_name: "",
    members: [
        { role: "Captain", name: "", ign: "", game_id: "", server_id: "", device_name: "", phone: "" },
        { role: "Member", name: "", ign: "", game_id: "", server_id: "", device_name: "" },
        { role: "Member", name: "", ign: "", game_id: "", server_id: "", device_name: "" },
        { role: "Member", name: "", ign: "", game_id: "", server_id: "", device_name: "" },
        { role: "Member", name: "", ign: "", game_id: "", server_id: "", device_name: "" },
        { role: "Substitute (Optional)", name: "", ign: "", game_id: "", server_id: "", device_name: "" },
        { role: "Manager (Optional)", name: "", ign: "", game_id: "", server_id: "", device_name: "", phone: "" },
    ]
};

export function RegistrationForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
        mode: "onBlur"
    });

    const { fields } = useFieldArray({
        control: form.control,
        name: "members"
    });

    function onSubmit(data: FormValues) {
        console.log(data);
        alert("Registration Submitted! (Check Console)");
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8 z-10 relative">
            <div className="text-center space-y-2 mb-10">
                <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 bg-emerald-500/10 px-4 py-1 text-sm uppercase tracking-widest backdrop-blur-sm">
                    Tournament Registration
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Join the <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">Battlefield</span>
                </h1>
                <p className="text-zinc-400 max-w-lg mx-auto">
                    Complete the form below to register your team. Ensure all details are accurate.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* SECTION 1: UNIVERSITY DETAILS */}
                    <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-purple-500 to-blue-500" />
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl text-white">
                                <MapPin className="mr-3 text-purple-500 h-6 w-6" />
                                University Details
                            </CardTitle>
                            <CardDescription>Represent your institution</CardDescription>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="university_name"
                                render={({ field }) => (
                                    <FormItem className="col-span-2 space-y-2">
                                        <FormLabel className="text-zinc-300">University Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                                <Input placeholder="Enter University Name" className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-100 focus:ring-purple-500/20 focus:border-purple-500/50" {...field} />
                                            </div>
                                        </FormControl>
                                        <div className="h-5">
                                            <FormMessage className="text-xs absolute" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="university_city"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-zinc-300">City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="City" className="bg-zinc-950/50 border-zinc-800 text-zinc-100 focus:ring-purple-500/20 focus:border-purple-500/50" {...field} />
                                        </FormControl>
                                        <div className="h-5">
                                            <FormMessage className="text-xs absolute" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="university_state"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-zinc-300">State</FormLabel>
                                        <FormControl>
                                            <Input placeholder="State" className="bg-zinc-950/50 border-zinc-800 text-zinc-100 focus:ring-purple-500/20 focus:border-purple-500/50" {...field} />
                                        </FormControl>
                                        <div className="h-5">
                                            <FormMessage className="text-xs absolute" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <div className="col-span-2">
                                <FormLabel className="text-zinc-300">University Logo</FormLabel>
                                <div className="mt-2 border-2 border-dashed border-zinc-700 hover:border-zinc-500 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-zinc-950/30">
                                    <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                                    <span className="text-sm text-zinc-400">Click to upload logo</span>
                                    <Input type="file" className="hidden" accept="image/*" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* SECTION 2: TEAM DETAILS */}
                    <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-blue-500 to-emerald-500" />
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl text-white">
                                <Shield className="mr-3 text-blue-500 h-6 w-6" />
                                Team Details
                            </CardTitle>
                            <CardDescription>Establish your squad identity</CardDescription>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="team_name"
                                render={({ field }) => (
                                    <FormItem className="col-span-2 space-y-2">
                                        <FormLabel className="text-zinc-300">Team Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Badge className="absolute left-3 top-3 h-4 w-4 p-0 bg-transparent text-zinc-500" variant="outline"><Shield className="h-4 w-4" /></Badge>
                                                <Input placeholder="Enter Team Name" className="pl-10 bg-zinc-950/50 border-zinc-800 text-zinc-100 focus:ring-blue-500/20 focus:border-blue-500/50" {...field} />
                                            </div>
                                        </FormControl>
                                        <div className="h-5">
                                            <FormMessage className="text-xs absolute" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <div className="col-span-2">
                                <FormLabel className="text-zinc-300">Team Logo</FormLabel>
                                <div className="mt-2 border-2 border-dashed border-zinc-700 hover:border-zinc-500 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-zinc-950/30">
                                    <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                                    <span className="text-sm text-zinc-400">Click to upload logo</span>
                                    <Input type="file" className="hidden" accept="image/*" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* SECTION 3: MEMBER DETAILS */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <Users className="mr-3 text-emerald-500 h-6 w-6" />
                                Team Roster
                            </h2>
                            <div className="h-px flex-1 bg-zinc-800 ml-6" />
                        </div>

                        {fields.map((field, index) => {
                            // Custom styling for Captain and Special roles
                            const isCaptain = index === 0;
                            const isSub = index === 5;
                            const isManager = index === 6;

                            let cardBorderColor = "border-zinc-800";
                            let roleColor = "text-zinc-400";
                            let icon = <UserCircle className="h-5 w-5 mr-2" />;

                            if (isCaptain) {
                                cardBorderColor = "border-amber-500/30";
                                roleColor = "text-amber-500";
                                icon = <Shield className="h-5 w-5 mr-2 text-amber-500" />;
                            } else if (isSub) {
                                roleColor = "text-blue-400";
                            } else if (isManager) {
                                roleColor = "text-purple-400";
                            }

                            return (
                                <Card key={field.id} className={`bg-zinc-900/30 backdrop-blur-sm ${cardBorderColor} shadow-lg transition-all hover:bg-zinc-900/50`}>
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className={`text-lg font-medium flex items-center ${roleColor}`}>
                                                {icon}
                                                {field.role}
                                            </CardTitle>
                                            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                                                Slot {index + 1}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                            {/* Name */}
                                            <FormField
                                                control={form.control}
                                                name={`members.${index}.name`}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs text-zinc-500 uppercase tracking-wider">Full Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Name" className="bg-zinc-950/50 border-zinc-800 h-9 text-sm text-zinc-100" {...field} />
                                                        </FormControl>
                                                        <div className="h-5 relative">
                                                            <FormMessage className="text-xs absolute" />
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Phone - Only for Captain and Manager */}
                                            {(isCaptain || isManager) && (
                                                <FormField
                                                    control={form.control}
                                                    name={`members.${index}.phone`}
                                                    render={({ field }) => (
                                                        <FormItem className="md:col-span-2 lg:col-span-1 space-y-2">
                                                            <FormLabel className="text-xs text-emerald-500 uppercase tracking-wider flex items-center">
                                                                <Phone className="h-3 w-3 mr-1" /> Phone
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+91..." className="bg-zinc-950/50 border-emerald-900/30 h-9 text-sm focus:border-emerald-500/50 text-zinc-100" {...field} />
                                                            </FormControl>
                                                            <div className="h-5 relative">
                                                                <FormMessage className="text-xs absolute" />
                                                            </div>
                                                        </FormItem>
                                                    )}
                                                />
                                            )}

                                            {/* Regular Game Fields */}
                                            <FormField
                                                control={form.control}
                                                name={`members.${index}.ign`}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs text-zinc-500 uppercase tracking-wider">In-Game Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="IGN" className="bg-zinc-950/50 border-zinc-800 h-9 text-sm text-zinc-100" {...field} />
                                                        </FormControl>
                                                        <div className="h-5 relative">
                                                            <FormMessage className="text-xs absolute" />
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name={`members.${index}.game_id`}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs text-zinc-500 uppercase tracking-wider">Game ID</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <Hash className="absolute left-2 top-2.5 h-3 w-3 text-zinc-600" />
                                                                <Input placeholder="ID" className="pl-6 bg-zinc-950/50 border-zinc-800 h-9 text-sm text-zinc-100" {...field} />
                                                            </div>
                                                        </FormControl>
                                                        <div className="h-5 relative">
                                                            <FormMessage className="text-xs absolute" />
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name={`members.${index}.server_id`}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs text-zinc-500 uppercase tracking-wider">Server ID</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <Server className="absolute left-2 top-2.5 h-3 w-3 text-zinc-600" />
                                                                <Input placeholder="Server" className="pl-6 bg-zinc-950/50 border-zinc-800 h-9 text-sm text-zinc-100" {...field} />
                                                            </div>
                                                        </FormControl>
                                                        <div className="h-5 relative">
                                                            <FormMessage className="text-xs absolute" />
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name={`members.${index}.device_name`}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-xs text-zinc-500 uppercase tracking-wider">Device</FormLabel>
                                                        <FormControl>
                                                            <div className="relative">
                                                                <Smartphone className="absolute left-2 top-2.5 h-3 w-3 text-zinc-600" />
                                                                <Input placeholder="Device Model" className="pl-6 bg-zinc-950/50 border-zinc-800 h-9 text-sm text-zinc-100" {...field} />
                                                            </div>
                                                        </FormControl>
                                                        <div className="h-5 relative">
                                                            <FormMessage className="text-xs absolute" />
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="flex justify-end pt-6">
                        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-emerald-900/20 transition-all hover:scale-105">
                            Submit Registration
                        </Button>
                    </div>
                </form >
            </Form >
        </div >
    );
}