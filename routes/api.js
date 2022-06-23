__path = process.cwd()
let express = require('express');
let db = require(__path + '/database/db');
try {
let zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}
let creator = "Hafidz Abdillah"
let axios = require('axios')
let fs = require('fs')
let fetch = require('node-fetch');
let router  = express.Router();
let request = require("request");
let cheerio = require("cheerio");
let hxz = require('hxz-api')
let xzons = require('xzons-api')
let nhentai = require('nhentai-js');
let formData = require('form-data');
let NanaAPI = require('nana-api')
let ch = require('canvas-hikki-2')
let kc = require('knights-canvas')
let nana = new NanaAPI()
let { tiktok, pinterest, mediafireDl, doujindesu, pinterestdl } = require('../lib/index')
let options = require(__path + '/lib/options.js');
let { color, bgcolor } = require(__path + '/lib/color.js');
let { getBuffer, fetchJson } = require(__path + '/lib/fetcher.js');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

loghandler = {
	notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        result: {
        message: 'masukan parameter apikey'
        }
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan URL'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukkan query'
    },
    notapikey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey invalid'
    },
    error: {
        status: 404,
        creator: `${creator}`,
        message: 'An internal error occurred. Please report via WhatsApp wa.me/62895619083555'
    }
}

var listkey = ["sayahafiz", "Kbbb25", "Kabajak34", "Kaoalljh291", "Jaoapql2719", "Kbbb5", "Kabaja34", "Kaoallh291", "Jaoaql2719", "Kskbbb25", "Kabajaksks34", "Kaoalljalalh291", "Jaoapspwpql2719", "Kbakalabb25", "Kabajskakak34", "Kaosksosalljh291", "Jaoapeowpwpql2719", "Kbskskakbb25", "Kabwpwpqpajak34", "Kanajaoalljh291", "Jaoapqal19", "Kbbalalab25", "Kabajsalak34", "Kaoa291", "ql2719"];

router.get('/canvas/welcome', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
	    namagc = req.query.namagc,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    
let Welcome = await new ch.Welcome2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setGroupname(namagc)
.setMember(member)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/database/welcome.png', data)
  res.sendFile(__path+'/database/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/goodbye', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
let Goodbye = await new ch.Goodbye2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setMember(member)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/database/goodbye.png', data)
  res.sendFile(__path+'/database/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/promote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Promote = await new kc.Promote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Promote.toBuffer();
  await fs.writeFileSync(__path +'/database/promote.png', data)
  res.sendFile(__path+'/database/promote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/demote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Demote = await new kc.Demote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Demote.toBuffer();
  await fs.writeFileSync(__path +'/database/demote.png', data)
  res.sendFile(__path+'/database/demote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/level', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            logorank = req.query.logorank   
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!logorank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter logorank"})
    
var level = await new ch.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${logorank}`) 
    .toAttachment();
  data = level.toBuffer();
  await fs.writeFileSync(__path +'/database/rank.png', data)
  res.sendFile(__path +'/database/rank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/canvas/levelup', async (req, res, next) => {
            pp = req.query.pp
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var levelup = await new ch.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/database/sup.png', data)
  res.sendFile(__path +'/database/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gfx1', async (req, res) => {
            nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var gfx1 = await new ch.Gfx1()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = gfx1.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx1.png', data)
  res.sendFile(__path +'/database/gfx1.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx2', async (req, res) => {
        let nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx2()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx2.png', data)
  res.sendFile(__path +'/database/gfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx3', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx3()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx3.png', data)
  res.sendFile(__path +'/database/gfx3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx4', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx4()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx5', async (req, res) => {
            let text = req.query.teks

    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx5()
    .setText(`${text}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx1', async (req, res) => {
            text = req.query.teks,
            bg = req.query.bg
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
     if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx()
    .setText(text)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx.png', data)
  res.sendFile(__path +'/database/cgfx.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx2', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2,
            bg = req.query.bg
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx2()
    .setText1(text1)
    .setText2(text2)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx2.png', data)
  res.sendFile(__path +'/database/cgfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gura', async (req, res) => {
            let teks = req.query.teks
    if (!teks) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
var gura = await new ch.Gura()
    .setName(teks) 
    .toAttachment();
  data = gura.toBuffer();
  await fs.writeFileSync(__path +'/database/Gura.png', data)
  res.sendFile(__path +'/database/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/spongebob', async (req, res) => {
        image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var burn = await new ch.Burn()
    .setAvatar(image)
    .toAttachment();
  
  data = burn.toBuffer();
  await fs.writeFileSync(__path +'/database/spongebob.png', data)
  res.sendFile(__path +'/database/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/patrick', async (req, res) => {
           image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var patrick = await new ch.Patrick()
    .setAvatar(image)
    .toAttachment();
  
  data = patrick.toBuffer();
  await fs.writeFileSync(__path +'/database/patrick.png', data)
  res.sendFile(__path +'/database/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/instagram', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username,
        post = req.query.post,
        followers = req.query.followers,
        following = req.query.following
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    if (!post) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter post"})
    if (!followers) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter followers"})
    if (!following) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter following"})
var Ig = await new ch.Ig()
    .setAvatar(pp)
    .setUsername(username)
    .setPost(post)
    .setFollowers(followers)
    .setFollowing(following)
    .toAttachment();
  data = Ig.toBuffer();
  await fs.writeFileSync(__path +'/database/instagram.png', data)
  res.sendFile(__path +'/database/instagram.png')
  .catch(e => {
            res.json(loghandler.error)
})
})
router.get('/canvas/xnxx', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    var Xnxx = await new ch.Xnxx()
    .setImage(pp)
    .setTitle(username)
    .toAttachment();
  data = Xnxx.toBuffer();
  await fs.writeFileSync(__path +'/database/xnxx.png', data)
  res.sendFile(__path +'/database/xnxx.png')
  .catch(e => {
            res.json(loghandler.error)
})
})
     // Downloader
    router.get('/tiktok', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
		  fetch(encodeURI(`https://christian-id-api.herokuapp.com/api/download/tiktok?url=${url}&apikey=chris5128`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	nowm: result.result.nowatermark,
                     wm: result.result.watermark,
                     audiomp3: result.result.audio
                 }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
    })
router.get('/telesticker', async(req, res) => {
	      let url = req.query.url
	      if (!url) return res.json(loghandler.noturl)
let packName = url.replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror

    let json = await gas.json()
    const result = []
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()
   result.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
  
    }
res.json({
  status: 200,
  creator: creator,
  result: result
})
    })
    
    router.get('/igdl', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await hxz.igdl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/mediafire', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     let result = await mediafireDl(url)
	     try {
	     res.json({
			  status: 200,
			  creator: `${creator}`,
              result
          })
	    } catch(err) {
		      console.log(err)
		      res.json(loghandler.error)
	       }
      })
     router.get('/ytmp3', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://christian-id-api.herokuapp.com/api/download/ytmp3?url=${url}&apikey=chris5128`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	judul: result.result.title,
                     thumbnail: result.result.thumb,
                     account_channel: result.result.channel,
                     upload: result.result.published,
                     views_total: result.result.views,
                     link_mp3: result.result.url
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
     router.get('/ytmp4', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://christian-id-api.herokuapp.com/api/download/ytmp4?url=${url}&apikey=chris5128`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	judul: result.result.title,
                     thumbnail: result.result.thumb,
                     account_channel: result.result.channel,
                     upload: result.result.published,
                     views_total: result.result.views,
                     link_mp4: result.result.url
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
     router.get('/twitterimage', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/twitterimage?apikey=sayajiro&url=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	account_name: result.result.user.name,
                     account_username: result.result.user.username,
                     profile_image: result.result.user.photo,
                     link: result.result.link
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })

router.get('/twitter', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/twitter?apikey=sayajiro&url=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	judul: result.result.title,
                     url: result.result.link
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })

router.get('/pinterestimage', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/pinterestdl?apikey=sayajiro&url=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	url: result.result
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
  router.get('/pinterest', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=sayajiro&url=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: {
                 	url: result.result
               }
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
      // Searching
router.get('/kbbi', async(req, res) => {
	     let query = req.query.query
	     if (!query) return res.json(loghandler.notquery)
	     fetch(encodeURI(`https://new-kbbi-api.herokuapp.com/cari/${query}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
         })
})
      router.get('/pinterst', async(req, res) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let result = await pinterest(query)
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
      })
router.get('/asupan', async (req, res) => {
     
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
              status: 200,
             	creator: creator,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
      router.get('/google', async (req, res, next) => {
	      let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	      let google = require('google-it')
	      let result = google({'query': query}).then(result => {
	      res.json({ 
		       status: 200,
		       creator: `${creator}`,
               result 
           })
        .catch(e => {
         	 res.json(loghandler.error)
           })
       })
   })

      // ANIME MANGA
router.get('/animesearch', async(req, res) => {
	     let query = req.query.query
	     if (! query) return res.json(loghandler.notquery)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/anime?apikey=sayajiro&query=${query}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
     router.get('/kusonime', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/anime?apikey=sayajiro&query=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
         
         router.get('/kusonimesearch', async(req, res) => {
	     let query = req.query.query
	     if (!query) return res.json(loghandler.notquery)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=sayajiro&query=${query}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
         
         router.get('/otakudesu', async(req, res) => {
	     let url = req.query.url
	     if (!url) return res.json(loghandler.noturl)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=sayajiro&query=${url}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })

router.get('/manga', async(req, res) => {
	     let query = req.query.query
	     if (!text) return res.json(loghandler.notquery)
	     fetch(encodeURI(`https://api.lolhuman.xyz/api/manga?apikey=sayajiro&query=${query}`))
        .then(response => response.json())
        .then(data => {
        	var result = data;
             res.json({
              status: 200,
             	creator: creator,
                 result: result.result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
     })
     
         // Random Image
          router.get('/randomimage/waifu', async (req, res, next) => {
              fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
             .then(response => response.json())
             .then(async data => {
                  let result = data;
                  let buffer = await fetch(data.url)
                  res.type('png')
                  res.send(await buffer.buffer())
              })
           .catch(e => {
            	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/neko', async (req, res, next) => {
            fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
           .then(response => response.json())
           .then(async data => {
                let result = data;
                let buffer = await fetch(data.url)
                res.type('png')
                res.send(await buffer.buffer())
            })
           .catch(e => {
           	res.json(loghandler.error)
            })
        })
        router.get('/randomimage/husbu', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/loli', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/milf', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
	        let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/randomimage/cosplay', async (req, res, next) => {
	        let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
            let result = waif[Math.floor(Math.random() * (waif.length))]
	        let data = await getBuffer(result)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        //TEXTPRO
        router.get('/textpro/blackpink', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/textpro/neon', async (req, res, next) => {
        	let query = req.query.query
	        if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neon?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/greenneon', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/advanceglow', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/advanceglow?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
     router.get('/textpro/futureneon', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/futureneon?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/sandwriting', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandwriting?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/sandsummer', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandsummer?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/textpro/sandengraved', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandengraved?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/metaldark', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/metaldark?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/textpro/neonlight', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neonlight?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        //PHOTOOXY
        router.get('/photooxy/shadow', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/photooxy/cup', async (req, res, next) => {
        	let query = req.query.query
	        if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/cup?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/cup1', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/cup1?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/romance', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/romance?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
     router.get('/photooxy/smoke', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/burnpaper', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/burnpaper?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/lovemessage', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
        router.get('/photooxy/undergrass', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/undergrass?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/love', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
router.get('/photooxy/coffe', async (req, res, next) => {
        	let query = req.query.query
	      if (!query) return res.json(loghandler.notquery)
	        let data = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=sayajiro&text=${query}`)
            await fs.writeFileSync(__path +'/database/waifu.png', data)
            await res.sendFile(__path +'/database/waifu.png')
            await sleep(3000)
            await fs.unlinkSync(__path + '/database/waifu.png')
        })
 router.use(function (req, res) {
     res.status(404)
    .set("Content-Type", "text/html")
    .sendFile(__path + '/views/404.html');
});

module.exports = router
