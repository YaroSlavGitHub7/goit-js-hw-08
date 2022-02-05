// Add imports above this line
import { galleryItems } from './gallery-items';
// console.log(galleryItems);

/* в package.json добавили parcel-plugin-handlebars */
// import imgGallaryTml from '../templates/imgGallery'; /* в templates поместили шаблон и заимпортировали его*/
/*вызвали ф-ю шаблона, закинули в неё объект*/
// console.log(imgGallaryTml(galleryItems[0])); /*пришла ф-ия с значением 1го элемента*/

/*через ИЧ получаем массив*/
import imgGallaryTmlArr from '../templates/imgGalleryArr'; /* в templates поместили шаблон и применили ИЧ, заимпортировали его*/



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItemsMarkup(galleryItems) {
        // return galleryItems.map(galleryItem => imgGallaryTml(galleryItem)).join(''); /*мэпаем масив изображений -вызывается шаблон для каждого элемента*/
    // return galleryItems.map(imgGallaryTml).join(''); /*тоже самое - короткая запись*/

    return imgGallaryTmlArr(galleryItems); /*ещё короче запись*/
}
// console.log(imgGallaryTmlArr(galleryItems));/*создана разметка*/


// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

/* из документации SimpleLightbox*/
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});