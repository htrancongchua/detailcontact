import img from '../assests/imgs/img1.jpg'
const Detail = () => {
    return (
        <div className="container-detail">
            <div className="detail-nav ">
                Ưu Đãi / Combo Happy Meal 65K
            </div>
            <div className="container">
                <div className="detail-img">
                    <img src={img} />
                </div>
                <div className="detail-content">
                    <div className="detail-box">
                        <h1 className="detail-title">COMBO HAPPY MEAL 65K</h1>
                        <div className="detail-des">02 Miếng Gà Rán + 1 lon Pepsi</div>
                        <div className="btn-add">Thêm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;