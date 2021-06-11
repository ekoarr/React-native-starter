"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LoadingButton = function (props) {
    var loading = props.loading;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Button title="Loading Button" disabled={loading} onPress={function () { }}/>
      {loading && (<react_native_1.ActivityIndicator style={styles.indicator} animating/>)}
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        width: 200
    },
    indicator: {
        position: 'absolute',
        top: 8,
        right: 8
    }
});
exports["default"] = LoadingButton;
