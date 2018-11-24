import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public items: Array<Post> = [];
  constructor(private postService: PostService,
    private navCtrl: NavController) {
    this.postService.getList().subscribe(d => {
      this.items = d;
    });
  }
  ngOnInit() {
  }
  goToDetail(item: Post) {
    this.navCtrl.navigateForward(['detail', item.id]);
  }
}
