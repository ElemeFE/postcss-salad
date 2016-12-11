import tape from "tape";
import {join} from "path";
import plugin, {features} from "..";
import utils from "./utils";
import postcss from "postcss";


var featuresList = Object.keys(features);

// disable all features

featuresList.forEach(function(name) {
  if (!utils.exists(join("features", name))) return;
  const input = utils.readFixture(join("features", name));
  const expected = utils.readFixture(join("features", name + ".expected"));

  let options = { features: {} };

  featuresList.forEach(function(name) {
    options.features[name] = false;
  });

  options.features[name] = true;
  
  plugin(options).process(input).then((result) => {
    let actual = result.css;

    utils.write(utils.fixturePath(join("features", name + ".actual")), actual);

    tape(name, (t) => {
      t.equal(actual, expected);
      t.end();
    });
  }).catch((e) => {
    console.log(e);
  });

});


