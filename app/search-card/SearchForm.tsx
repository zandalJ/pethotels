"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const petArray = ["dog", "cat"];

const formSchema = z.object({
	location: z.string().min(1, {
		message: "Field required",
	}),
	petType: z
		.string()
		.refine(value => petArray.includes(value), { message: "Invalid pet type" }),
	date: z
		.date()
		.refine(value => value > new Date(), { message: "Invalid date" }),
});

const SearchForm = () => {
	const [date, setDate] = useState<Date>();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			location: "",
			petType: "",
			date: new Date(),
		},
	});

	const submitHandler = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitHandler)}>
				<FormField
					control={form.control}
					name='location'
					render={({ field }) => (
						<FormItem className='mb-4'>
							<FormLabel>Lokalitet</FormLabel>
							<FormControl>
								<Input placeholder='Angi sted' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='petType'
					render={({ field }) => (
						<FormItem className='mb-4'>
							<FormLabel>Til hvem</FormLabel>
							<FormControl>
								<Select {...field}>
									<SelectTrigger>
										<SelectValue placeholder='Velg type dyr' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='dog'>hund</SelectItem>
										<SelectItem value='cat'>katt</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='location'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Hvornår</FormLabel>
							<FormControl {...field}>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn(
												"w-full justify-start text-left font-normal",
												!date && "text-muted-foreground"
											)}>
											{date ? format(date, "PPP") : <span>Vælg en dato</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0'>
										<Calendar
											mode='single'
											selected={date}
											onSelect={setDate}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

export default SearchForm;
