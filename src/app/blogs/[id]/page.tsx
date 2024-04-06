// 服务端组件，在 node 服务端环境执行（无法在客户端浏览器执行）

// 模拟从数据库获取博客详情
async function MockGetBlogDetailFromDataBase(id: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          title: `博客标题${id}`,
          content: '博客详情 博客详情 博客详情',
        })
      }, 1000)
    })
  }
  
  export default async function OneBlog({ params }: { params: { id: string } }) {
    const blog = (await MockGetBlogDetailFromDataBase(params.id)) as any
  
    return (
      <div>
        <h1 className="text-3xl">{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    )
  }
  