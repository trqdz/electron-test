const requestData=require('./requestData')
const option = {
  project: {
    request: {
      auth: {
        type: "noauth",
        kv: {
          key: "",
          value: "",
        },
        bearer: {
          key: "",
        }
      },
      query: [],
      header: [],
      body: [],
    },
    script: {
      pre_script: "",
      pre_script_switch: 1,
      test: "",
      test_switch: 1,
    },
  },
  cookies: {
    switch: 1,
    data: [
      {
        name: "cookie-test3",
        value: "你好",
        expires: "2022-12-02T16:05:16.679Z",
        maxAge: 3600,
        path: "/",
        domain: "echo.apipost.cn",
        cookie_id: "2ad50aca-091e-44ae-afe9-a4f62e37d5f4",
        key: "cookie-test3",
        project_id: "7edc6a9c-8466-499d-af45-f8a7479903f6",
      },
    ],
  },
  collection: [
    requestData
  ],
  env_id: "-1",
  env_name: "默认环境",
  env_pre_url: "",
  environment: {},
  scene: "http_request",
  globals: {},
  requester: {
    timeout: 0,
    followRedirect: 1,
    maxrequstloop: 5,
    AUTO_CONVERT_FIELD_2_MOCK: 1,
    REQUEST_PARAM_AUTO_JSON: -1,
  },
  SEND_AFTER_SAVE_EXAMPLE: 1,
};


module.exports=option