module.exports = class extends think.Controller {
  async __before() {
    if(this.ctx.controller === 'index' && this.ctx.action === 'login' ){ //如果是admin_index那么久不验证了，直接返回给予登录。
      //console.log("fasdf65465465asfdf45as4fasd4f4asf45af54as5f4d")
      return;
    }
    let userinfo = await this.session('userinfo')
    if (!think.isEmpty(userinfo)){
      console.log(userinfo)
      //this.assign('userinfo',userinfo);
    }else{
      return this.redirect('/index/login');
    }
  }
};
