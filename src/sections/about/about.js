import { Swiper, SwiperSlide } from 'swiper/react';
import './about.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import logoProfile from '../../assets/logo-ajk.png'

export default function About(){
    return(
        <div className="about">
            <div id='galeri'>
                <h1>Galeri Kami</h1>
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
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'>
                    <SwiperSlide className='sliders'>
                    <img className='slide-img' src={img1} alt='img1'/>
                    </SwiperSlide>
                    <SwiperSlide className='sliders'>
                    <img className='slide-img' src={img2} alt='img2'/>
                    </SwiperSlide>
                    <SwiperSlide className='sliders'>
                    <img className='slide-img' src={img3} alt='img3'/>
                    </SwiperSlide>
                    <SwiperSlide className='sliders'>
                    <img className='slide-img' src={img4} alt='img4'/>
                    </SwiperSlide>
                    <div className='slider-controll'>
                        <div className='swiper-prev arrow-slider'>
                            <ion-icon name="arrow-round-back"></ion-icon>
                        </div>
                        <div className='swiper-pagination'></div>
                        <div className='swiper-next arrow-slider'>
                            <ion-icon name="arrow-round-forward"></ion-icon>
                        </div>
                    </div>
                </Swiper>
            </div>

            <div id='profil'>
                <div className='profile'>
                    <div className='profile-logo'>
                        <img src={logoProfile} width={200} alt='logoProfile'/>
                        <h2>PT. ADI JOYO KUSUMO</h2>
                    </div>
                    <div>
                        <h1>Profil Perusahaan</h1>
                        <p className='p-indent'>
                            PT. Adi Joyo Kusumo sebuah perusahaan yang bergerak dalam bidang jasa pelaksana 
                            konstruksi yang berkantor di Kabupaten Sidoarjo, dengan nomor AKTA 01 Tanggal 
                            25 Februari 2019 yang disahkan Notaris Hj. Rahayu Sri Utami, S.H., M.Hum., M.Kn. 
                            (SK. Menteri Hukum dan Hak Asasi Manusia R.I. Nomor: AHU-460.AH.02.01-Tahun 2011 
                            Tanggal: 15 Juni 2011) yang berkedudukan di Kabupaten Gresik.
                        </p>
                        <p className='p-indent'>
                            Sejak tahun 2019 PT. Adi Joyo Kusumo banyak mendapat kepercayaan dengan mitra antara lain: 
                            Dinas Perhubungan, PLN, Dinas Pekerjaan Umum, Jasa Marga, Pertamina, dan berbagai perusahaan lainnya. 
                            Dengan etos kerja profesionalisme PT. Adi Joyo Kusumo berpengalaman mengerjakan berbagai proyek 
                            jalan nasional dan provinsi di Indonesia serta memproduksi perlengkapan alat rambu lalu lintas.
                        </p>
                        <p>
                            VISI : Menjadi perusahaan konstruksi umum yang berintegritas tinggi, terpercaya, inovatif, dan berpusat pada kepuasan pelanggan.
                        </p>
                        <p>
                            MISI : Mengembangkan bisnis konstruksi yang bereputasi; Membangun SDM unggul, kompeten, dan amanah; Menjalankan organisasi dengan tata kelola yang baik.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}