//dependencies
var mysql = require('mysql');
var express = require('express');
var app = express();
const twilio = require('twilio');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var axios = require('axios');
var url = require('url');
var mess = new twilio('ACe4ae116e4635b6816025ec5bf22c0b45', 'e1c36d2df5cb19a26e7b4235d58c9510');
var con = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: "1234567890"
});
app.use(bodyParser.json());
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/login', function (req, res) {
  const { email, password } = req.query;
  //generating a random number for the salt rounds, from 10-20
  var hashrounds = Math.floor((Math.random() * 20) + 10);
  con.query("SELECT password FROM sql_hr.users WHERE email='" + email + "'", function (err, result) {
    //getting the password after knowing the email exists.
    if (err) {
      res.send(err);
      throw err
    } else {
      //comparing passwords
      console.log("OK");
      bcrypt.compare(password, result[0].password, function (err, success) {
        if (err) {
          res.send(err);
          throw err;
        } else {
          //if passwords do match
          if (success) {
            //changing the login token
            con.query("SELECT phone FROM sql_hr.users WHERE email='" + email + "'", function (err, results1) {
              if (err) {
                res.send(err)
                throw err;
              } else {
                console.log("OK1");
                bcrypt.hash(results1[0].phone, 4, function (err, hashed) {
                  if (err) {
                    res.send(err)
                    throw err;
                  } else {
                    console.log("OK2")
                    //inserting the new session token to the db
                    con.query("UPDATE sql_hr.users SET session='" + hashed + "' WHERE email='" + email + "'", function () {
                      if (err) {
                        res.send(err)
                        throw err;
                      } else {
                        console.log("OK3");
                        //sending the token to the client
                        res.send(hashed);
                      }
                    })
                  }
                });
              }
            });
          } else {
            //if the passwords dont match
            res.send("Wrong Password")
          }
        }
      });
    }
  });
});

app.get('/all', function (req, res) {
  const { email, password, name, phone, city, sess } = req.query;
  con.query("SELECT * FROM sql_hr.users", function (error, results) {
    if (error) res.send(error)
    else res.send(JSON.stringify(results));
  });
});

app.get('/delete', function (req, res) {
  const { id } = req.query;
  con.query("DELETE FROM sql_hr.users WHERE id=" + id, function (error, results) {
    if (error) res.send(error)
    else res.send("OK");
  });
});

app.get('/deleteOffer', function (req, res) {
  const { id } = req.query;
  console.log(id);
  //http://localhost:3001/deleteOffer?getgame=NBA&getplatform=PS4&givegame=Call%20Of%20Duty&giveplatform=PS4&id=1
  con.query("DELETE FROM sql_hr.offers WHERE id=" + id, function (error, results) {
    if (error) res.send(error)
    else { res.send("OK"); }
  })
});

app.get('/Registration', function (req, res) {
  const { email, password, name, phone, city } = req.query;
  bcrypt.genSalt(5, function (error, salt) {
    if (error) {
      res.send(err);
      throw error;
    } else {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          res.send(err);
          throw err
        } else {
          bcrypt.hash(phone + "SESSION", 5, function (err, hash1) {
            if (err) {
              res.send(err);
              throw err;
            } else {
              //inserting values
              con.query("INSERT INTO sql_hr.users (email,password,phone,name,city,session) VALUES('" + email + "','" + hash + "','" + phone + "','" + name + "','" + city + "','" + hash1 + "')", function (err, results) {
                if (err) {
                  res.send(err);
                  throw err
                } else {
                  res.send(hash1);
                  res.end();
                }
              });
            }
          });

        }
      });
    }
  });
});

app.get('/reg', function (req, res, next) {
  const { email, password, name, phone, city, sess } = req.query;
  con.query("INSERT INTO sql_hr.users (email,password,phone,name,city,session) Values ('" + email + "',md5('" + password + "'),'" + phone + "','" + name + "','" + city + "','" + sess + "')", function (error, results) {
    if (error) res.send(error)
    else res.send("OK");
  });
});

app.get('/emailexists', function (req, res) {
  const { email } = req.query;
  con.query("SELECT * FROM sql_hr.users WHERE email='" + email + "'", function (err, results1) {
    if (err) {
      res.send(err)
      throw err;
    } else {
      if (typeof results1[0] == 'undefined') {
        res.send("OK")
      }
      else {
        res.send("BAD")
      }
    }
  });
})

app.get('/phoneexists', function (req, res) {
  const { phone } = req.query;
  con.query("SELECT * FROM sql_hr.users WHERE phone='" + phone + "'", function (err, results1) {
    if (err) {
      res.send(err)
      throw err;
    } else {
      if (typeof results1[0] == 'undefined') {
        res.send("OK")
      }
      else {
        res.send("BAD")
      }
    }
  });
})

app.get('/addOffer', function (req, res) {
  const { getgame, getplatform, givegame, giveplatform, user_sess } = req.query;
  axios.get("http://localhost:3001/getid?sess=" + user_sess)
    .then((res) => {
      var id = res.data;
      axios.get("http://localhost:3001/getcity?sess=" + user_sess)
        .then((res) => {
          var city = res.data;
          con.query("INSERT INTO sql_hr.offers (user_id,game_get,platform_get,game_give,platform_give,user_city) Values ('" + id + "','" + getgame + "','" + getplatform + "','" + givegame + "','" + giveplatform + "','" + city + "')", function (error, results) {
            if (error) console.log(error)
            else console.log("OK");
          });
        }
        )
    }
    )
  res.send("OK");
});

app.get('/getcity', function (req, res) {
  const { sess } = req.query;
  con.query("SELECT city FROM sql_hr.users WHERE session='" + sess + "'", function (err, results1) {
    if (err) {
      res.send(err)
      throw err;
    } else {
      res.send(results1[0].city);
    }
  });
})

app.get('/getid', function (req, res) {
  const { sess } = req.query;
  con.query("SELECT * FROM sql_hr.users WHERE session='" + sess + "'", function (err, results1) {
    if (err) {
      res.send(err)
      throw err;
    } else {
      console.log(sess);
      res.send('' + results1[0].id);
    }
  });
})

app.get('/searchoffer', function (req, res) {
  const { getgame, getplatform, givegame, giveplatform, city } = req.query;
  if (city == 'No Matter') {
    con.query("SELECT user_id FROM sql_hr.offers WHERE game_get='" + getgame + "' AND platform_get='" + getplatform + "' AND game_give='" + givegame + "' AND platform_give='" + giveplatform + "'", function (err, results1) {
      if (err) {
        res.send(err)
        throw err;
      } else {
        console.log(results1);
        if (results1.length == 0) {
          res.send("NO")
        }
        else {
          res.send(results1);
        }
      }
    });
  }
  else {
    con.query("SELECT user_id FROM sql_hr.offers WHERE game_get='" + getgame + "' AND platform_get='" + getplatform + "' AND game_give='" + givegame + "' AND platform_give='" + giveplatform + "' AND user_city='" + city + "'", function (err, results1) {
      if (err) {
        res.send(err)
        throw err;
      } else {
        console.log(results1);
        if (results1.length == 0) {
          res.send("NO")
        }
        else {
          res.send(results1);
        }
      }
    });
  }

})

app.get('/sms', (req, res) => {
  const { code, tel } = req.query;
  res.send('Hello to the Twilio Server')
  console.log(tel.substr(1))
  mess.messages
    .create({
      from: '+12183182465',
      body: 'Your verification code is:' + code,
      to: '+972' + tel.substr(1).toString()
    })
    .then(message => console.log(message.sid));
});

app.get('/shavit', (req, res) => {
  const { sms } = req.query
  res.send(sms);
  mess.messages
    .create({ body: ", \n liad \n liad", from: '+12183182465', to: '+972533374393' })
    .then(message => console.log(message.sid));
})

app.get('/getinfobyid', function (req, res) {
  const { id } = req.query;
  console.log(id);
  con.query("SELECT * FROM sql_hr.users WHERE ID=" + id, function (error, results) {
    if (error) res.send(error)
    else res.send(results);
  });
});

app.get('/getinfobysess', function (req, res) {
  const { sess } = req.query;
  con.query("SELECT * FROM sql_hr.users WHERE session=" + sess, function (error, results) {
    if (error) res.send(error)
    else res.send(results);
  });
});

app.get('/match', function (req, res) {
  const { get_game, get_platfrom, give_game, give_platfrom, city } = req.query;
  let whatISend = {
    "get_from_him_the_game_id": '',
    "give_the_game_for_him_the_game": '',
    "game": '',
    "platfrom": ''
  };
  con.query("SELECT * FROM sql_hr.offers WHERE game_get='" + get_game + "' AND platform_get='" + get_platfrom + "' AND user_city='" + city + "'", function (error, results) {
    if (error) throw error;
    else {
      for (i = 0; i < 1; i++) {
        con.query("SELECT * FROM sql_hr.offers WHERE game_get='" + results[0].game_give + "' AND platform_get='" + results[0].platform_give + "' AND user_city='" + city + "'", function (err, results1) {
          if (error) throw error;
          else {
            for (j = 0; j < 1; j++) {
              con.query("SELECT * FROM sql_hr.offers WHERE game_get='" + results1[0].game_give + "' AND platform_get='" + results1[0].platform_give + "' AND user_city='" + city + "'", function (err, results2) {
                for (v = 0; v < 1; v++)
                  if (error) throw error;
                  else {
                    console.log(i);
                    console.log(j);
                    console.log(results[0]);
                    console.log(results1[0]);
                    console.log(results2);
                    if (results2[0].game_give == get_game && results2[0].platform_give == get_platfrom) {
                      whatISend.get_from_him_the_game_id = results[0].user_id;
                      whatISend.give_the_game_for_him_the_game = results1[0].user_id;
                      whatISend.game = results2[0].game_get;
                      whatISend.platfrom = results2[0].platform_get;
                      res.send(whatISend);
                    }
                  }
              });
            }
          }
          //console.log(results1.length);
          /*for(j=0; j<results1.length;j++){
            console.log("second");
            console.log(results1);
            //console.log(give_game);
            //console.log(give_platfrom);
            //console.log(results1[j].game_give==give_game && results1[j].platform_give==give_platfrom)
            /*if(results1[j].game_give==give_game && results1[j].platform_give==give_platfrom){
              whatISend.get_from_him_the_game_id=results.user_id;
              whatISend.give_the_game_for_him_the_game=results1.user_id;
              whatISend.game=results.give_game;
              whatISend.platfrom=results.give_platfrom;
              console.log("inner",whatISend);
            }
            if(whatISend.get_from_him_the_game_id!=''){ break; }
          }*/
        });
        if (whatISend.get_from_him_the_game_id != '') { break; }
      };
    };
  });

})

app.get('/matchnew', function (req, res) {
  const { get_game, get_platfrom, give_game, give_platfrom, city } = req.query;
  console.log(get_game)
  let response = {
    "get_id": '',
    "give_id": '',
    "game": '',
    "platfrom": ''
  };
  con.query("SELECT * FROM sql_hr.offers WHERE game_give='" + give_game + "' AND platform_give='" + give_platfrom + "' AND user_city='" + city + "'", function (error, results) {
    if (error) throw error;
    else {
      con.query("SELECT * FROM sql_hr.offers WHERE game_give='" + results[0].game_get + "' AND platform_give='" + results[0].platform_get + "' AND user_city='" + city + "'", function (error, results1) {
        if (error) throw error;
        else {
          console.log(results);
          console.log(results1);
          response.get_id = results1[0].user_id;
          response.give_id = results[0].user_id;
          response.game = results[0].game_get;
          response.platfrom = results[0].platform_get;
          res.send(response);
        }
      });
    }
  });
})

app.get('/getnamebysess', function (req, res) {
  const { sess } = req.query;
  con.query("SELECT name FROM sql_hr.users WHERE session=" + sess, function (error, results) {
    if (error) res.send(error)
    else { res.send(results[0].name); }
  });
});

app.get('/alloffersbysess', function (req, res) {
  const { sess } = req.query;
  con.query("SELECT * FROM sql_hr.users WHERE session='" + sess + "'", function (err, results1) {
    if (err) {
      res.send(err)
      throw err;
    } else {
      con.query("SELECT * FROM sql_hr.offers WHERE user_id=" + results1[0].id, function (error, results) {
        if (error) res.send(error)
        else { res.send(results); }
      });
    }
  });
});

app.get('/interst', function (req, res) {
  const { sess, id, getgame, getplatform, givegame, giveplatform } = req.query;
  //send the interst to the person who interst the offer
  con.query("SELECT phone FROM sql_hr.users WHERE session=" + sess, function (error, results) {
    if (error) throw error;
    else {
      con.query("SELECT * FROM sql_hr.users WHERE id=" + id, function (error, results1) {
        console.log(results1);
        mess.messages
          .create({
            body: ", \n You are interested at offer that you get " + getgame + " for " + getplatform + " and give " + givegame + " for " + giveplatform +
              ". \n The details of your partnar is: \n Name: " + results1[0].name + "\n Email: " + results1[0].email + " \n phone: " + results1[0].phone + " \nCity: " + results1[0].city + "", from: '+12183182465', to: '+972533374393'
          })
          .then(message => console.log(message.sid));
      })
    }
  });
  //send the interst to the person who upload the offer
  con.query("SELECT phone FROM sql_hr.users WHERE id=" + id, function (error, results) {
    if (error) throw error;
    else {
      con.query("SELECT * FROM sql_hr.users WHERE session=" + sess, function (error, results1) {
        console.log(results1);
        mess.messages
          .create({
            body: ", \n Someone is interested at offer that you get " + givegame + " for " + giveplatform + " and give " + getgame + " for " + getplatform +
              ". \n The details of your partnar is: \n Name: " + results1[0].name + "\n Email: " + results1[0].email + " \n phone: " + results1[0].phone + " \nCity: " + results1[0].city + "", from: '+12183182465', to: '+972533374393'
          })
          .then(message => console.log(message.sid));
      })
    }
  });
  res.send("offer");
})

app.get('/sendtheinerest', function (req, res) {
  const { liad, id1, id2 } = req.query;
  mess.messages
  .create({ body: ", \n " + liad, from: '+12183182465', to: '+972533374393' })
  .then(message => console.log(message.sid));
  mess.messages
      .create({ body: ", \n The details of your partnars is:", from: '+12183182465', to: '+972533374393' })
      .then(message => console.log(message.sid));
  con.query("SELECT * FROM sql_hr.users WHERE id=" + id1, function (error, results1) {
    mess.messages
      .create({ body: "b, \n Name: " + results1[0].name + "\n Email: " + results1[0].email + " \n phone: " + results1[0].phone + " \nCity: " + results1[0].city + "", from: '+12183182465', to: '+972533374393' })
      .then(message => console.log(message.sid));
    con.query("SELECT * FROM sql_hr.users WHERE id=" + id2, function (error, results2) {
      mess.messages
      .create({ body: "v, \n Name: " + results2[0].name + "\n Email: " + results2[0].email + " \n phone: " + results2[0].phone + " \nCity: " + results2[0].city + "", from: '+12183182465', to: '+972533374393' })
      .then(message => console.log(message.sid));
    })
  })
})

var server = app.listen(3001, "localhost", function () {
  console.log("on 3001")
});