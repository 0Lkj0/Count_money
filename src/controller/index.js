const Base = require('./base.js');
const validator = require('../validator/validator');
module.exports = class extends Base {
  async indexAction() {
    var myDate = new Date();
    let year = myDate.getFullYear();
    this.assign('year',year);
    let month = myDate.getMonth() + 1;
    this.assign('month',month);
    let day = myDate.getDate();
    this.assign('day',day);

    if(this.isPost){ //是否有post
      let data = this.post();
      let temp = validator.indexActionisPost(data)
      this.assign('is_True', temp);
      if (temp){
        let userinfo = await this.session('userinfo')
        let id = userinfo.id
        const Count_money = this.model('C_m_data');
        data["id"] = id
        await Count_money.add(data);
      }
    }
    return this.display();
  }

  async loginAction(){
    //console.log(333)
    if(this.isPost){
      console.log("logined")
      //获取用户名和密码
      let username = this.post('username')
      let password = this.post('password')
      let data = {}
      if(username=="wyc"&&password=="wyc"){
        data["username"] = username
        data["password"] = password
      }
      if (think.isEmpty(data)){
        //登录不成功，返回错误信息。
        return this.fail(403,'账号密码错误！请重新填写');
      }else{
        this.session('userinfo',data);
        return this.redirect('/');//登录成功将用户信息写入session，返回到user首页。
      }
    }
    return this.display();
  }

  async logoutAction(){
    await this.session(null);
    return this.redirect('/');
  }
};
