const msData= data.data;
console.log(msData)
let mainDiv=document.getElementById('main-body');
let msDiv= document.getElementById('milestones');


msDiv.innerHTML=`
${msData.map(m=>{
    return `
    
    <div class="milestone" id=${m._id} >
        <div class="milestone-title" onclick= 'showModules(${m._id})'>
         <input type="checkbox" name="" id=${m._id} />
          <p>${m.name}</p>
        </div>
          <div class="hidden-section hide-${m._id}">
          ${m.modules.map(md=>{
                return `<p>${md.name}</p>`
            }).join('')}
          
          </div>
    </div>
    `;
}).join('')}`;

const showModules=(id)=>{
    let hiddenSection= document.querySelector(`.hide-${id}`);
    let showSection= document.querySelector(`.show-section`);
    if(!hiddenSection.classList.contains('show-section') && showSection){
        showSection.classList.remove('show-section');
    }
    hiddenSection.classList.toggle('show-section');
    
}
