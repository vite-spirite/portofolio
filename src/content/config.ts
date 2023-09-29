import {defineCollection, z} from 'astro:content';

const projects = defineCollection({
    schema: z.object({
        slug: z.string(),
        url: z.string().optional(),
        title: z.string(),
        description: z.string(),
        tags: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        createdAt: z.date(),
    })
});

const frontendMentor = defineCollection({
    schema: z.object({
        title: z.string(),
        preview: z.string(),
        live: z.string(),
        github: z.string(),
        frontendMentor: z.string(),
        tags: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    })
})

export const collection = {projects, frontendMentor}