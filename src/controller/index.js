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

    const Count_money = this.model('Count_money');
    const data = await Count_money.field('*').select();
    if(this.isPost){ //是否有post
      let data = this.post();
      let temp = validator.indexActionisPost(data)
      this.assign('is_True', temp);
      if (temp){
        await Count_money.add(data);
      }
    }
    return this.display();
  }
};
