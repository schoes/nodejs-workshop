/**
 * @author Sven Koelpin
 */


const fakeDataBase = require('../db/FakeDatabase');
const _ = require('lodash');


const getTweets = (start, size) => {
    //TODO: Return all tweets (use the fakeDataBase)

    let orderBy = _.orderBy(fakeDataBase.getTweetsTable(), ['id'], ['desc']);
    let sliced = orderBy.slice(start, size);
    return sliced;
};

const getTweet = id => {
    const tweetId = parseInt(id, 10);

    //TODO return a single tweet by it's tweetId
    //- Hint: use the array.find-function
    return _.find(fakeDataBase.getTweetsTable(), (item) => {
        return tweetId === item.id;
    });
};

const countTweets = () => {
    //TODO: return the count of all tweets (TIP: use array.length)
    return fakeDataBase.getTweetsTable().length;
};

const createTweet = tweet => {
    //TODO
    tweet.id = fakeDataBase.getTweetsTable().length + 1;

    fakeDataBase.getTweetsTable().push(tweet);
    return tweet;
};


module.exports = {
    getTweets,
    getTweet,
    countTweets,
    createTweet
};
