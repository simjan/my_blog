import { Component } from '@angular/core';
import { Post } from './post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [ new Post("mon premier post", 
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt risus et nulla fermentum fringilla. Fusce bibendum massa dapibus, luctus diam eget, fermentum lorem. Etiam orci leo, vehicula vel erat in, placerat interdum est. Donec nec consectetur velit, ut auctor massa. Vestibulum rutrum eros vel consequat tempus. Pellentesque aliquam velit magna, vitae scelerisque urna porta vitae. Cras suscipit leo in metus tristique, nec ultrices augue posuere. Proin porttitor ac ex a aliquet. Sed tincidunt id enim quis feugiat. Mauris tempus mauris neque. Praesent eu ante a dui fringilla eleifend sed vitae leo. Cras non velit leo."),
            new Post("mon deuxième post",
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt risus et nulla fermentum fringilla. Fusce bibendum massa dapibus, luctus diam eget, fermentum lorem. Etiam orci leo, vehicula vel erat in, placerat interdum est. Donec nec consectetur velit, ut auctor massa. Vestibulum rutrum eros vel consequat tempus. Pellentesque aliquam velit magna, vitae scelerisque urna porta vitae. Cras suscipit leo in metus tristique, nec ultrices augue posuere. Proin porttitor ac ex a aliquet. Sed tincidunt id enim quis feugiat. Mauris tempus mauris neque. Praesent eu ante a dui fringilla eleifend sed vitae leo. Cras non velit leo."),
            new Post("encore un post",
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt risus et nulla fermentum fringilla. Fusce bibendum massa dapibus, luctus diam eget, fermentum lorem. Etiam orci leo, vehicula vel erat in, placerat interdum est. Donec nec consectetur velit, ut auctor massa. Vestibulum rutrum eros vel consequat tempus. Pellentesque aliquam velit magna, vitae scelerisque urna porta vitae. Cras suscipit leo in metus tristique, nec ultrices augue posuere. Proin porttitor ac ex a aliquet. Sed tincidunt id enim quis feugiat. Mauris tempus mauris neque. Praesent eu ante a dui fringilla eleifend sed vitae leo. Cras non velit leo.")
  ]
}
