import {Subject} from 'rxjs/Subject';

export class PostService {
    postSubject = new Subject<any[]>();

    private postArray = [
        {
            title: 'Mon premier post',
            content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
            loveIts: 0,
        },
        {
            title: 'Mon deuxième post',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque',
            loveIts: 0,
        },
        {
            title: 'Encore un post',
            content: 'perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut',
            loveIts: 0,
        }
    ];

    getPostArray(){
        return this.postArray;
    }

    emitPostSubject() {
        this.postSubject.next(this.postArray.slice());
    }

    addPost(title: string, content: string){
        const post = {
            title: '',
            content: '',
            loveIts: 0,
        }
        post.title = title;
        post.content = content;
        this.postArray.push(post);
        this.emitPostSubject();
    }

    deletePost(index: number){
        this.postArray.splice(index, 1);
        this.emitPostSubject();
    }

    like(index: number){
        this.postArray[index].loveIts =  this.postArray[index].loveIts + 1;
        this.emitPostSubject();
    }

    dislike(index: number){
        this.postArray[index].loveIts = this.postArray[index].loveIts - 1;
        this.emitPostSubject();
    }
}