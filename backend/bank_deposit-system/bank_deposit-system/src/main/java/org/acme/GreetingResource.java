package org.acme;

import io.agroal.api.AgroalDataSource;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.sql.*;

import java.util.ArrayList;
import java.util.List;

@Path("/api/deposits")
public class GreetingResource {
    @Inject
    AgroalDataSource agroalDataSource;

    // Create GET, to get data from database
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Deposit_request> getDeposit_requests() throws SQLException {
        List<Deposit_request> requests = new ArrayList<>();

        try (Connection con = agroalDataSource.getConnection();
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM deposit_requests")) {

            while (rs.next()) {
                requests.add(new Deposit_request(
                        rs.getInt("request_ID"),
                        rs.getInt("Customer_ID"),
                        rs.getString("Customer_Name"),
                        rs.getDouble("Deposit_Amount"),
                        rs.getString("Currency"),
                        rs.getInt("Term")
                ));
            }
        }
        return requests; 
    }
    //Created POST, to make new request and add it to database
    @POST
    @Path("/new")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createDeposit_request(Deposit_request newRequest) {
        try (Connection con = agroalDataSource.getConnection();
             PreparedStatement ps = con.prepareStatement(
                     "INSERT INTO deposit_requests (customer_id, customer_name, deposit_amount, currency, term) VALUES (?, ?, ?, ?, ?)",
                     Statement.RETURN_GENERATED_KEYS)) {

            ps.setInt(1, newRequest.getCustomerID());
            ps.setString(2, newRequest.getCustomerName());
            ps.setDouble(3, newRequest.getDepositAmount());
            ps.setString(4, newRequest.getCurrency());
            ps.setInt(5, newRequest.getTerm());

            int affectedRows = ps.executeUpdate();

            if (affectedRows == 0) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                        .entity("Creating deposit request failed, no changes made.")
                        .build();
            }


            return Response.status(Response.Status.CREATED)
                    .entity(newRequest)
                    .build();

        } catch (SQLException e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("Database error: " + e.getMessage())
                    .build();
        }
    }
}