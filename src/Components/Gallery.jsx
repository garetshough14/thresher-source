import Footer from './Footer'
import NavBar from './NavBar'
import styles from './gallary.module.css'

export default function Gallery() {
    return (
        <>
            <NavBar />
            <div className={styles.root}>
                <img src="/1.jpeg" alt="" />
                <img src="/2.jpeg" alt="" />
                <img src="/3.jpeg" alt="" />
                <img src="/4.jpeg" alt="" />
                <img src="/5.jpeg" alt="" />
                <img src="/6.jpeg" alt="" />
                <img src="/7.jpeg" alt="" />
                <img src="/9.jpeg" alt="" />
                <img src="/10.jpeg" alt="" />
                <img src="/11.jpeg" alt="" />
                <img src="/12.jpeg" alt="" />
            </div>
            <Footer />
        </>
    )
}