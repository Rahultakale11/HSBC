package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import Pageoperation.Homepage;
import Pageoperation.Loginpage;
import configration.config;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class step {

	
	
	
	Loginpage lp;
	Homepage hp ;
	
	@Given("^: Open the firefox$")
	public void open_the_firefox() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver","D://chromedriver.exe");
		config.driver = new ChromeDriver();
		config.driver.get("https://www.google.com/");
		config.driver.manage().window().maximize();
		config.driver.get("https://www.crmpro.com/");
	     Thread.sleep(2000);
	}
  
	
    @When("^: enter the uname \"(.*)\"$")
    public void enter_the_uname(String name) throws Throwable {
	//driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(name);
    	
    lp= new Loginpage(config.driver);
	lp.username(name);
	Thread.sleep(2000);
    
}

   @When("^: Enter Password \"(.*)\"$")
   public void enter_Password(String pass) throws Throwable {
	//driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(pass);
	lp.password(pass);
	//driver.findElement(By.xpath("//input[@value='Login']")).click();
     }

   @Then("^: Click login button$")
    public void click_login_button() throws Throwable {
	lp.click();
	Thread.sleep(2000);
  
	lp.checklogin();
	//config.driver.close();
    
}
}
