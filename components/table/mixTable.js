import React from 'react'
import { Table, Tag, Space, Popover, Button } from 'antd';
import JulChart from "../stockIndex/ShanghaiIndex/year2020/Jul";
import TabsComp from "../tabsComp/tabsComp";


// const PopoverNode = () => {
//     return(
//         <Popover content={<TabsComp><JulChart /><JulChart /></TabsComp>} title="Title" trigger="click">
//             <Button type="primary">Hover me</Button>
//         </Popover>
//     )
// }
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         render: text => <a>{text}</a>,
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: 'Tags',
//         key: 'tags',
//         dataIndex: 'tags',
//         render: tags => (
//             <>
//                 {tags.map(tag => {
//                     let color = tag.length > 5 ? 'geekblue' : 'green';
//                     if (tag === 'loser') {
//                         color = 'volcano';
//                     }
//                     return (
//                         <Tag color={color} key={tag}>
//                             {tag.toUpperCase()}
//                         </Tag>
//                     );
//                 })}
//             </>
//         ),
//     },
//     {
//         title: 'Action',
//         key: 'action',
//         render: PopoverNode
//     },
// ];



// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

class MixTable extends React.Component {

    render() {
        const {data, columns} = this.props
        console.log(this.props)
        return(
            <Table columns={columns} dataSource={data} />
        )
    }
}


export default MixTable