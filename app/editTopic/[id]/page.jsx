
import EditTopicForm from "@/components/EditTopicForm"

const EditTopic = ({ params }) => {
    const { id } = params

    const getTopic = async (id) => {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method: "GET"
        })


        if (res.ok) {
            router.refresh()
        }

    }

    console.log(id)
    return (
        <EditTopicForm />
    )
}

export default EditTopic