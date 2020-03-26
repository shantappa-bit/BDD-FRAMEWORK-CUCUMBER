package utilities;

import java.util.Random;

import org.apache.commons.lang.RandomStringUtils;

public class RandomNumberandString 
{
	public static void main(String[] args)
	{
//		//by using rando class we can generate deciaml and non decima l numbers 
//		Random r=new Random();
//		int output = r.nextInt(5);
//		System.out.println(output);
//		
//		//case 2
//		
//		double decimal=r.nextDouble();
//		//System.out.println(decimal); // 0.0. <0.1
//		//aprooach 2
//		double decimal1 = Math.random();
//		//System.out.println(decimal1+" d bose");
//		//By using apache commons lang api 
//		
//		String stored2 = RandomStringUtils.randomNumeric(2);
//		System.out.println(stored2+"  last appriach");
//		
//		String weekoff = RandomStringUtils.randomAlphanumeric(10);
//		System.out.println(weekoff+"  tea ");
		
//		String key=RandomStringUtils.randomNumeric(6);
//		String nu=RandomStringUtils.randomAlphanumeric(4);
//		
//		System.out.println(key +" "+nu);
		System.out.println(RandomStringUtils.randomAlphabetic(4));
		
		System.out.println(" ***************");
		
		System.out.println(RandomStringUtils.randomAlphanumeric(4));
		

		
	}

}
