// Some features might affect others (eg: var() in a calc()
// in order to prevent issue, the map contains a sort of dependencies list
//
// null == always enable (& no caniuse data)
export default {
  initial: [ "css-all", "css-initial-value" ],
  rem: [ "rem" ]
}
