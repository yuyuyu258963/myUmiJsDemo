import styles from './index.less';
import {Button,Input} from 'antd'
import axios from 'axios';
import { useRef, useState } from 'react';



// export default function IndexPage(props: any) {
//   console.log(props)
//   const inputA = useRef(null);
//   const [title, titleText] = useState("这是一个title")
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//       <Button onClick={()=>{
//         axios({
//           method: 'get',
//           url: "/api/user"
//         }).then(response => {console.dir(response)})
//         console.dir(inputA.state.value)
        

//       }} >确定</Button>
//       <Input ref={inputA} style={{width:"200px"}} ></Input>
//       {
//         title
//       }
//     </div>
//   );
// }

import React, { Component } from 'react'
import { NavLink } from 'umi';

export default class IndexPage extends Component {
  inputA!: Input | null;
  render() {
    return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={()=>{
        axios({
          method: 'get',
          url: "http://localhost:8000/api/users"
        }).then(response => {console.dir(response.data.users);})
        console.dir((this.inputA as Input).state.value )
        

      }} >确定</Button>
      <Input ref={(A)=>this.inputA = A} style={{width:"200px"}} ></Input>
      <NavLink to="/demo" >Demo</NavLink>
    </div>
    )
  }
}

