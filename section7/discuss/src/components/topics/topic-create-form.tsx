'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    Textarea,
    Button,
    Input

} from '@nextui-org/react';
import * as actions from '@/actions';
import { useActionState, startTransition } from 'react';
export default function TopicCreateForm(){

    // 
    const [formState, action] = useActionState(actions.createTopic, {
        errors: {}
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        startTransition(() => {
            action(formData);
        })
    }

    return (
        <Popover placement='left'>
            <PopoverTrigger color="primary">
                Create a Topic
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a Topic</h3>
                        <Input 
                        name="name"
                        label="Name" labelPlacement="outside" placeholder="Name" />
                        <Textarea label="Description" 
                        name='description'
                        labelPlacement="outside"
                        placeholder="Describe your topic" />
                        <Button type='submit'>Submit</Button>
                    </div>
                    
                </form>
            </PopoverContent>
        </Popover>
    );
}