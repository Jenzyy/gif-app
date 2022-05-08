const GitExpertApp = () => {
    const categories = ['One Punch', 'Jenzy', 'Juan']
    return (
        <>
            <h2>
                hola mundo
            </h2>
            {
                categories.map(category => {
                    return <li>{category}</li>
                })
            }
        </>
    )

}
export default GitExpertApp;