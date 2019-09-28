package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.RenameMe;
import utils.EMF_Creator;
import facades.FacadeExample;
import java.util.ArrayList;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

//Todo Remove or change relevant parts before ACTUAL use
@Path("cors")
public class CorsResource {

   private static ArrayList<Person> persons = new ArrayList();
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CorsResource
     */
    public CorsResource() {

    }


    @Path("/pop")
    @GET
    public String pop() {

        persons.add(new Person("Jens"));
        persons.add(new Person("Brian"));
        
        return "Succes";
    }

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String greeting() {
        String message = "{\"message\":\"Welcome\"}";
        return message;
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        return gson.toJson(persons);
    }

    @POST
//    @Produces({MediaType.APPLICATION_JSON})
//    @Consumes({MediaType.APPLICATION_JSON})
    public String addPerson(String person) {
        Person p = gson.fromJson(person, Person.class);
        persons.add(p);
        return "Succesfully added " + person;
    }

    @PUT
    @Path("/{index}")
    public String updatePerson(@PathParam("index") int index, String person) {
        Person p = gson.fromJson(person, Person.class);
        
        persons.get(index - 1).setName(p.getName());

        return "Succesfully updated" ;
    }

    @DELETE
    @Path("/{id}")
    public String deletePerson(@PathParam("id") int index) {
        persons.remove(index - 1);
        return "Succesfully deleted";
    }

  
    
    
     public class Person{
        private String name;
        public Person(String name){
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
        
    }

 
}
