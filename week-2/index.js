class Rectangle{
    constructor(width,height,color){
        this.height = height ;
        this.width = width;
        this.color = color;
    }
    area(){
        const area = this.width*this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(2,3,"red")
const area = rect.area();
const color = rect.paint();
console.log(area)
  