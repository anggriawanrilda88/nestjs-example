import { PostsService } from './posts.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }

    @Get()
    async findAll(@Query() params) {
        var haha = this.postsService.findAll();
        console.log(haha);
        console.log(params);

        return 'This action returns all post';
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return 'This action returns one post';
    }

}