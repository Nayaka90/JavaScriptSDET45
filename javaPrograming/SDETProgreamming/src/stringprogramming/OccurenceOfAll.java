package stringprogramming;

public class OccurenceOfAll {

	public static void main(String[] args) {
		String str="Testyantra";
		occurence(str);
	}
	public static void occurence(String str) {
		for (int i = 0; i< str.length(); i++) {			
			int count=0;
			for (int j = 0; j < str.length(); j++) {
				if(str.charAt(i)==str.charAt(j))
				{ if(j<i) 
					break;    
				count++;
				}
			} 
			if(count>0)
				System.out.println(str.charAt(i)+"-->"+count); 
		} 
	}
}


