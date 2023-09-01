### ข้อมูล Restaurant
```
METHOD:     GET
ENDPOINT:   /restaurants/:id

## RESPONSE ##
{
    name: string,
    id: number,
    coverImage: string,
    menus: string[],
    activeTimePeriod: {
       open: string
       close: string
     }
}
```

### ข้อมูล Menu List
```
METHOD:     GET
ENDPOINT:   /restaurant/:id/:category/menulist

## RESPONSE ##
[
    {
        name: string
        id: string
        thumbnailImage?: string
        fullPrice: number
        discountedPercent: number
        discountedTimePeriod?: {
        begin: string
        end: string
        }
        sold: number
        totalInStock: number
    }
]    
```

### ข้อมูล Menu Detail
```
METHOD:     GET
ENDPOINT:   /restaurant/:id/menu/:menuId

## RESPONSE ##

    {
        name: string
        id: string
        thumbnailImage?: string
        fullPrice: number
        discountedPercent: number
        discountedTimePeriod?: {
        begin: string
        end: string
        }
        sold: number
        totalInStock: number
        largeImage: string,
        options: {
            label: string
            choices: groupedChoice[]
        }[],
    }


groupedChoice {
    egg? :{
        label: string
    }[]
    spicy? :{
        label: string
    }[]
    rice? :{
        label: string
    }[]
    ice? :{
        label: string
    }[]
    other? :{
        label: string
    }[]
}
```

