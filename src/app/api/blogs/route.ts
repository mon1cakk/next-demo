export async function GET() {
    const list = [
        { id: 1, title: 'Blog 1', content: 'Content 1' },
        { id: 2, title: 'Blog 2', content: 'Content 2' },
        { id: 3, title: 'Blog 3', content: 'Content 3' }
    ]
    return Response.json({ list })
}