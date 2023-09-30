import { AfterViewInit, Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post !: Post;
  @Input() mini !: boolean;
  @Input() showImg !: boolean;
  @Input() latest !: boolean;
}
