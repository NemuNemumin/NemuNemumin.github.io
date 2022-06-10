// RenderListコンポーネントの作成
const RenderList = (props) => {
    return (<ul className="shiritori">
        {props.items.map((item) => <li>{item}</li>)}
    </ul>);
}
// RenderListコンポーネントの利用
const items = ['コアラ', 'ラッパ', 'パリ', 'りんご'];
<RenderList items={items} />