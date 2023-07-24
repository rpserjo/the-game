import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import replyService from '../servises/reply-service';
import { ApiError } from '../exeptions/api-error';

class ReplyController {
    async createReply(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка переданных данных', errors.array()));
            }

            const { commentId, message } = req.body;

            const data = await replyService.createReply(message, commentId, (req as any).UserId);

            return res.json(data);
        } catch (error) {
            return console.log(error);
        }
    }
}
const replyController = new ReplyController();
export default replyController;
