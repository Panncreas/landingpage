import './contact.css'
import whatsapp from '../../assets/wa.png'
import telephone from '../../assets/telefon.png'
import gmail from '../../assets/gmail.png'
import pin from '../../assets/pin.png'
export default function Contact(){
    return(
        <div id='contact' className='contact'>
            <iframe className='map' title='PT Adi Joyo Kusumo' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.7695062825933!2d112.69538737826382!3d-7.516102142312937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7df221b142d59%3A0x3d604ca040d185d9!2sPT.%20ADI%20JOYO%20KUSUMO!5e0!3m2!1sen!2sid!4v1739710968257!5m2!1sen!2sid" width="450" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='contact-us'>
                <h1>Hubungi kami :</h1>
                <div className='list-contact'>
                    <img src={whatsapp} width={40} alt='whatsapp'/>
                    <h2>087713490297</h2>
                </div>
                <div className='list-contact'>
                    <img src={telephone} width={40} height={30} alt='telephone'/>
                    <h2>(031) 35916001</h2>
                </div>
                <div className='list-contact'>
                    <img src={gmail} width={40} alt='gmail'/>
                    <h2>marketing@ajk.co.id</h2>
                </div>
                <div className='list-contact'>
                    <img src={pin} width={40} alt='pin'/>
                    <h2> Jl. Sumber Mulyo, Wunut, Kec. Porong, Kabupaten Sidoarjo, Jawa Timur 61274</h2>
                </div>

                
            </div>
        </div>
    )
}