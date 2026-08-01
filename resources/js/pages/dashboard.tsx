import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
//import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';
import { useForm } from '@inertiajs/react';

export default function Dashboard() {
    const form = useForm({
        name: '',
        model: '',
        year: '',
        price: '',
        color: '',
    });
    function submit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        form.post('/cars', {
            onSuccess: () => {
                form.reset();
            },
        });
    }
    return (
        <>
            <Head title="Archie" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div>
                <h1 className="text-xl font-semibold"> Car Dealership Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                    Add a new car
                </p>
                </div>
                <form onSubmit={submit} className="max-w-xl space-y-4 rounded-xl border p-4">
                    <div className="space-y-2">
                        <label htmlFor="name">Brand Name</label>
                        <Input id="name" value={form.data.name} 
                        onChange={(event) => form.setData('name', event.target.value)} />
                        {form.errors.name && <p className="text-sm text-red-600 :text-red-400">{form.errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="model">Model</label>
                        <Input id="model" value={form.data.model}
                        onChange={(event) => form.setData('model', event.target.value)} />
                        {form.errors.model && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.model}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="year">Year</label>
                        <Input id="year" value={form.data.year}
                        onChange={(event) => form.setData('year', event.target.value)} />
                        {form.errors.year && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.year}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="price">Price</label>
                        <Input id="price" value={form.data.price}
                        onChange={(event) => form.setData('price', event.target.value)} />
                        {form.errors.price && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.price}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="color">Color</label>
                        <Input id="color" value={form.data.color}
                        onChange={(event) => form.setData('color', event.target.value)} />
                        {form.errors.color && <p className="text-sm text-red-600 dark:text-red-400">{form.errors.color}</p>}
                    </div>
                        
                    <Button type="submit">Save Car</Button>
                </form> 
                </div>
            {/* <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
