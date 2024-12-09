const togglebutton = document.getElementById('toggle-skills')
const skills = document.getElementById('skills')

togglebutton.addEventListener('click', ()=> {
    if (skills.style.display === 'none') {
        
    } else {
        skills.style.display = 'none'
    }
});