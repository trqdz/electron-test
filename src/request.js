 const data = {
  option: {
    ignore_error: -1,
    enable_sandbox: -1,
    project: {
      request: {
        header: [
          {
            is_checked: "1",
            type: "Text",
            key: "",
            value: "",
            description: "",
          },
        ],
        query: [
          {
            is_checked: "1",
            type: "Text",
            key: "",
            value: "",
            description: "",
          },
        ],
        body: [
          {
            is_checked: "1",
            type: "Text",
            key: "",
            value: "",
            description: "",
          },
        ],
        auth: {
          type: "noauth",
          kv: { key: "", value: "" },
          bearer: { key: "" },
          basic: { username: "", password: "" },
        },
      },
      script: {
        pre_script_switch: true,
        test_switch: true,
        pre_script: "",
        test: "",
      },
    },
    cookies: {
      data: [
        {
          name: "cookie-test6",
          value: "deleted",
          expires: "2022-12-05T08:12:25.682Z",
          maxAge: 0,
          path: "/",
          domain: "echo.apipost.cn",
          cookie_id: "0e0a1450-67f5-4407-a562-6fc4394e3822",
          key: "cookie-test6",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test3",
          value: "%E4%BD%A0%E5%A5%BD",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/",
          domain: "echo.apipost.cn",
          cookie_id: "1dcd37ac-45d0-436a-b72f-7e79d6060160",
          key: "cookie-test3",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test8",
          value: "renge==;-/?",
          domain: "echo.apipost.cn",
          cookie_id: "495edfe4-8302-4c7c-8f0a-9fe267a77dff",
          key: "cookie-test8",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test2",
          value: "0",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/",
          domain: "echo.apipost.cn",
          cookie_id: "7cf86ea6-ab52-46c9-9736-aa72317761ea",
          key: "cookie-test2",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test1",
          value: "0",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/",
          domain: "echo.apipost.cn",
          cookie_id: "85b72d55-b34f-41bf-88e9-f1e6ca188f62",
          key: "cookie-test1",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test5",
          value: "nihao",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/",
          domain: "apipost.cn",
          cookie_id: "ae64b4c5-309a-4720-b6c2-eb078cd7ebe8",
          key: "cookie-test5",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test7",
          value: "0",
          expires: "2022-12-05T07:42:25.682Z",
          maxAge: -1800,
          path: "/",
          domain: "echo.apipost.cn",
          cookie_id: "b39cb6de-99d3-4bd0-978a-76448541bace",
          key: "cookie-test7",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test1-folder",
          value: "B",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/echo",
          domain: "echo.apipost.cn",
          cookie_id: "eb106495-8488-48f0-a962-b8686bf71a85",
          key: "cookie-test1-folder",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "cookie-test4",
          value: "??????===",
          expires: "2022-12-05T09:12:25.682Z",
          maxAge: 3600,
          path: "/",
          domain: ".apipost.cn",
          cookie_id: "f4da6545-1a44-43c2-a2a7-0ee834469991",
          key: "cookie-test4",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
        {
          name: "httponly-cookie",
          value: "httponly-value",
          httpOnly: true,
          domain: "echo.apipost.cn",
          cookie_id: "fdffb575-1aad-4c83-b09b-3c1896ef99cd",
          key: "httponly-cookie",
          project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        },
      ],
      switch: 1,
    },
    collection: [
      {
        target_id: "21c55d44-cf71-4d29-87c0-7ae0abdc2f6a",
        parent_id: "0",
        project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
        mark: "developing",
        target_type: "api",
        example_type: "0",
        name: "echo.apipost",
        method: "POST",
        sort: 1,
        type_sort: 1,
        update_day: 1669824000,
        update_dtime: 1669888951,
        status: 1,
        bak_id: 0,
        version: 1,
        is_publish: 0,
        publisher: 0,
        publish_dtime: 0,
        hash: null,
        is_changed: -1,
        create_dtime: 1669888951,
        is_doc: 0,
        modifier_id: "U307P0E31DF7",
        is_example: 0,
        request: {
          url: "echo.apipost.cn/get.php",
          header: { parameter: [] },
          query: { parameter: [] },
          resful: { parameter: [] },
          body: {
            mode: "form-data",
            parameter: [
              {
                description: "",
                field_type: "String",
                is_checked: 1,
                key: "aaa",
                value: "11111",
                not_null: 1,
                type: "Text",
              },
              {
                description: "",
                field_type: "String",
                is_checked: 1,
                key: "bbb",
                value: "2222",
                not_null: 1,
                type: "Text",
              },
            ],
            raw: "",
            raw_para: [],
          },
          auth: {
            type: "noauth",
            kv: { key: "", value: "" },
            bearer: { key: "" },
            basic: { username: "", password: "" },
            digest: {
              username: "",
              password: "",
              realm: "",
              nonce: "",
              algorithm: "",
              qop: "",
              nc: "",
              cnonce: "",
              opaque: "",
            },
            hawk: {
              authId: "",
              authKey: "",
              algorithm: "",
              user: "",
              nonce: "",
              extraData: "",
              app: "",
              delegation: "",
              timestamp: "",
              includePayloadHash: -1,
            },
            awsv4: {
              accessKey: "",
              secretKey: "",
              region: "",
              service: "",
              sessionToken: "",
              addAuthDataToQuery: -1,
            },
            ntlm: {
              username: "",
              password: "",
              domain: "",
              workstation: "",
              disableRetryRequest: 1,
            },
            edgegrid: {
              accessToken: "",
              clientToken: "",
              clientSecret: "",
              nonce: "",
              timestamp: "",
              baseURi: "",
              headersToSign: "",
            },
            oauth1: {
              consumerKey: "",
              consumerSecret: "",
              signatureMethod: "",
              addEmptyParamsToSign: -1,
              includeBodyHash: -1,
              addParamsToHeader: -1,
              realm: "",
              version: "1.0",
              nonce: "",
              timestamp: "",
              verifier: "",
              callback: "",
              tokenSecret: "",
              token: "",
            },
          },
          description: "",
          event: { pre_script: "", test: "" },
          cookie: { parameter: [] },
        },
        response: {
          success: {
            raw: "",
            parameter: [],
            expect: {
              name: "??????",
              isDefault: 1,
              code: 200,
              contentType: "json",
              verifyType: "schema",
              mock: "",
              schema: [],
            },
          },
          error: {
            raw: "",
            parameter: [],
            expect: {
              name: "??????",
              isDefault: -1,
              code: 404,
              contentType: "json",
              verifyType: "schema",
              mock: "",
              schema: [],
            },
          },
        },
        ai_expect: { none_math_expect_id: "", list: [] },
        enable_ai_expect: -1,
        mock_url: "/get.php",
        is_first_mock_path: 1,
        enable_server_mock: -1,
        is_locked: -1,
      },
    ],
    combined_id: "0",
    test_events: {
      test_id: "9a445c19-7f0a-4262-9048-40db23be3b0c",
      name: "??????????????????2222",
    },
    default_report_name: "??????????????????2222????????????",
    user: {
      role: 2,
      nick_name: "11",
      email: "trq2@qq.com",
      portrait:
        "https://img.cdn.apipost.cn/user/default_profile_photo/Vector-7.png",
      is_manager: 1,
      uuid: "U307P0E31DF7",
      is_super_admin: 1,
      project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
      id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea/U307P0E31DF7",
    },
    env_id: "-1",
    env: { env_id: "-1", env_name: "????????????", env_pre_url: "" },
    environment: {},
    globals: {},
    iterationData: [],
    iterationCount: 1,
    sleep: 0,
    requester: {
      timeout: 0,
      followRedirect: 1,
      maxrequstloop: 5,
      AUTO_CONVERT_FIELD_2_MOCK: 1,
      REQUEST_PARAM_AUTO_JSON: -1,
    },
  },
  test_events: [
    {
      event_id: "85128231-ce76-4d97-8efb-03264ecb17ad",
      test_id: "9a445c19-7f0a-4262-9048-40db23be3b0c",
      project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
      type: "api",
      enabled: 1,
      sort: 0,
      data: {
        parent_id: "0",
        target_id: "21c55d44-cf71-4d29-87c0-7ae0abdc2f6a",
        name: "echo.apipost",
        method: "POST",
      },
      parent_id: "0",
    },
    {
      event_id: "5bc8bd04-f7fc-4d09-99c7-49c3b9105f0c",
      test_id: "9a445c19-7f0a-4262-9048-40db23be3b0c",
      project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
      type: "wait",
      enabled: 1,
      sort: 1,
      data: { sleep: 3000 },
      parent_id: "0",
    },
    {
      event_id: "e94b4e73-35c5-42fe-ad36-0d0e1d3a2a05",
      test_id: "9a445c19-7f0a-4262-9048-40db23be3b0c",
      project_id: "5795b8cb-e1f0-4a03-9a40-6f3c040944ea",
      type: "api",
      enabled: 1,
      sort: 2,
      data: {
        parent_id: "0",
        target_id: "21c55d44-cf71-4d29-87c0-7ae0abdc2f6a",
        name: "echo.apipost",
        method: "POST",
      },
      parent_id: "0",
    },
  ],
};

module.exports= data;
