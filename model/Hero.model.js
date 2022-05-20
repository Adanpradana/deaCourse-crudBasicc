const parse = require("nodemon/lib/cli/parse");
const db = require("../config");
exports.getHero = (response) => {
  //   querry
  const sql = "SELECT * FROM `hero`";

  //execute data
  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);

    //response data
    const heroes = {
      title: "DOTA-2",
      data: JSON.parse(JSON.stringify(result)),
    };

    JSON.parse(JSON.stringify(result));

    response.render("index", { heroes });
    response.end();
  });
};

exports.getHeroById = (id, response) => {
  const sql = `SELECT * FROM hero WHERE id = "${id}"`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    const hero = {
      title: "DOTA-2",
      data: JSON.parse(JSON.stringify(result)),
    };
    response.render("heroDetail", { hero });
    response.end();
  });
};

exports.updateHeroById = (data, response) => {
  const id = data.id;
  const name = data.name;
  const role = data.role;
  const skill = data.skill;

  const sql = `UPDATE hero SET name = '${name}' , role = '${role}' , skill = '${skill}' WHERE id = '${id}'`;
  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/hero");
    response.end();
  });
};

exports.addHero = (data, response) => {
  const id = data.id;
  const name = data.name;
  const role = data.role;
  const skill = data.skill;

  const sql = `INSERT INTO hero (name, role, skill) VALUES ('${name}' , '${role}' , '${skill}')`;
  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/hero");
    response.end();
  });
};
exports.removeHero = (id, response) => {
  const sql = `DELETE FROM hero WHERE id='${id}'`;
  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/hero");
    response.end();
  });
};
