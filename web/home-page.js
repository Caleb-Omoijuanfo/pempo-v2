const api = 'http://localhost:3000';
const app = document.getElementById('root');
const envelope = document.createElement('div')

app.appendChild(envelope)

var request = new XMLHttpRequest();
request.open('GET', api+'/post/all', true);
request.onload = function() {
  //Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    post_database = data.data;
    for (let post of post_database){
      const card = document.createElement('div');
      card.setAttribute('class', 'card mb-3')

      const row = document.createElement('div');
      row.setAttribute('class', 'row no-gutters')

      const col_md_4 = document.createElement('div');
      col_md_4.setAttribute('class', 'col-md-4')

      const a = document.createElement('a');
      a.setAttribute('href', '#')

      const img = document.createElement('img');
      img.setAttribute('class', 'card-img')
      img.setAttribute('src', '../../assets/cartoon 1.jpg')

      const col_md_8 = document.createElement('div');
      col_md_8.setAttribute('class', 'col-md-8')

      const class_body = document.createElement('div');
      class_body.setAttribute('class', 'card-body')

      const h5 = document.createElement('h5');
      h5.setAttribute('class', 'card-title')
      h5.textContent = post.title

      const p1 = document.createElement('p');
      p1.setAttribute('class', 'card-text')

      const p2 = document.createElement('p');
      p2.setAttribute('class', 'card-text')
      p2.textContent = post.content

      const small = document.createElement('small');
      small.setAttribute('class', 'text-muted')
      small.textContent = post.date

      envelope.appendChild(card)
      card.appendChild(row)
      row.appendChild(col_md_4)
      row.appendChild(col_md_8)
      a.appendChild(img)
      col_md_4.appendChild(a)
      col_md_8.appendChild(class_body)
      class_body.appendChild(h5)
      class_body.appendChild(p1)
      class_body.appendChild(p2)
      p1.appendChild(small)
    }

  } else {
    console.log('error')
  }

}

// Send request
request.send()
