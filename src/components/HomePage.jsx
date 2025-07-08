import homeBanner from '../../images/iteration-1-images/home-banner.png';


export default function HomePage({ onStartOrder }) {


    return (
      <div className="homepage-bg">
        <div className="homepage-content">
            <p className="homepage-title">Teknolojik Yemekler</p>
            <p className="homepage-slogan">KOD ACIKTIRIR<br />PİZZA, DOYURUR</p>
            <button className="homepage-btn" onClick={onStartOrder}>ACIKTIM</button>
        </div>
      <img className="homepage-banner" src={homeBanner} alt="Pizza Banner" />
    </div>


    )
}