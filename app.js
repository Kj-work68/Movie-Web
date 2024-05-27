const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    arrow.addEventListener("click",()=>{
        const itemNumber = movieLists[i].querySelectorAll("img").length;
        let clickCounter = 0;
        arrow.addEventListener("click",()=>{
            clickCounter++;
            if(itemNumber - (5 + clickCounter) >= 0){
            movieLists[i].style.transform = `translateX(${(movieLists[i].computedStyleMap().get("transform")[0].x.value)-250}px)`;
            }
        else{
            movieLists[i].style.transform = "transformX(0)";
        }
        
    });

    console.log(movieLists[i].querySelectorAll("img").length);
});