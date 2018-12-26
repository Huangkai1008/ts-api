function theCityThatAlwaysSleeps(){
    let getCity:any;

    if(true){
        let city = "Seattle";
        getCity = function(){
            return city;
        }
    }

    return getCity();
}


