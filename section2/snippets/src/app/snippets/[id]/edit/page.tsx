import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from "@/components/snippet-edit-form";
interface SnippetEditPageProps{
    params: Promise <{
        id:string
    }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps){
    const parameters = await props.params;
    const id = parseInt(parameters.id);

    const snippet = await db.snippet.findFirst({
        where: {id: id},
    });

    if(!snippet){
        return notFound();
    }

    // const editedSnippet = SnippetEditForm(snippet);

    return <div>
        Editing snippet with id {snippet?.title}
        <SnippetEditForm snippet={snippet} />
    </div>
}