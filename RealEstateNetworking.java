import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.*;

import org.json.JSONArray;
import org.json.JSONObject;

public class RealEstateNetworking {

   public static ArrayList<House> getHouseDetails(String searchEntry){
       ArrayList<House> houseArrayList = new ArrayList<>();

       for(int i = 0; i < searchEntry.length(); i++){
           if(searchEntry.substring(i, i+1).equals(",")){
               searchEntry = searchEntry.substring(0,i) + "%2C" + searchEntry.substring(i + 3);
           }
           if(searchEntry.substring(i, i+1).equals("")){
               searchEntry = searchEntry.substring(0,i) + "%20" + searchEntry.substring(i + 3);
           }
       }

       String body = "";
       try {
           HttpRequest request = HttpRequest.newBuilder()
                   .uri(URI.create("https://zillow56.p.rapidapi.com/search?location=" + searchEntry))
                   .header("X-RapidAPI-Key", "5369683703msh0d8168b0fd53192p121c77jsn2464802197da")
                   .header("X-RapidAPI-Host", "zillow56.p.rapidapi.com")
                   .method("GET", HttpRequest.BodyPublishers.noBody())
                   .build();
           HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
           body += response.body();
           System.out.println(body);
       }catch (Exception e){
           System.out.println(e.getMessage());
       }

       JSONObject mainObject  = new JSONObject(body);
       JSONArray jsonArray = mainObject.getJSONArray("results");

       for(int i = 0; i < jsonArray.length(); i++){

           JSONObject currentObj = jsonArray.getJSONObject(i);

           String address = currentObj.getString("streetAddress");
           String metric = currentObj.getString("lotAreaUnit");
           String image = currentObj.getString("imgSrc");
           int lotSize = currentObj.getInt("lotAreValue");
           int bedrooms = currentObj.getInt("bedrooms");
           int bathrooms = currentObj.getInt("bathrooms");
           double price = currentObj.getDouble("price");
           double rentEstimate = currentObj.getDouble("rentZestimate");

           houseArrayList.add(new House(address, price, rentEstimate, lotSize, bedrooms, bathrooms, image, metric));

       }

       return houseArrayList;

   }
}
  