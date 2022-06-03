import { createContext, } from "react";

// const [unicornTypes, setUnicornTypes] = useState(undefined);

// ReferenceDataContext = createContext({ unicornTypes, setUnicornTypes });

// const ReferenceDataContextProvider = ({ children }) => {
//   return (
//     <ReferenceDataContext.Provider value={{ unicornTypes, setUnicornTypes }}>
//       {...children}
//     </ReferenceDataContext.Provider>
//   );
// };
var KITCHENS=[{id:"K1",name: "KITCHEN 1", kitchenNo: 1, image:"https://media.istockphoto.com/photos/professional-restaurant-stainless-steel-kitchen-with-coal-embers-picture-id1330509419?s=612x612",address: "Solvägen 33A",
                 tel: "046-12345678"  },
              {id: "K2",name: "KITCHEN 2",kitchenNo: 2, image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612",address: "Solvägen 33A",
                 tel: "046-12345678"},
              {id: "K3",name: "KITCHEN 3",kitchenNo: 3, image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612",address: "Solvägen 33A",
                 tel: "046-12345678" },
              {id: "K4",name: "KITCHEN 4",kitchenNo: 4, image:"https://media.istockphoto.com/photos/professional-restaurant-stainless-steel-kitchen-with-coal-embers-picture-id1330509419?s=612x612",address: "Solvägen 33A",
                 tel: "046-12345678" } 
]
let workStatusOnKitchen ="SCALES";
const KitchenDataContext = createContext({KITCHENS,
       addItemKitchen :(item)=>{
                  let lastItem= KITCHENS[KITCHENS.length - 1];
                  let lastId= lastItem.id.match(/(\d+)/);
                  lastId=(parseInt(lastId[0])+1).toString();
                  item.id="K"+lastId;
                  KITCHENS.push({id:item.id,name:item.name.value,kitchenNo:item.kitchenNo.value,
                                 image:item.image.value,address:item.address.value, tel:item.tel.value});
                          },
       updateItemKitchen :(item,kitId)=>{
             
              for (let i=0; i<KITCHENS.length; i++) {
                     if (KITCHENS[i].id === kitId) {
                            KITCHENS[i].name =item.name.value ;
                            KITCHENS[i].kitchenNo =item.kitchenNo.value ;
                            KITCHENS[i].image =item.image.value ;
                            KITCHENS[i].address =item.address.value ;
                            KITCHENS[i].tel =item.tel.value ;
                        break; 
                     }
                   }
              //     KITCHENS.map(k =>
              //        k.id === "k1"
              //          ? {id:kitId,name:item.name.value,kitchenNo:item.kitchenNo.value,
              //               image:item.image.value,address:item.address.value, tel:item.tel.value}
                            
              //          : k
              //          );
                         },
       workStatusOnKitchen
});
var MATERIALTYPS=[{id:"MT1",description:"Meat",image:"https://picsum.photos/200"},
                  {id:"MT2",description:"Vegetables",image:"https://picsum.photos/200"},
                  {id:"MT3",description:"Bread",image:"https://picsum.photos/200"},
                  {id:"MT4",description:"Fruits",image:"https://picsum.photos/200"},]
const MaterialTypeDataContext = createContext({MATERIALTYPS,
              addItemMaterialType :(item)=>{
                     let lastItem= MATERIALTYPS[MATERIALTYPS.length - 1];
                     let lastId= lastItem.id.match(/(\d+)/);
                     lastId=(parseInt(lastId[0])+1).toString();
                     item.id="MT"+lastId;
                     MATERIALTYPS.push({id:item.id,description:item.description.value,image:item.image.value});
                            },
              updateItemMaterialType :(item,MtId)=>{
              
              for (let i=0; i<MATERIALTYPS.length; i++) {
                     if (MATERIALTYPS[i].id === MtId) {
                            MATERIALTYPS[i].description =item.description.value ;
                            MATERIALTYPS[i].image =item.image.value ;
                            break; 
                     }
                     }
              },
              
       }
       );
var REASONS=[{id:"R1",description:"Bad Quality"},
             {id:"R2",description:"Big Portion"},
             {id:"R3",description:"Bad Cooking"},
            ]
const ReasonDataContext = createContext({REASONS,
   addItemReason :(item)=>{
          let lastItem= REASONS[REASONS.length - 1];
          let lastId= lastItem.id.match(/(\d+)/);
          lastId=(parseInt(lastId[0])+1).toString();
          item.id="R"+lastId;
          REASONS.push({id:item.id,description:item.description.value});
                 },
   updateItemReason :(item,RId)=>{
   
   for (let i=0; i<REASONS.length; i++) {
          if (REASONS[i].id === RId) {
              REASONS[i].description =item.description.value ;
                 break; 
          }
          }
   }
}
);
var SCALES=[{id:"S1", type:"Digital", brand:"Samsung", maxWeight:10, scaleNo:1,
             kitchenId:"K1",kitchenName:"KITCHEN 1", image:"https://picsum.photos/200"},
            {id:"S2", type:"Digital", brand:"LG", maxWeight:5, scaleNo:2,
            kitchenId:"K1",kitchenName:"KITCHEN 1", image:"https://picsum.photos/200"},
            {id:"S3", type:"Digital", brand:"Korona", maxWeight:15, scaleNo:3,
            kitchenId:"K2",kitchenName:"KITCHEN 2", image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612"},
            {id:"S4", type:"Digital", brand:"Samsung", maxWeight:10, scaleNo:4,
             kitchenId:"K1",kitchenName:"KITCHEN 1", image:"https://picsum.photos/200"},
            {id:"S5", type:"Digital", brand:"Samsung", maxWeight:10, scaleNo:5,
             kitchenId:"K1",kitchenName:"KITCHEN 1", image:"https://picsum.photos/200"},
            {id:"S6", type:"Digital", brand:"Samsung", maxWeight:10, scaleNo:6,
             kitchenId:"K1",kitchenName:"KITCHEN 1", image:"https://picsum.photos/200"},
            {id:"S7", type:"Digital", brand:"LG", maxWeight:5, scaleNo:7,
             kitchenId:"K2",kitchenName:"KITCHEN 2", image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612"},
            {id:"S8", type:"Digital", brand:"LG", maxWeight:5, scaleNo:8,
             kitchenId:"K2",kitchenName:"KITCHEN 2", image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612"},
            {id:"S9", type:"Digital", brand:"LG", maxWeight:5, scaleNo:9,
             kitchenId:"K2",kitchenName:"KITCHEN 2", image:"https://media.istockphoto.com/photos/chefs-prepare-meals-in-the-kitchen-picture-id1356314688?s=612x612"},
            ]
const ScaleDataContext = createContext({SCALES,
   addItemScale :(item)=>{
          const thiskitchen = KITCHENS.find(k=>k.name===item.kitchenName.value);
          item.kitchenId = thiskitchen.id;
          let lastItem= SCALES[SCALES.length - 1];
          let lastId= lastItem.id.match(/(\d+)/);
          lastId=(parseInt(lastId[0])+1).toString();
          item.id="S"+lastId;
          SCALES.push({id:item.id, type:item.type.value, brand:item.brand.value, 
                       maxWeight:item.maxWeight.value,scaleNo:item.scaleNo.value, 
                       kitchenId:item.kitchenId, kitchenName:item.kitchenName.value,
                       image: item.image.value});
                 },
   updateItemScale :(item,SId)=>{
       const thiskitchen = KITCHENS.find(k=>k.name===item.kitchenName.value);
       item.kitchenId = thiskitchen.id;
       let index = SCALES.findIndex(s=>s.id===SId);
              SCALES[index].type =item.type.value ;
              SCALES[index].brand =item.brand.value ;
              SCALES[index].maxWeight =item.maxWeight.value ;
              SCALES[index].scaleNo =item.scaleNo.value ;
              SCALES[index].kitchenId =item.kitchenId ;
              SCALES[index].kitchenName =item.kitchenName.value ;
              SCALES[index].image =item.image.value;
   }
}
);
var OPERATIONS=[{id:"O1",kitchenId:"K2", kitchenName:"KITCHEN 2",
                         scaleId:"S3", scaleType:"Digital", scaleNo:3,
                         materialTypeId:"MT2", materialTypeDescription:"Vegetables",
                         reasonId:"R1", reasonDescription:"Bad Quality",
                         weight:0.5, dateTime:"Sun May 08 2022 20:24:31 GMT+0200" },
            
            ]
const OperationDataContext = createContext({OPERATIONS,
       addItemOperation :(item)=>{
              const scale = SCALES.find(s=>s.scaleNo===item.scaleNo.value);
              item.scaleId= scale.id;
              item.kitchenId = scale.kitchenId;
             
              const thisReason = REASONS.find(r=>r.description===item.reasonDescription.value);
              item.reasonId.value = thisReason.id;
             
              const thisMaterialType = MATERIALTYPS.find(mt=>mt.description===item.materialTypeDescription.value);
              item.materialTypeId.value = thisMaterialType.id;
              
              let lastItem= OPERATIONS[OPERATIONS.length - 1];
             if(lastItem!==undefined){
              let lastId= lastItem.id.match(/(\d+)/);
              lastId=(parseInt(lastId[0])+1).toString();
              item.id="O"+lastId;}
              else{
                     item.id="O1";
              }
              item.dateTime= new Date();
              
              OPERATIONS.push({id:item.id, kitchenId:item.kitchenId,kitchenName:item.kitchenName.value,
                               scaleId: item.scaleId,scaleType:item.scaleType.value, scaleNo:item.scaleNo.value, 
                               materialTypeId:item.materialTypeId.value, materialTypeDescription:item.materialTypeDescription.value,
                               reasonId:item.reasonId.value, reasonDescription:item.reasonDescription.value,
                               weight:item.weight.value,dateTime:item.dateTime 
                           });  
                     },
       updateItemOperation :(item,OId)=>{
              const thisReason = REASONS.find(r=>r.description===item.reasonDescription.value);
                     item.reasonId.value = thisReason.id;
                     
              const thisMaterialType = MATERIALTYPS.find(mt=>mt.description===item.materialTypeDescription.value);
                     item.materialTypeId.value = thisMaterialType.id;
                     OPERATIONS.forEach((o)=> {
                            if (o.id === OId) {
                            o.reasonId = item.reasonId;
                            o.reasonDescription = item.reasonDescription.value;
                            o.materialTypeId= item.materialTypeId;
                            o.materialTypeDescription = item.materialTypeDescription.value;
                            o.weight = item.weight.value;
                            }
                     });
       },
       deleteItemOperation :(item,OId)=>{
              const thisReason = REASONS.find(r=>r.description===item.reasonDescription.value);
                     item.reasonId.value = thisReason.id;
                     
              const thisMaterialType = MATERIALTYPS.find(mt=>mt.description===item.materialTypeDescription.value);
                     item.materialTypeId.value = thisMaterialType.id;
                     OPERATIONS.forEach((o)=> {
                            if (o.id === OId) {
                            o.reasonId = item.reasonId;
                            o.reasonDescription = item.reasonDescription.value;
                            o.materialTypeId= item.materialTypeId;
                            o.materialTypeDescription = item.materialTypeDescription.value;
                            o.weight = item.weight.value;
                            }
                     });
       },
       deleteAllItemOperations :(SId)=>{
              OPERATIONS.filter(o=>o.scaleId === SId)
                        .forEach(It => OPERATIONS.splice( OPERATIONS.indexOf(It), 1));
       
              console.log(OPERATIONS);
       }
    }
    );

export { KitchenDataContext,MaterialTypeDataContext,ReasonDataContext, ScaleDataContext, OperationDataContext };