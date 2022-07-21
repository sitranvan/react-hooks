
import React, { useEffect, useState } from 'react'

/** Lưu ý
    - Side effects tạo ra sự thay dữ liệu bên cạnh hoạt động chính
    - Callback luôn được gọ sau khi component re-render
    - Nếu có [desp] callback sẽ được gọi lại khi [desp] thay đổi
    - Cleanup function luôn được gọi trước khi component bị unmounted
 */
function ExUseEffect() {
    const [countDownn, setCountdown] = useState(180)
    //  setTimeout, setInterval timer function
    // Sai số bị nhấp nháy liên tục mỗi lần setInterval thì setState re-render, mỗi lần re-render nó lại chạy setInterval mới
    // lưu ý setInterval chỉ cần chạy 1 lần là chạy vô hạn, chỉ dừng khi clean hay tắt chương trình bỏ, cứ mỗi lần re-render
    // thì lại setInterval càng về sau càng có nhiều setInterval chạy song song với nhau mỗi setInterval lệch nhau một ít 
    // nhiều ông cùng setInterval nên xảy ra tình trạng nhấp nhấp
    // setInterval(() => {
    //     setCountdown(countDownn - 1)
    // }, 1000);

    // Chỉ xét về 179 chỉ chạy 1 lần, trong khi đó setInterval vẫn chạy điều đặn 1s 1 lần
    // đây là closure hàm đóng, callback useEffect chạy duy nhất 1 lần khi component mounted, lúc đó countDown là 180
    // lúc này biến countDown trong setInterval sẽ tham chiếu ra bên ngoài, mặc dù setInterval chạy vô hạn nhưng nó nằm trong
    // phạm vi callback của useEffect nên chỉ chạy 1 lần  180-1=179
    // useEffect(() => {
    //     setInterval(() => {
    //         setCountdown(countDownn - 1)
    //     }, 1000);
    // }, [])

    // Khắc phục truyền callback lấy giá trị trước đó, lập tức trong hàm không có biến nào tham chiếu ngoài nữa
    useEffect(() => {
        const timerID = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000);
        // Khi setInterval, setTimeout thì nó đã đưa listen event vào phạm vi window vì vậy
        // Cần cleanup khi unmounted để tránh tình trạng memory leak
        return () => {
            clearInterval(timerID)
        }
    }, [])

    // Cách 2 dùng setTimeout
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countDownn - 1)
    //     }, 1000);
    // }, [countDownn])
    return (
        <h1>{countDownn}</h1>
    )
}

export default ExUseEffect

/** Update DOM useEffect(callback)
    Tại sao viết bên trong useEffect trong khi đó viết bên ngoài vẫn hoạt động tương tự ?
    1. Thuộc dạng side effects , useEffect sinh ra để xử lí side effect
    2. Nếu viết bên ngoài thì nó sẽ thực thi trước sau đó mới re-render, nếu logic phức tạp hoặc sinh ra vấn đề chặn re-render
    giao diện người dùng thì sẽ bị trễ re-render => vì vậy đưa vào useEffect chúng ta cần ưu tiên luồng chính là re-render UI
    useEffect(() => {
        document.title = title
    })
*/

/** CallAPI với useEffect(callback,[]) => chỉ gọi 1 lần
    * Nếu viết bên ngoài mỗi lần component re-render API sẽ được gọi lại không cần thiết
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => console.log(posts))

    * TH2 nếu viết như vậy thì nó sẽ setState và re - render sau đó gọi callback callAPI => setState => re - render ...=> Tạo ra vòng lặp vô hạn gọi API liên tục
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                 setDatas(posts)
            })
    })
    * Khắc phục useEffect(callback, []) sử dụng empty array nó sẽ gọi 1 lần duy nhất
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setDatas(posts)
            })
    }, [])
*/

/** useEffect(callback, [desp]), [desp] là 1 biến chứa dữ liệu, callback chỉ được gọi khi[desp] thay đổi
const [type, setType] = useState('posts')
const tabs = ['posts', 'comments', 'albums']
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setDatas(posts)
        })
}, [type])
return (
    <div>
        <h1>Hello</h1>
        {tabs.map(tab =>
            <button key={tab}
                style={tab === type ? { backgroundColor: '#333', color: '#fff' } : {}}
                onClick={() => setType(tab)}
            >
                {tab}
            </button>)}
        <input
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <ul>
            {datas.map(data => (
                <li key={data.id}>{data.title || data.name}</li>
            ))}
        </ul>
    </div>
)
*/

/** Listen DOM event vì event chỉ cần add 1 lần => useEffect(callback,[])
     useEffect(() => {
     const handleScroll = () => {
        if (window.scrollY >= 300) {
            // setState nhưng không re-render component react nó sử dụng phép so sánh === nó thấy giá trị được xét vào
            // khác với giá trị trước đó mới re-render component 
            setShowTop(true)
        } else {
            setShowTop(false)
        }
    }
    * Chúng ta đang listen event phạm vi window, khi unmounted nó không gỡ bỏ mà lưu vào trong bộ nhớ nó chỉ biến mất khi tắt
    trình duyệt hoặc tắt tab, vì vậy trong bộ nhớ luôn tồn tại event mà chúng ta không bao giờ sử dụng lại, khi chúng ta 
    mounted lại thì nó sẽ tạo ra một đối tượng hoàn toàn mới => tạo ra memory leak rò rỉ bộ nhớ
    window.addEventListener('scroll', handleScroll)
    console.log('-> Add Event')

    * Trong callback useEffect chúng ta return ra function nó được gọi là cleanup function
    return () => {
        console.log('-> Remove Event')
        // window.removeEventListener('scroll', handleScroll)
    }
}, [])
return (
    <div>
        <h1>Hello</h1>
        <input
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <ul>
            {datas.map(data => (
                <li key={data.id}>{data.title || data.name}</li>
            ))}
        </ul>
        {showTop && <button style={{ position: 'fixed', bottom: 20, right: 20 }}>Scroll Top</button>}
    </div>
)
*/

