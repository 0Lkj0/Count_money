const Base = require('./base.js');

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
    this.assign('data',data);
    let allarray = new Array()
    let i = 0;
    for (i = 0; i < 2030; i++) {
      allarray[i] = 0
    }
    let total = 0;
    for (i = 0; i < data.length; i++) {
      allarray[data[i].year] += data[i].money
      total += data[i].money
    }
    for (i = 2021; i < 2030; i++) {
      allarray[i].toFixed(2);
    }
    //console.log(yeararray)
    this.assign('allarray',allarray);
    total = total.toFixed(2);
    this.assign('total',total);
    return this.display();
  }

  async yearAction() {
    var myDate = new Date();
    let year = myDate.getFullYear();
    this.assign('year',year);
    let month = myDate.getMonth() + 1;
    this.assign('month',month);
    let day = myDate.getDate();
    this.assign('day',day);

    let date = this.get();
    const Count_money = this.model('Count_money');
    const data = await Count_money.where({year: date.year}).select();
    this.assign('data',data);
    let yeararray = new Array()
    let i = 0;
    for (i = 0; i < 13; i++) {
      yeararray[i] = 0
    }
    let total = 0;
    for (i = 0; i < data.length; i++) {
      yeararray[data[i].month] += data[i].money
      total += data[i].money
    }
    for (i = 1; i < 13; i++) {
      yeararray[i].toFixed(2);
    }
    //console.log(yeararray)
    this.assign('yeararray',yeararray);
    total = total.toFixed(2);
    this.assign('total',total);
    return this.display();
  }

  async monthAction() {
    var myDate = new Date();
    let year = myDate.getFullYear();
    this.assign('year',year);
    let month = myDate.getMonth() + 1;
    this.assign('month',month);
    let day = myDate.getDate();
    this.assign('day',day);

    let date = this.get();
    const Count_money = this.model('Count_money');
    const data = await Count_money.where({year: date.year, month: date.month}).select();
    this.assign('data',data);
    //console.log(data)
    let montharray = new Array()
    let i = 0;
    for (i = 0; i < 32; i++) {
      montharray[i] = 0
    }
    let total = 0;
    for (i = 0; i < data.length; i++) {
      montharray[data[i].day] += data[i].money
      total += data[i].money
    }
    for (i = 1; i < 13; i++) {
      montharray[i].toFixed(2);
    }
    total = total.toFixed(2);
    this.assign('montharray',montharray);
    this.assign('total',total);
    return this.display();
  }

  async dayAction() {
    var myDate = new Date();
    let year = myDate.getFullYear();
    this.assign('year',year);
    let month = myDate.getMonth() + 1;
    this.assign('month',month);
    let day = myDate.getDate();
    this.assign('day',day);

    let date = this.get();
    const Count_money = this.model('Count_money');
    const data = await Count_money.where({year: date.year, month: date.month, day: date.day}).select();
    this.assign('data',data);
    let total = 0;
    let i = 0;
    for (i = 0; i < data.length; i++) {
      total += data[i].money
    }
    total = total.toFixed(2);
    this.assign('total',total);
    return this.display();
  }

  async deleteAction() {
    let data = this.post();
    //console.log(data)
    const Count_money = this.model('Count_money');
    //console.log(data.isprompt == "lkjwyc123")
    if (data.isprompt == "qwe123"){
      let delet = await Count_money.where({id: data.id}).delete();
      this.json({"succ":true});
    }else{
      this.json({"succ":false});
    }

  }

  async jsAction() {
    return this.display();
  }

  async downAction() {
    let data = this.post();
    //console.log(data)
    if (data.isprompt == "qwe123"){
      const Count_money = this.model('Count_money');
      let down = await Count_money.where({year: data.year}).select();
      this.json({
        "succ":true,
        down
      })
    }else{
      this.json({
        "succ":false
      });
    }
  }
};
