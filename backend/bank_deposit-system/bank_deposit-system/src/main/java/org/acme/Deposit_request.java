package org.acme;

public class Deposit_request {
    private int RequestID;
    private int CustomerID;
    private String CustomerName;
    private double DepositAmount;
    private String Currency;
    private int Term;

    public Deposit_request() {
    }


    public Deposit_request(int RequestID, int customerId, String customerName, double depositAmount, String currency, int term) {
        this.RequestID = RequestID;
        this.CustomerID = customerId;
        this.CustomerName = customerName;
        this.DepositAmount = depositAmount;
        this.Currency = currency;
        this.Term = term;
    }
    public int getRequestID() {
        return RequestID;
    }
    public void setRequestID(int RequestID) {
        this.RequestID = RequestID;
    }
    public int getCustomerID() {
        return CustomerID;
    }
    public void setCustomerID(int CustomerID) {
        this.CustomerID = CustomerID;
    }
    public String getCustomerName() {
        return CustomerName;
    }
    public void setCustomerName(String CustomerName) {
        this.CustomerName = CustomerName;
    }
    public double getDepositAmount() {
        return DepositAmount;
    }
    public void setDepositAmount(float DepositAmount) {
        this.DepositAmount = DepositAmount;
    }
    public String getCurrency() {
        return Currency;
    }
    public void setCurrency(String Currency) {
        this.Currency = Currency;
    }
    public int getTerm() {
        return Term;
    }
    public void setTerm(int Term) {
        this.Term = Term;
    }
}
