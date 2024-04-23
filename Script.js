let movies=[
    {
        name:"Setty",
        poster:"poster1",
        rating:5.6,
    },
    {
        name:"Veeramallu",
        poster:"poster14",
        rating:8.2,
    },
    {
        name:"A",
        poster:"poster3",
        rating:9.2,
    },
    {
        name:"vakeel sab",
        poster:"poster4",
        rating:10.0,
    },
   
    {
        name:"Oh baby",
        poster:"poster6",
        rating:6.1,
    },
    {
        name:"baby",
        poster:"poster7",
        rating:10.0,
    },
    {
        name:"SR Mandapam",
        poster:"poster2",
        rating:7.3, 
    },
    {
        name:"Karthvyam",
        poster:"poster9",
        rating:8.9, 
    },
    {
        name:"BRO",
        poster:"poster10",
        rating:9.8 , 
    },
    {
        name:"Bicchagadu-2",
        poster:"poster11",
        rating:8.7, 
    },
    {
        name:"Adhipurush",
        poster:"poster12",
        rating:8.0, 
    },
    {
        name:"RRR",
        poster:"poster5",
        rating:8.3,
    },
    {
        name:"Pushpa",
        poster:"poster13",
        rating:8.2, 
    },
    
]
function display_video(data){

    document.getElementById('movie').innerHTML="";

    let tring=``;
for(i=0;i<data.length;i++){
    tring=tring+`
     <div class="movie">
        <div class="overlay">
            <div class="video">
    
            </div>
            <div class="details">
               <h1> ${data[i].name}</h1>
               <h2> ${data[i].rating}</h2>
               <p>Publisher: KS Anandh</p><br>
               <h4 class="view">View</h4>
            </div>
        </div>
        <div class="poster">
          <img src="${data[i].poster}.jpg" >
        </div>
    </div>`;
}
document.getElementById('movie').innerHTML=tring;
}
window.onload=function(){
    display_video(movies)
};

function live_search(){
    let movieName=document.getElementById('on_search').value
    if(movieName !=""){
    let result= movies.filter((movie)=>{
        return movie.name.toUpperCase().includes(movieName.toUpperCase());
        
    })
    display_video(result);
    result.filter((x)=> console.log(x.name))
    }
    else{
    display_video(movies);
    } 
 }
 function searchMovie(){
     play=document.getElementById('on_search').value
 }
 






