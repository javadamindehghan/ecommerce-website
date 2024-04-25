import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">ارزان ترین فروشگاه  کفش  ولباس در ایران!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
        از دیدنت خیلی خوشحالیم! ما برای همه مشتری‌های جدید یه هدیه ویژه در نظر گرفتیم. دوست داری همین الان هدیه‌‌ت رو بگیری؟
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">فروشگاه</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero