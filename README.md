# REACT-BASIC-PRO

[简体中文](#简体中文) | [English](#english)

---

## 简体中文

### 🔗 **项目简介**
`REACT-BASIC-PRO` 是一个 React 学习项目，展示了我在学习 React 基础过程中所完成的一些功能和代码实践。通过本项目，我熟悉了 React 的核心概念和开发流程，例如：

- 使用 `create-react-app` 创建 React 项目。
- 使用 React 的 `useState` 管理组件状态。
- 动态渲染和条件渲染。
- 基于用户交互更新界面。
- 利用第三方库（如 Lodash 和 classnames）优化代码逻辑。

---

### 🔄 **项目功能展示**

#### 🔹 1. **动态评论功能**
- **功能描述**：实现用户可以删除自己的评论，其他用户无权操作。
- **技术点**：
  - 使用 `useState` 管理评论列表。
  - 通过条件渲染控制删除按钮的显示。
  - 在点击删除按钮时，更新评论列表。
- **核心代码**：

```jsx
{/* 删除当前登录用户的评论 */}
{user.uid === item.user.uid && (
    <span
        className="delete-btn"
        onClick={() => deleteComment(item.rpid)}
    >
        删除评论
    </span>
)}
```

#### 🔹 2. **选项卡导航切换功能**
- **功能描述**：实现页面选项卡的动态高亮切换，同时根据选项更新页面内容。
- **技术点**：
  - 使用 `useState` 记录当前选中标签的类型。
  - 使用 `classnames` 动态设置高亮类名。
  - 通过点击事件触发状态更新。
- **核心代码**：

```jsx
<li className="nav-sort">
    {/* 动态渲染选项卡 */}
    {tabs.map((item) => (
        <span
            key={item.type}
            onClick={() => handleTabChange(item.type)}
            className={classNames('nav-item', { active: type === item.type })}
        >
            {item.text}
        </span>
    ))}
</li>
```

#### 🔹 3. **评论排序功能**
- **功能描述**：根据用户选择的排序规则（如按点赞数、按创建时间）动态更新评论列表。
- **技术点**：
  - 使用 Lodash 的 `_.orderBy` 方法对数据进行排序。
  - 根据选项卡切换的类型动态改变排序逻辑。
- **核心代码**：

```jsx
const handleTabChange = (type) => {
    setType(type); // 更新当前类型

    if (type === 'hot') {
        setCommentsList(_.orderBy(commentsList, ['like'], ['desc'])); // 按热度排序
    } else {
        setCommentsList(_.orderBy(commentsList, ['ctime'], ['desc'])); // 按时间排序
    }
};
```

---

### 🛠️ **技术栈**
- **React**：前端框架，负责构建用户界面。
- **Lodash**：处理数据排序和其他实用功能（[官网](https://lodash.com)）。
- **classnames**：简化动态类名管理（[官网](https://www.npmjs.com/package/classnames)）。
- **CSS**：实现选项卡高亮和其他基本样式。

---

### 📦 **依赖安装**

在项目开发中，使用了 Lodash 和 classnames 两个主要的第三方库：

1. **Lodash**：Lodash 是一个强大的工具库，用于处理数组、对象和其他数据操作。具体安装方式如下：

```bash
npm i --save lodash
```

2. **classnames**：用于动态管理类名，安装方式如下：

```bash
npm install classnames
```

---

### 🚀 **项目运行步骤**

1. 克隆项目到本地：

```bash
git clone https://github.com/yourusername/REACT-BASIC-PRO.git
```

2. 创建 React 项目：

```bash
npx create-react-app react-basic
```

3. 安装 Web Vitals 依赖：

```bash
npm install web-vitals
```

4. 安装 Lodash 库：

```bash
npm i --save lodash
```

5. 安装 Classnames 库：

```bash
npm install classnames
```

6. 启动开发服务器：

```bash
npm start
```

---

### 🎨 **未来优化方向**
- 增加评论的分页加载功能。
- 实现更复杂的状态管理（如使用 Redux 或 Context）。
- 增加测试用例，保证功能的稳定性。
- 使用 TypeScript 改进代码的类型安全。

---

## English

### 🔗 **Introduction**
`REACT-BASIC-PRO` is a React learning project demonstrating the features and code practices I completed while learning React basics. Through this project, I became familiar with React's core concepts and development processes, such as:

- Creating a React project with `create-react-app`.
- Managing component state using React's `useState`.
- Dynamic rendering and conditional rendering.
- Updating the interface based on user interaction.
- Using third-party libraries like Lodash and classnames to optimize code logic.

---

### 🔄 **Features**

#### 🔹 1. **Dynamic Comment Feature**
- **Description**: Users can delete their own comments, while other users cannot.
- **Technical Highlights**:
  - Used `useState` to manage the comment list.
  - Controlled the visibility of the delete button with conditional rendering.
  - Updated the comment list when the delete button is clicked.
- **Key Code**:

```jsx
{/* Delete comments from the current logged-in user */}
{user.uid === item.user.uid && (
    <span
        className="delete-btn"
        onClick={() => deleteComment(item.rpid)}
    >
        Delete Comment
    </span>
)}
```

#### 🔹 2. **Tab Navigation Switching**
- **Description**: Implements dynamic tab highlighting and updates page content based on the selected tab.
- **Technical Highlights**:
  - Used `useState` to track the currently selected tab type.
  - Used `classnames` to dynamically set the active class.
  - Triggered state updates through click events.
- **Key Code**:

```jsx
<li className="nav-sort">
    {/* Dynamically render tabs */}
    {tabs.map((item) => (
        <span
            key={item.type}
            onClick={() => handleTabChange(item.type)}
            className={classNames('nav-item', { active: type === item.type })}
        >
            {item.text}
        </span>
    ))}
</li>
```

#### 🔹 3. **Comment Sorting Feature**
- **Description**: Dynamically updates the comment list based on the user's selected sorting rule (e.g., by likes, by creation time).
- **Technical Highlights**:
  - Used Lodash's `_.orderBy` method to sort data.
  - Changed the sorting logic dynamically based on the selected tab type.
- **Key Code**:

```jsx
const handleTabChange = (type) => {
    setType(type); // Update the current type

    if (type === 'hot') {
        setCommentsList(_.orderBy(commentsList, ['like'], ['desc'])); // Sort by likes
    } else {
        setCommentsList(_.orderBy(commentsList, ['ctime'], ['desc'])); // Sort by creation time
    }
};
```

---

### 🛠️ **Tech Stack**
- **React**: Frontend framework for building user interfaces.
- **Lodash**: A utility library for data manipulation ([official site](https://lodash.com)).
- **classnames**: Simplifies dynamic class name management ([official site](https://www.npmjs.com/package/classnames)).
- **CSS**: For implementing tab highlighting and other basic styles.

---

### 📦 **Dependency Installation**

In this project, the Lodash and classnames libraries are used as major third-party dependencies:

1. **Lodash**: A powerful utility library for handling arrays, objects, and other data operations. Install it as follows:

```bash
npm i --save lodash
```

2. **classnames**: Used for dynamic class name management. Install it as follows:

```bash
npm install classnames
```

---

### 🚀 **Getting Started**

1. Clone the project locally:

```bash
git clone https://github.com/yourusername/REACT-BASIC-PRO.git
```

2. Create a React project:

```bash
npx create-react-app react-basic
```

3. Install the Web Vitals dependency:

```bash
npm install web-vitals
```

4. Install Lodash:

```bash
npm i --save lodash
```

5. Install Classnames:

```bash
npm install classnames
```

6. Start the development server:

```bash
npm start
```

---

### 🎨 **Future Optimization**
- Add pagination for loading comments.
- Implement more complex state management (e.g., using Redux or Context).
- Add test cases to ensure functionality stability.
- Use TypeScript to improve type safety.

---
