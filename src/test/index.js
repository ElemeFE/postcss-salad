import postcss from "postcss";
import tape from "tape";
import plugin from "..";
import features from '../features';
import utils from "./utils";

const featuresList = Object.keys(features);
const options = {
  features: {}
};

// disable all features
featuresList.forEach(function(name) {
  if (!utils.exists(name)) return;
  const input = utils.readFixture(name);
  const expected = utils.readFixture(`${name}.expected`);

  options.features.autoprefixer = name === 'autoprefixer';

  plugin(options).process(input).then((result) => {
    let actual = result.css;

    utils.write(utils.fixturePath(`${name}.actual`), actual);

    tape(name, (t) => {
      t.equal(actual, expected);
      t.end();
    });
  }).catch((e) => {
    console.log(e);
  });
});


