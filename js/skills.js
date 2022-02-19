var form = document.querySelector('form')

    var tbody = document.querySelector('body > table > tbody')
    console.log(form)
    
    form.addEventListener('submit', updateTable)
    
    function updateTable(e){
        e.preventDefault()
        
        var name= document.querySelector('#name').value
        var skill= document.querySelector('#skill').value
        var rating= document.querySelector('#rating').value

        var dict= {
            'name': name,
            'skill': skill,
            'rating': rating
        }
    
        var row = document.createElement('tr');
        var cell1 = document.createElement('td')
        var cell2 = document.createElement('td')
        var cell3 = document.createElement('td')
    
        var nameNode= document.createTextNode(name)
        var skillNode = document.createTextNode(skill)
        var ratingNode = document.createTextNode(rating)
    
        cell1.appendChild(nameNode)
        cell2.appendChild(skillNode)
        cell3.appendChild(ratingNode)
    
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(cell3)
    
        console.log(row)
    
        tbody.appendChild(row)
    }