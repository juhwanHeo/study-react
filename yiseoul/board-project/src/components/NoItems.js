function NoItems({headerItems}) {
    return (
        <tr>
            <td colSpan={headerItems?.length} style={{textAlign: 'center'}}>
                No Contents...
            </td>
        </tr>
    )
}

export default NoItems;