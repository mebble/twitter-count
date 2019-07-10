import React, { Component } from 'react';

import Timeline from './containers/Timeline';
import Search from './containers/Search';

import Row from './components/Row';
import Toggle from './components/Toggle';
import Switch from './components/Switch';
import Header from './components/Header';
import TweetModal from './components/TweetModal';
import Body from './components/Body';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metric: 'favourites',
            user: null,
            withReplies: true,
            sorted: false,
            tweet: {
                id: null,
                show: false,
            }
        };

        this.onFavourites = this.onFavourites.bind(this);
        this.onRetweets = this.onRetweets.bind(this);
        this.onReplyToggle = this.onReplyToggle.bind(this);
        this.onSortToggle = this.onSortToggle.bind(this);
        this.onOpenTweet = this.onOpenTweet.bind(this);
        this.onCloseTweet = this.onCloseTweet.bind(this);
        this.onSearchUser = this.onSearchUser.bind(this);
    }

    onFavourites() {
        this.setState({
            metric: 'favourites'
        });
    };

    onRetweets() {
        this.setState({
            metric: 'retweets'
        });
    }

    onReplyToggle() {
        this.setState(({ withReplies }) => {
            return { withReplies: !withReplies };
        });
    }

    onSortToggle() {
        this.setState(({ sorted }) => {
            return { sorted: !sorted };
        });
    }

    onOpenTweet(tweetID) {
        this.setState({
            tweet: {
                id: tweetID,
                show: true
            }
        });
    }

    onCloseTweet(event) {
        this.setState({
            tweet: {
                id: null,
                show: false
            }
        });
    }

    onSearchUser(screenName) {
        this.setState({
            user: screenName
        });
    }

    render() {
        console.log(Date.now());
        const { metric, user, withReplies, sorted, tweet } = this.state;
        return (
            <>
                <TweetModal id={tweet.id} showModal={tweet.show} closeTweet={this.onCloseTweet} />
                <Header>
                    <Search search={this.onSearchUser} />
                    <Row>
                        <Switch current={metric} onLeftClick={this.onFavourites} onRightClick={this.onRetweets} />
                    </Row>
                    <Row>
                        <Toggle onClick={this.onReplyToggle} isOn={withReplies}>replies</Toggle>
                        <Toggle onClick={this.onSortToggle} isOn={sorted}>sorted</Toggle>
                    </Row>
                </Header>
                <Body>
                    <Timeline metric={metric} user={user} withReplies={withReplies} sorted={sorted} openTweet={this.onOpenTweet} />
                </Body>
            </>
        );
    }
}

export default App;
