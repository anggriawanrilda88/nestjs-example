import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/posts.interface';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  create(post: Post) {
    this.posts.push(post);
  }

  findAll(): Post[] {
    // this.posts.push(post);
    return this.posts;
  }
}