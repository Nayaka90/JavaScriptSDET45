package stringprogramming;

public class RemoveDuplicate {

	public static void main(String[] args) {
		String str="Testyantra";
		String str1=removeDuplicates(str);
		System.out.println("after removing duplicates "+str1);
	}

	public static String removeDuplicates(String str) {
		String str1="";
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
				str1=str1+str.charAt(i);
		}

		return str1;
	}
}



