$(() => {
    function isInt(value){
        if(parseInt(value) == value){
            return true
        }
        return false
    }
    
    $(".spanjs").hide()
    $(".form-control").keyup(function(){
        var numArr = new Array();
        var numOk = new Array();
        $(".form-control").each(function(){
            numArr.push($(this).val());//添加至数组
            index = $(".form-control").index(this) //除去 3 7
            //console.log(index)
            value = $(this).val()
            if (isInt(value) || value == "" || index == 3 || index == 7 || index == 8){
                if(value == "") numOk.push(2)
                else numOk.push(1);//添加至数组
                $(this).next().hide()
                $(this).css({
                    "box-shadow":"",
                    "border-color":"",
                });
            }else{
                numOk.push(0);//添加至数组
                $(this).next().show()
                $(this).css({
                    "box-shadow":"0 0 0 0.2rem rgb(255 0 0 / 25%)",
                    "border-color":"white",
                });
            }
            //jisuan(a, b, c)

        });
        if(numOk[0] && numOk[1] && numOk[2]){
            let i=0, sum1=0
            for(i=0;i<3;i++){
                if(numOk[i] == 1) sum1 = sum1 + (parseInt(numArr[i]) * 7.1)
            }
            //console.log(sum1)
            $("#zonfen1").val(sum1.toFixed(2))
        }
        if(numOk[4] && numOk[5] && numOk[6]){
            let i=0, sum2=0
            for(i=4;i<7;i++){
                let t
                if(i ==4) t = 3.55
                if(i ==5) t = 7.1
                if(i ==6) t = 14.2
                if(numOk[i] == 1) sum2 = sum2 + (parseInt(numArr[i]) * t)
            }
            //console.log(sum2.toFixed(2))
            $("#zonfen2").val(sum2.toFixed(2))
        }
        $("#zonfen3").val((parseFloat($("#zonfen1").val())+parseFloat($("#zonfen2").val())).toFixed(2))
    })

})