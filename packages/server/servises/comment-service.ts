import { Comment, sequelize } from '../db';

class CommentService {
    async createComment(message: string, TopicId: number, UserId: number) {
        return Comment.create({ message, TopicId, UserId });
    }

    async findCommentsForTopic(topicId: number, page: number, limit: number) {
        const offset = limit * (page - 1);
        const queryResult = await sequelize.query(
            // eslint-disable-next-line  no-multi-str
            'SELECT c.id as "commentId", NULL as "replyId", c.message, uc.login AS author \
            , c."createdAt" AS "commentCreatedAt", NULL AS "replyCreatedAt"  \
            FROM public."Comments" as c  \
            LEFT JOIN public."Users" AS uc ON c."UserId"=uc.id \
            WHERE c."TopicId" = :topicId \
        UNION ALL \
        SELECT rc.id , r.id as "replyId", r.message, ur.login , rc."createdAt", r."createdAt" \
            FROM public."Replies" as r \
            JOIN public."Comments" as rc ON rc.id = r."CommentId" AND rc."TopicId" = :topicId \
            LEFT JOIN public."Users" AS ur ON rc."UserId"=ur.id \
            ORDER BY "commentCreatedAt" DESC, "replyCreatedAt" DESC \
            OFFSET :offset \
            LIMIT :limit',
            {
                replacements: { offset: `${offset}`, limit: `${limit}`, topicId: `${topicId}` },
                mapToModel: true,
                model: Comment,
            }
        );

        const LastPage = Math.ceil((await Comment.count()) / limit);

        return { Comments: [...queryResult], LastPage };
    }
}
const commentService = new CommentService();
export default commentService;
