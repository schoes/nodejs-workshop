/**
 * @author Sven Koelpin
 */

//TODO
const validation = require('../server/common/Validation');
const yup = require('yup');

const tweetService = require('./TweetService');

const STATUS_CODE = 201;

const tweetShape = {
    tweet: yup.string().required().min(3).max(100),
    user: yup.string().required().min(3).max(50)
};
module.exports = server => {
    // - Add validation middleware (validateQueryParams)
    //   - page (number, min 1, max 10, default 1

    //   - size (number, min 1, max 100, default 10
    server.get('tweets', (req, res, next) => {
        //TODO
        // parsing + default param handling can be removed after validation is added. The validation middleware will do all of that for you (just use req.query.page and req.query.size).
        const page = req.query.page ? parseInt(req.query.page, 10) : 1;
        const size = req.query.size ? parseInt(req.query.size, 10) : tweetService.countTweets();
        const start = (page - 1) * size;
        const allTweets = tweetService.getTweets(start, size);
        res.send(allTweets);
        next();
    });
    server.post('tweets', validation.validatePostBody(tweetShape), (req, res, next) => {
        let {body: newTweet} = req;
        let tweet = tweetService.createTweet(newTweet);
        res.send(STATUS_CODE, tweet);
    });

    server.get('tweets/:id', (req, res, next) => {
        let {id} = req.params;
        let found = tweetService.getTweet(parseInt(id));

        if (found) {
            res.send(found);
        }
        else {
            res.send(404);
        }
    })

    //TODO:
    // - Implement getTweet which gets a single tweet by its id.
    //   - The method is a HTTP-GET method that has a dynamic path parameter :id (path: 'tweets/:id).
    //   - Use TweetService#getTweet
    //   - The path-parameter can be found in req.params (don't forget to parse it to a number!)
    //   - Return status code 404 when there is no tweet for the given id

};