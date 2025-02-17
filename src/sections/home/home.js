import { Swiper, SwiperSlide } from 'swiper/react';
import './home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

import mitra1 from '../../assets/mitra1.png'
import mitra2 from '../../assets/mitra2.png'
import mitra3 from '../../assets/mitra3.png'
import mitra4 from '../../assets/mitra4.png'
import mitra5 from '../../assets/mitra5.png'

export default function Home(){
    return (
        <div id='home' className="home">
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false, 
            }}
            modules={[EffectCoverflow, Pagination,  Autoplay]}
            className='swiper-ctn'>
                <SwiperSlide className='slider'>
                <img className='img-slide' src={img1} alt='img1'/>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <img className='img-slide' src={img2} alt='img2'/>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <img className='img-slide' src={img3} alt='img3'/>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <img className='img-slide' src={img4} alt='img4'/>
                </SwiperSlide>
            </Swiper>
            <div className='desc'>
                <h1>Tentang Kami</h1>
                <p>
                    Sebagai perusahaan jasa kontruksi PT. Adi Joyo Kusumo berpengalaman mengerjakan berbagai proyek
                    jalan nasional dan provinsi di Indonesia serta memproduksi perlengkapan alat rambu lalu lintas ATCS
                    (Area Traffic Controll System). Berkompeten menangani berbagai lingkup pekerjaan, antara lain: Pemasangan
                    lampu jalan; Pengecatan marka jalan; Pemasangan rambu jalan; Pemasangan traffic light & warning light;
                    Pemasangan guardrill; Pemasangann paku jalan; Pembuatan rambu-rambu jalan; Pembuatan lampu traffic light; 
                    Pembuatan lampu warning light.
                </p>
                <h1>Mitra :</h1>
                <div className='mitra'>
                    <img src={mitra1} width={30} height={30} alt='mitra1'/>
                    <img src={mitra2} width={30} height={30} alt='mitra2'/>
                    <img src={mitra3} width={30} height={30} alt='mitra3'/>
                    <img src={mitra4} width={30} height={30} alt='mitra4'/>
                    <img src={mitra5} width={30} height={30} alt='mitra5'/>
                </div>
            </div>
        </div>
    )
}