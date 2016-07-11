var jqxhr = $.ajax({
    url: url,
    type: "GET", // 默认为GET,你可以根据需要更改
    cache: true, // 默认为true,但对于script,jsonp类型为false,可以自行设置
    data: {}, // 将请求参数放这里.
    dataType: "json", // 指定想要的数据类型
    jsonp: "callback", // 指定回调处理JSONP类型的请求
    statusCode: { // 如果你想处理各状态的错误的话
    404: handler404,
    500: handler500
    }
});
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);