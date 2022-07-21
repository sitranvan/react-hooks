
function Comment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson ${id}`
            })
        )
    }, 2000);
}

export default Comment