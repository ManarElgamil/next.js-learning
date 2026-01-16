import {db} from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps{
    params: Promise<{
        id:string
    }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps){

    const parameters = await props.params;
    const id = parseInt(parameters.id);
    
    const snippet = await db.snippet.findFirst({
        where: {id:id}
    });

    if (!snippet){
        return notFound();
    }

    //allow users to actually edit the data 
    //use React Monaco Editor

    //update, save information

    //display new data?
    return <div>
        Deleting snippet with id {snippet?.title}
    </div>
}