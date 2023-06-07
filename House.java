public class House {
   private String address;
   private double price;
   private double rentEstimate;
   private int squareFeet;
   private int bedrooms;
   private int bathrooms;
   private String imgSrc;
   private String metric;

   public House(String address, double price, double rentEstimate, int squareFeet, int bedrooms, int bathrooms, String imgSrc, String metric){
       this.address = address;
       this.price = price;
       this.rentEstimate = rentEstimate;
       this.squareFeet = squareFeet;
       this.bedrooms = bedrooms;
       this.bathrooms = bathrooms;
       this.imgSrc = imgSrc;
       this.metric = metric;
   }

   public String getAddress(){
    return address;
   }

   public double getPrice(){
       return price;
   }

   public double getRentEstimate(){
       return rentEstimate;
   }

   public int getSquareFeet(){
       return squareFeet;
   }

   public int getBedrooms(){
       return bedrooms;
   }

   public int getBathrooms(){
       return bathrooms;
   }

   public String getImgSrc(){
       return imgSrc;
   }

   public String getMetric(){
       return metric;
   }

   public int getHouseScore(){
       int score;
       double difference = getPrice() - getRentEstimate(); //if diff is positive bad deal if diff is negative good deal

       if(difference < -500){
           score = 10;
       } else if(difference < -400 && difference >= -500){
           score = 9;
       } else if(difference < -250 && difference >= -400){
           score = 8;
       } else if(difference < -150 && difference >= -250) {
           score = 7;
       }else if(difference < -51 && difference > -150) {
           score = 6;
       }else if(Math.abs(difference) <= 50) {
           score = 5;
       } else if(difference > 50 && difference <= 150){
           score = 4;
       } else if(difference > 150 && difference <= 250){
           score = 3;
       } else if(difference > 250 && difference <= 400){
           score = 2;
       } else if(difference > 400){
           score = 1;
       } else{
           score = 0;
       }
       return score;
   }
}
