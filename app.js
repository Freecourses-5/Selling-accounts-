const seed=[
 {id:1,platform:"Instagram",title:"حساب Instagram متخصص في التقنية",followers:"18.4K",price:120,niche:"Technology",age:"3 سنوات",cls:"ig",icon:"◎"},
 {id:2,platform:"YouTube",title:"قناة YouTube محتوى تعليمي",followers:"42K",price:390,niche:"Education",age:"4 سنوات",cls:"yt",icon:"▶"},
 {id:3,platform:"TikTok",title:"حساب TikTok محتوى ترفيهي",followers:"75K",price:260,niche:"Entertainment",age:"2 سنوات",cls:"tt",icon:"♪"},
 {id:4,platform:"Facebook",title:"صفحة Facebook للأخبار",followers:"31K",price:180,niche:"News",age:"5 سنوات",cls:"fb",icon:"f"},
 {id:5,platform:"Telegram",title:"قناة Telegram تقنية",followers:"12K",price:95,niche:"Technology",age:"2 سنوات",cls:"tg",icon:"➤"},
 {id:6,platform:"X",title:"حساب X في مجال الأعمال",followers:"9.8K",price:140,niche:"Business",age:"6 سنوات",cls:"x",icon:"𝕏"}
];
const stored=JSON.parse(localStorage.getItem("mh_listings")||"[]");
const listings=[...stored,...seed];
function render(){
 const grid=document.getElementById("listingGrid"); if(!grid)return;
 const p=document.getElementById("platformFilter").value;
 const s=document.getElementById("sortFilter").value;
 let arr=listings.filter(x=>!p||x.platform===p);
 if(s==="low")arr.sort((a,b)=>a.price-b.price);
 if(s==="high")arr.sort((a,b)=>b.price-a.price);
 grid.innerHTML=arr.length?arr.map(x=>`<article class="listing">
  <div class="listing-top"><i class="listing-avatar ${x.cls}">${x.icon}</i><div><div class="listing-title">${x.title}</div><div class="listing-meta">${x.platform} • ${x.followers} متابع/مشترك</div></div></div>
  <div class="listing-body"><div class="chips"><span class="chip">${x.niche}</span><span class="chip">عمر ${x.age}</span></div>
  <div class="listing-bottom"><span class="price">$${Number(x.price).toLocaleString()}</span><a class="btn primary" href="listing.html?id=${x.id}">التفاصيل</a></div></div>
 </article>`).join(""):`<div class="empty">لا توجد عروض مطابقة.</div>`;
}
document.querySelector("#platformFilter")?.addEventListener("change",render);
document.querySelector("#sortFilter")?.addEventListener("change",render);
document.querySelectorAll(".platform-card").forEach(a=>a.addEventListener("click",()=>{localStorage.setItem("mh_filter",a.dataset.filter)}));
const savedFilter=localStorage.getItem("mh_filter"); if(savedFilter&&document.querySelector("#platformFilter")){document.querySelector("#platformFilter").value=savedFilter;localStorage.removeItem("mh_filter")}
render();