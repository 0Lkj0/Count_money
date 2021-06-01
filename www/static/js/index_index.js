$(() => {
    
    function isStr(value){
        console.log(value)
        if(value.match(/^[ ]*$/)){
            return false
        }
        if(value){ // ! "",null,undefined,NaN
            return true
        }
        return false
    }

    $(".spanmoney").hide()
    $(".spanevent").hide()
    $("#money").keyup(function(){
        value = $(this).val()
        if(isNaN(value) || !isStr(value)){
            $(".spanmoney").show()
            $(this).css({
                "box-shadow":"0 0 0 0.2rem rgb(255 0 0 / 25%)",
                "border-color":"white",
            });
            $("#submit")[0].disabled = "disabled"
        }
        else{
            $(".spanmoney").hide()
            $(this).css({
                "box-shadow":"",
                "border-color":"",
            });
            $("#submit")[0].disabled = ""
        }
        //console.log(value)
    })

    $("#event").keyup(function(){
        value = $(this).val()
        if(!isStr(value)){
            $(".spanevent").show()
            $(this).css({
                "box-shadow":"0 0 0 0.2rem rgb(255 0 0 / 25%)",
                "border-color":"white",
            });
            $("#submit")[0].disabled = "disabled"
        }
        else{
            $(".spanevent").hide()
            $(this).css({
                "box-shadow":"",
                "border-color":"",
            });
            $("#submit")[0].disabled = ""
        }
        //console.log(value)
    })
})