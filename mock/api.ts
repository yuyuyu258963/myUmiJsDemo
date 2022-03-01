export default {
  'GET /api/users' : {users: [1,2]},
  'POST /api/users/create':(_req: any,_res: any) => {
    _res.setHeader('Access-Control-Allow-Origin', '*');
    _res.end("ok");
  }
}