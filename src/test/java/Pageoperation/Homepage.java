package Pageoperation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Homepage {

	public Homepage(WebDriver driver)
	{
		PageFactory.initElements(driver,this);
	}
	
	@FindBy(how=How.XPATH,using="//a[text()='Pipeline']")
	WebElement pipeline;
	public void clickpipline()
	{
		pipeline.click();
	}
	////i[@class='fa fa-sign-out icon-2x']
	
	@FindBy(how=How.XPATH,using="//a[@href='https://www.crmpro.com/index.cfm?logout=1']//i")
	WebElement checklogout;
	public void checklogin()
	{
		System.out.println("hello dharmu");

		checklogout.click();
	}

	
}
