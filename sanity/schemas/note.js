export default {
    name: 'note',
    title: 'Note',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Date',
            name: 'date',
            type: 'datetime',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            title: 'Categories',
            name: 'Categories',
            type: 'array',
             of: [{ type: 'string'}],
             options: {
                 layout: 'tags',
             }
        },
        {
            title: 'Excerpt',
            name: 'excerpt',
            type: 'text',
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                { type: 'block' }
            ]
        }
    ]
}