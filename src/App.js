import React, { useState } from 'react';
import './App.scss'
import avatar from './images/bozai.png'
import { type } from '@testing-library/user-event/dist/type';
import _ from 'lodash'
import classNames from 'classnames';

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const List = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 99,
  },
  
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {
    // 渲染评论列表
  // 使用useState去维护List
const [commentsList, setCommentsList] = useState(_.orderBy(List, ['like'], ['desc'])
);


  //定义一个名为deleteComment的变量，与175行 删除评论的按钮所使用
const deleteComment=(id)=>{ 
  console.log(id)
    //对commentList做过滤处理
    setCommentsList(commentsList.filter(item => item .rpid != id))
  }

 //点击什么就把什么type记录下来
//通过我们记录的Type和每一个项遍历时的Type做一个匹配 控制激活类名的显示

const [type , setType] = useState('hot');

const handleTabChange=(type)=>{
    console.log(type)
    setType(type)
    //基于列表的排序
    //
    if(type==='hot'){
      //setCommentsList(_.orderBy(commentsList, 'like', 'desc'))
      setCommentsList(_.orderBy(commentsList, ['like'], ['desc'])
    )
    }else{
      //根据创建的时间进行排序
      setCommentsList(_.orderBy(commentsList, 'ctime', 'desc'))
      }
  }
  // const handleDel=(id)=>{
  //   console.log(id)
  // }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
      

        
          <li className="nav-sort">
           {/* 高亮类名：active */}
        {tabs.map(item => (
      <span
          key={item.type}
          onClick={() => handleTabChange(item.type)}
         // className={`nav-item ${type === item.type && 'active'}`}
        //className={classNames('nav-item', { active, 'type-active': type === item.type })}
          className={classNames('nav-item',{active: type === item.type})}
         >{item.text}
      </span>
            ))}
            </li>
         </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">

            <div className="bili-avatar">

              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">
                发布
              </div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list" >

          {/* 评论项 */}
          {commentsList.map(item=>(
                    <div key={item.rpid} className="reply-item">
                    {/* 头像 */}
                    <div className="root-reply-avatar">
                      <div className="bili-avatar">
                        <img
                          className="bili-avatar-img"
                          alt=""
                          src={item.user.avatar || avatar} // 如果用户没有头像，则使用默认头像
                        />
                      </div>
                    </div>
        

                    <div className="content-wrap">
                      {/* 用户名 */}
                      <div className="user-info">
                        <div className="user-name">
                          {item.user.uname}
                        </div>
                      </div>

                      {/* 评论内容 */}
                      <div className="root-reply">
                        <span className="reply-content">
                          评论内容:{item.content}
                          </span>
                        <div className="reply-info">
                          
                          {/* 评论时间 */}
                          <span className="reply-time">
                            评论时间:{item.ctime}
                          </span>
                          
                          {/* 评论数量 */}
                          <span className="reply-time">
                            点赞数:{item.like}
                            </span>
                          
                          {/* 删除当前登录用户的评论 */}
                          {/* 条件user.uid === item.user.uid */}
                          {user.uid === item.user.uid && 
                              //<span className="delete-btn" onClick={() => deleteComment(item.rpid)} >
                              <span className="delete-btn" onClick={() => deleteComment(item.rpid)} >
                              删除评论
                              </span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
        </div>
      </div>
    </div>
  )
}

export default App