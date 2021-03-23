
process.env.NTBA_FIX_319 = 1
const { games, wednesdeySubjects, statistics, highlightNews, highlightVideo } = require('./schema');
const puppeteer = require('puppeteer');
require('events').EventEmitter.defaultMaxListeners = 15;


module.exports.scraperStat = async () => {
    console.log('starting to run statitics scrapper')
    // const stats = []
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage();
    try {
        //opening a new page and navigating to Fleshscore
        await page.goto('https://www.football.co.il/stats/');
        await page.waitForSelector('body');
        //manipulating the page's content
        let allStatss = await page.evaluate(() => {
            document.querySelector(".stats-see-more-btn").click();
            document.querySelector(".stats-see-more-btn").click();
            document.querySelector(".stats-see-more-btn").click();
            document.querySelector(".stats-see-more-btn").click();
            let ststtt = document.body.querySelector('.stats-page');
            let allStats = ststtt.querySelectorAll('.stats-category-item');
            let stats = []

            //storing the post items in an array then selecting for retrieving content
            allStats.forEach(item => {
                let arr = []
                try {
                    let title = item.querySelector('.stats-category-item-title').innerText;
                    let allPlayers = item.querySelectorAll('.player-list-item')
                    allPlayers.forEach(player => {
                        let count = player.querySelector('.player-list-player-count').innerText;
                        let name = player.querySelector('.player-list-player-name').innerText;
                        let position = player.querySelector('.player-list-player-role').innerText;
                        let href = player.querySelector('a').href;
                        arr.push({
                            name,
                            count,
                            position,
                            href
                        })

                    })
                    stats.push({
                        [title]: arr
                    })
                } catch (err) {
                    console.log(err)

                }

            });

            return stats;
        });
        console.log('allStatss',allStatss)
        if (allStatss.length) {
            // console.log(allStatss)

            const data = {
                stats: allStatss
            }
            await statistics.findOneAndUpdate({}, data, { upsert: true })
        }

        //outputting the scraped data
    } catch (err) {

    }
    finally {
        console.log('browser close stats')

        //closing the browser
        await browser.close();
    }



}

// running scrapper on "sport1" to get highlights

module.exports.scraperHighlights = async () => {
    // const stats = []
    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://www.youtube.com/playlist?list=PLNrbuxPdngP65UOfxvQ7nu7NkvaAWF8nr');
        await page.waitForSelector('body');

        //manipulating the page's content
        let allStatss = await page.evaluate(() => {

            let videos = document.body.querySelectorAll('.style-scope.yt-horizontal-list-renderer');
            let highlights = []

            //storing the post items in an array then selecting for retrieving content

            let arr = []
            try {
                videos.forEach(video => {
                    let title = video.querySelector('h3').innerText;

                    let href = video.querySelector('a').href
                    highlights.push({
                        title,
                        href,
                    })



                })


            } catch (err) {

                console.log(err)


            }





            return highlights.length ? highlights[0] : [];
        });

        return allStatss



        //outputting the scraped data
    } catch (err) {

    }
    finally {
        console.log('browser close Highlights')

        //closing the browser
        await browser.close();
    }



}
module.exports.scrapperVideo = async () => {
    // const stats = []
    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://www.youtube.com/channel/UCbC5pro0nYnczsG4_T3ICwg/videos');
        await page.waitForSelector('body');

        //manipulating the page's content
        let allStatss = await page.evaluate(() => {

            let videos = document.body.querySelectorAll('.style-scope.ytd-grid-video-renderer');
            let highlights = []

            //storing the post items in an array then selecting for retrieving content

            let arr = []
            try {
              videos.forEach(video =>{

                  let title = video.querySelector('h3').innerText;

                  let href = video.querySelector('a').href
                  highlights.push({
                      title,
                      href,
                  })
              })



              


            } catch (err) {

                console.log(err)


            }





            return highlights.length ? highlights[0] : [];
        });
        return allStatss



        //outputting the scraped data
    } catch (err) {

    }
    finally {
        console.log('browser close Highlights')

        //closing the browser
        await browser.close();
    }



}

// running scrapper on "sport1" to get news

const checkIfHighlight = (title) => {
    console.log('checkIfHighlight-title', title)
    const scores = ['0:0', '1:1', '2:2', '3:3', '4:4', '5:5', '1:0', '2:0', '3:0', '4:0', '5:0', '2:1', '3:1', '3:2', '4:1', '4:2', '4:3', '5:1', '5:2', '5:3', '5:4', '0:1', '0:2', '0:3', '0:4', '0:5', '1:2', '1:3', '2:3', '1:4', '2:4', '3:4', '1:5', '2:5', '3:5', '4:5']
    const isThere = scores.find(o => { return title.includes(o) })
    ans = isThere ? true : false
    return ans
}

module.exports.scraperNewsSport1 = async () => {
    console.log('starting to run news scrapper')
    // const stats = []
    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://sport1.maariv.co.il/israeli-soccer/ligat-haal/');
        await page.waitForSelector('body');

        //manipulating the page's content
        let news = await page.evaluate(() => {

            let allStats = document.body.querySelectorAll('.post-card.col-lg-11.col-12.p-0');
            let highlights = []
            //storing the post items in an array then selecting for retrieving content


            allStats.forEach(item => {
                let arr = []
                try {
                    let title = item.querySelector('.title-post').innerText;
                    let excerpt = item.querySelector('p').innerText.trim();

                    let href = item.querySelector('a').href
                    highlights.push({
                        title,
                        href,
                        excerpt

                    })


                } catch (err) {
                    console.log(err)


                }


            });


            return highlights;
        });
        // console.log('news', news)
        return news


    } catch (err) {
        console.log('err', err)

    }
    finally {
        console.log('browser close news2')

        //closing the browser
        await browser.close();
    }
}
module.exports.scraperNewsHaifa = async () => {
    // const stats = []
    console.log('starting to run Haifa scrapper')

    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://sport1.maariv.co.il/soccer/teams/40674/');
        await page.waitForSelector('body');

        //manipulating the page's content
        let news = await page.evaluate(() => {

            let allStats = document.body.querySelectorAll('.post-card');
            let highlights = []
            //storing the post items in an array then selecting for retrieving content


            allStats.forEach(item => {
                let arr = []
                try {
                    let title = item.querySelector('.title-post').innerText;
                    let excerpt = item.querySelector('p').innerText.trim();

                    let href = item.querySelector('a').href
                    highlights.push({
                        title,
                        href,
                        excerpt
                    })


                } catch (err) {
                    console.log(err)


                }


            });


            return highlights;
        });
        return news


    } catch (err) {
        console.log('err', err)

    }
    finally {
        console.log('browser close news2')

        //closing the browser
        await browser.close();
    }
}
// running scrapper on "sport5" to get news

module.exports.scraperNewsSport5 = async () => {
    console.log('starting to run news scrapper')
    // const stats = []
    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://www.sport5.co.il/liga.aspx?FolderID=44');
        await page.waitForSelector('body');

        //manipulating the page's content
        let news = await page.evaluate(() => {

            let allStats = document.body.querySelector('.mainarticle-league');
            let highlights = []
            //storing the post items in an array then selecting for retrieving content



            let arr = []
            try {
                let title = allStats.querySelector('.title').innerText;
                let href = allStats.querySelector('a').href
                highlights.push({
                    title,
                    href,
                })


            } catch (err) {
                console.log(err)


            }









            return highlights;
        });
        // console.log('news', news)
        return news
    } catch (err) {
        console.log('err', err)

    }
    finally {
        console.log('browser close news')

        //closing the browser
        await browser.close();
    }
}
module.exports.scraperCalcalist = async () => {
    console.log('starting to run Calcalist scrapper')
    // const stats = []
    let str = ''
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    const page = await browser.newPage();
    try {

        //opening a new page and navigating to Fleshscore
        await page.goto('https://www.calcalist.co.il/home/0,7340,L-8,00.html');
        await page.waitForSelector('body');

        //manipulating the page's content
        let news = await page.evaluate(() => {

            let allStats = document.body.querySelector('.CdaTopStory1280');
            let highlights = []
            //storing the post items in an array then selecting for retrieving content



            let arr = []
            try {
                let title = allStats.querySelector('.ts-title-sivug').innerText;
                let href = allStats.querySelector('a').href
                highlights.push({
                    title,
                    href,
                })


            } catch (err) {
                console.log(err)


            }









            return highlights;
        });
        return news
    } catch (err) {
        console.log('err', err)

    }
    finally {
        console.log('browser close news')

        //closing the browser
        await browser.close();
    }
}
module.exports.scraperLiveTable = async () => {
    console.log('starting to run scrapper')

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

    try {
        //opening a new page and navigating to Fleshscore
        const page = await browser.newPage();
        await page.goto('https://www.flashscore.com/standings/84nedal4/Ob3RQ3Xr/#live');
        // await page.goto('https://www.flashscore.com/standings/fJTg1FrO/2DCFLB6o/#live');
        await page.waitForSelector('body');

        //manipulating the page's content
        let grabMatches = await page.evaluate(() => {
            let allTeams = document.body.querySelectorAll('.row___1rtP1QI');

            //storing the post items in an array then selecting for retrieving content
           let scrapeItems = [];
            allTeams.forEach(team => {

                try {
                    teamName = team.querySelector('.rowCellParticipantName___38vskiN').innerText;
                    goal_diff = team.querySelector('.rowCell____vgDgoa.cellScore___2A1RcrA').innerText;
                    position = team.querySelector('.rowCellRank___25g3H2t').innerText;
                    isPlaying = team.querySelector('.rowCell____vgDgoa.cellLive___p_aiPRm').innerText;
                    let allStat = team.querySelectorAll('.rowCell____vgDgoa.cell___4WLG6Yd');
                    let arr = []
                    allStat.forEach(element => {
                        arr.push(element.innerText)
                    });
                    let tableTeam = {
                        teamName,
                        isPlaying,
                        arr,
                        goal_diff,
                        position
                        // match_played: allStat[0],
                        // wins: allStat[1],
                        // draws: allStat[2],
                        // loses: allStat[3],
                        // goal_diff: allStat[4],
                        // points: allStat[5]
                    }

                    scrapeItems.push(tableTeam);


                } catch (err) {
                    console.log(err)
                }







            });


            return scrapeItems;
        });
        //outputting the scraped data


        const finalTable = grabMatches.map(match=>{
            const {arr, teamName,position,goal_diff,isPlaying} = match
            return {
                teamName,
                position,
                isPlaying,
                match_played:arr[0],
                wins:arr[1],
                draw:arr[2],
                loses:arr[3],
                goal_diff,
                points:arr[4],
            }
        })
        // console.log('finalTable', finalTable)
        return finalTable

    } catch (err) {

    }
    finally {
        console.log('closing browser - scrapper')
        await browser.close();

    }

    //handling any errors



}


