var
 contest_number;
var Contestid = new Array;
var Contestname = new Array;
var Handle = new Array;
var Rank = new Array;
var Ratingupdatetimeseconds = new Array;
var Oldrating = new Array;
var Newrating = new Array; 
var builded=0;var spanCounter=0;
var doingSearch=0;var Contest_number;

function callServer(url) {
    var response;
    response = fetch(url).then((resp)=>resp.json())
    .then(function (responseData) { return responseData; })
    .catch(function (error) { return console.log(JSON.stringify(error));})
    
    return response;
}


function getServerData() {
    contest_search();
    if(builded>0){ builded=0; clear();
    alert("we r refrehing ! try again");}
    //getServerData(); 
    if(builded==0){

    var _this = this;
    var url = "http://codeforces.com/api/contest.ratingChanges?contestId="+Contest_number;
    var serverResponse;
    // this.network.callServer(url);
    serverResponse = callServer(url);
    serverResponse.then(function (data) {
        console.log((data));
        if(builded==0 && doingSearch==0){ buildPage();builded=1;}
        parseData(data);
         if(builded==0 && doingSearch==1){doingSearch_after_res();  }
    }).catch(function (err) {
       // console.log(err);
    });
   }
}


function parseData (data){
        let jsonArray=new Array;
        jsonArray = data.result;
        Contestid = [];
        Contestname = [];
        Handle = [];
        Rank = [];
        Ratingupdatetimeseconds = [];
        Oldrating = [];
        Newrating = [];
        console.log(jsonArray.length);
        for (var i = 0; i < jsonArray.length; i++) {
            var jsonObject = jsonArray[i];
            Contestid[i]=jsonObject.contestId;
           Contestname[i]=(jsonObject.contestName);
         Handle[i]=(jsonObject.handle);
            Rank[i]=(jsonObject.rank);
            Ratingupdatetimeseconds[i]=(jsonObject.ratingUpdateTimeSeconds);
          Oldrating[i]=(jsonObject.oldRating);
            Newrating[i]=(jsonObject.newRating);
        }

        if(builded==1)
        {
            builded=2;
            if(doingSearch==0) 
            {
        for(let i = spanCounter; i <spanCounter+20; i++)
        {
           
       let  span1=document.getElementsByTagName('span')[8*i+1];
        span1.innerHTML=`${Contestid[i]}`;
        let span3=document.getElementsByTagName('span')[8*i+3];
        span3.innerHTML=`${Contestname[i]}`;
        let span5=document.getElementsByTagName('span')[8*i+5];
        span5.innerHTML=`${Handle[i]}`;
        let span7=document.getElementsByTagName('span')[8*i+7];
        span7.innerHTML=`${Rank[i]}`;
       }
       spanCounter+=20;
     }}
    }

function buildPage()
{

    for(let i = 0; i <20; i++) {
   
    
        let str1 =  "<span class="+"span"+"> Contest Id : </span > <span class="+"span"+"innerHTML="+'`${Contestid[i]}`'+"> </span> </p>";
        let str2= "<span class="+"span"+"> Contest Name : </span > <span class="+"span"+"innerHTML="+"`${Contestname[i]}`"+"> </span> </p>";
        let str3=  "<span class="+"span"+"> Handle : </span > <span class="+"span"+"innerHTML=`${Handle[i]}`> </span> </p>";
        let str4= "<span class="+"lspan"+"> Rank : </span > <span class="+"lspan"+"innerHTML=`${Rank[i]}`> </span> </p>";
        let  p = document.createElement('label');
        
          p.innerHTML =str1+str2+str3+str4 ;
           
          let div = document.getElementsByTagName('div')[0];
         div.appendChild(p);
         
     
       }
}

function getNextData()
{ if(builded==2)
    {
       
  //  getServerData();
    buildPage();
    console.log("spanCounter "+ spanCounter);
        for(let i = spanCounter; i <spanCounter+20; i++)
           {
       
               { let span1=document.getElementsByTagName('span')[8*i+1];
                span1.innerHTML=`${Contestid[i]}`;
                let span3=document.getElementsByTagName('span')[8*i+3];
                span3.innerHTML=`${Contestname[i]}`;
                let span5=document.getElementsByTagName('span')[8*i+5];
                 span5.innerHTML=`${Handle[i]}`;
                 let span7=document.getElementsByTagName('span')[8*i+7];
                 span7.innerHTML=`${Rank[i]}`;
                  }
                 } 
                spanCounter+=20;
                   }
                   else{
                       alert("get rank list first");
                   }
      }


  function clear( )
      {
       document.location.reload();
 
      }
  function binary_search()
  {
   
      if(doingSearch==1){clear();alert("we r refreshing !try again");}
      doingSearch=1;
      getServerData();


  }
  function doingSearch_after_res()
  {

    var x=document.getElementById('rank_search').value
    console.log(parseInt(x));
    
    let str1 =  "<span class="+"span"+"> Contest Id : </span > <span class="+"span"+"innerHTML="+'`${Contestid[i]}`'+"> </span> </p>";
    let str2= "<span class="+"span"+"> Contest Name : </span > <span class="+"span"+"innerHTML="+"`${Contestname[i]}`"+"> </span> </p>";
    let str3=  "<span class="+"span"+"> Handle : </span > <span class="+"span"+"innerHTML=`${Handle[i]}`> </span> </p>";
    let str4= "<span class="+"lspan"+"> Rank : </span > <span class="+"lspan"+"innerHTML=`${Rank[i]}`> </span> </p>";
    let  p = document.createElement('label');
    
      p.innerHTML =str1+str2+str3+str4 ;
       
      let div = document.getElementsByTagName('div')[0];
     div.appendChild(p);
     let span1=document.getElementsByTagName('span')[1];
     span1.innerHTML=`${Contestid[x-1]}`;
     let span3=document.getElementsByTagName('span')[3];
     span3.innerHTML=`${Contestname[x-1]}`;
     let span5=document.getElementsByTagName('span')[5];
      span5.innerHTML=`${Handle[x-1]}`;
      let span7=document.getElementsByTagName('span')[7];
      span7.innerHTML=`${Rank[x-1]}`;

    
  }    
  function contest_search()
  {
         Contest_number=document.getElementById('contest_search').value;
         console.log(Contest_number);
  }
     
   
